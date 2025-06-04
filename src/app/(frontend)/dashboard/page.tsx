"use client";

import React from "react";
import { useQueries } from "@tanstack/react-query";
import {
  Loader,
  School,
  Users,
  UserRound,
  Smile,
  ShieldCheck,
  ListTodo,
  AlertCircle
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { client } from "@/lib/rpc";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define types for all API responses

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  loading: boolean;
  color: string;
  link: string;
  error?: boolean;
}

export default function DashboardPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  // Common fetch function for all data types
  const fetchData = async (
    endpoint: "admins" | "teachers" | "parents" | "children" | "classes"
  ) => {
    if (!activeOrgData?.id) {
      throw new Error("No active organization");
    }

    const response = await client.api[endpoint].$get({
      query: {
        page: "1",
        limit: "10"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }

    return response.json();
  };

  // Use useQueries for parallel data fetching with strong typing
  const results = useQueries({
    queries: [
      {
        queryKey: ["admins", activeOrgData?.id],
        queryFn: () => fetchData("admins"),
        enabled: !!activeOrgData?.id,
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1
      },
      {
        queryKey: ["teachers", activeOrgData?.id],
        queryFn: () => fetchData("teachers"),
        enabled: !!activeOrgData?.id,
        staleTime: 5 * 60 * 1000,
        retry: 1
      },
      {
        queryKey: ["parents", activeOrgData?.id],
        queryFn: () => fetchData("parents"),
        enabled: !!activeOrgData?.id,
        staleTime: 5 * 60 * 1000,
        retry: 1
      },
      {
        queryKey: ["children", activeOrgData?.id],
        queryFn: () => fetchData("children"),
        enabled: !!activeOrgData?.id,
        staleTime: 5 * 60 * 1000,
        retry: 1
      },
      {
        queryKey: ["classes", activeOrgData?.id],
        queryFn: () => fetchData("classes"),
        enabled: !!activeOrgData?.id,
        staleTime: 5 * 60 * 1000,
        retry: 1
      }
    ]
  });

  // Destructure results for easier access
  const [
    { data: adminsData, isPending: adminsLoading, error: adminsError },
    { data: teachersData, isPending: teachersLoading, error: teachersError },
    { data: parentsData, isPending: parentsLoading, error: parentsError },
    { data: childrenData, isPending: childrenLoading, error: childrenError },
    { data: classesData, isPending: classesLoading, error: classesError }
  ] = results;

  // Check if there are any data fetch errors
  const hasErrors =
    adminsError ||
    teachersError ||
    parentsError ||
    childrenError ||
    classesError;

  // Handle organization loading state
  if (activeOrgPending) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <div className="text-center">
          <Loader className="size-8 animate-spin mx-auto mb-3" />
          <p className="text-muted-foreground">Loading organization data...</p>
        </div>
      </div>
    );
  }

  // Handle organization error or missing org data
  if (!activeOrgData || activeOrgErr) {
    return (
      <div className="px-5 pb-5 flex-1 flex items-center justify-center w-full h-full">
        <Card className="w-full h-full bg-sidebar p-0 flex flex-col items-center justify-center">
          <div className="p-3 rounded-xl bg-primary dark:bg-secondary">
            <ListTodo className="size-8 text-white" />
          </div>
          <h1 className="mt-5 font-heading text-2xl font-semibold">
            Select a nursery to view dashboard
          </h1>
          <p className="text-xs mt-1 text-foreground/60">
            You can select nursery with sidebar nursery switcher or following
            dropdown
          </p>

          <div className="mt-4 w-96">
            <NurserySwitcher />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title={`${activeOrgData.name} Dashboard`}
          description="View key metrics and information for your nursery"
          actionComponent={
            <div className="w-fit rounded-lg">
              <NurserySwitcher />
            </div>
          }
        />

        <Separator />

        {/* Display global error alert if there are any fetch failures */}
        {hasErrors && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem loading some dashboard data. Please try
              refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        {/* Stats summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Admins Card */}
            <LargeStatCard
              icon={<ShieldCheck className="size-10 text-yellow-500" />}
              title="Admins"
              value={adminsData?.pagination?.total || 0}
              loading={adminsLoading}
              error={!!adminsError}
              color="bg-yellow-50 dark:bg-yellow-950/30"
              link="/dashboard/admins"
            />

            {/* Teachers Card */}
            <LargeStatCard
              icon={<UserRound className="size-10 text-blue-500" />}
              title="Teachers"
              value={teachersData?.pagination?.total || 0}
              loading={teachersLoading}
              error={!!teachersError}
              color="bg-blue-50 dark:bg-blue-950/30"
              link="/dashboard/teachers"
            />

            {/* Parents Card */}
            <LargeStatCard
              icon={<Users className="size-10 text-green-500" />}
              title="Parents"
              value={parentsData?.pagination?.total || 0}
              loading={parentsLoading}
              error={!!parentsError}
              color="bg-green-50 dark:bg-green-950/30"
              link="/dashboard/parents"
            />

            {/* Children Card */}
            <LargeStatCard
              icon={<Smile className="size-10 text-purple-500" />}
              title="Children"
              value={childrenData?.pagination?.total || 0}
              loading={childrenLoading}
              error={!!childrenError}
              color="bg-purple-50 dark:bg-purple-950/30"
              link="/dashboard/children"
            />

            {/* Classes Card */}
            <LargeStatCard
              icon={<School className="size-10 text-indigo-500" />}
              title="Classes"
              value={classesData?.pagination?.total || 0}
              loading={classesLoading}
              error={!!classesError}
              color="bg-indigo-50 dark:bg-indigo-950/30"
              link="/dashboard/classes"
            />
          </div>
        </Card>

        {/* Activity Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ListTodo className="size-5" /> Recent Activities
            </h2>
            <div className="space-y-4 min-h-48 flex items-center justify-center">
              <p className="text-muted-foreground">
                No recent activities to display
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="size-5" /> Upcoming Events
            </h2>
            <div className="space-y-4 min-h-48 flex items-center justify-center">
              <p className="text-muted-foreground">
                No upcoming events scheduled
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

// Adds missing Calendar component import
function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function LargeStatCard({
  icon,
  title,
  value,
  loading,
  error,
  color,
  link
}: StatCardProps) {
  return (
    <Card className={`hover:shadow-md transition-shadow ${color} h-full`}>
      <a href={link} className="no-underline">
        <div className="p-6 flex flex-col items-center text-center">
          <div className="bg-background rounded-full p-4 shadow-sm mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>

          {/* Display states based on loading/error/value */}
          {loading ? (
            <div className="flex flex-col items-center">
              <Loader className="size-7 animate-spin text-muted-foreground" />
              <span className="text-xs text-muted-foreground mt-2">
                Loading...
              </span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center">
              <AlertCircle className="size-7 text-destructive" />
              <span className="text-xs text-destructive mt-1">
                Error loading data
              </span>
            </div>
          ) : (
            <>
              <p className="text-4xl font-bold">{value}</p>
              {value === 0 && (
                <p className="text-sm text-muted-foreground mt-1">None yet</p>
              )}
            </>
          )}
        </div>
      </a>
    </Card>
  );
}
