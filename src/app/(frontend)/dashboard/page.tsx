"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Loader,
  School,
  Users,
  UserRound,
  Smile,
  ShieldCheck,
  ListTodo
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { client } from "@/lib/rpc";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { NurserySwitcher } from "@/features/nurseries/components/nursery-switcher";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  // Fetch admins - using the correct endpoint
  const { data: adminsData, isPending: adminsLoading } = useQuery({
    queryKey: ["admins", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { admins: [], pagination: { total: 0 } };

      try {
        const response = await client.api.admins.$get({
          query: {
            page: "1",
            limit: "10"
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching admins:", error);
        return { admins: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Fetch teachers - using the correct endpoint
  const { data: teachersData, isPending: teachersLoading } = useQuery({
    queryKey: ["teachers", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { teachers: [], pagination: { total: 0 } };

      try {
        const response = await client.api.teachers.$get({
          query: {
            page: "1",
            limit: "10"
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching teachers:", error);
        return { teachers: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Fetch parents - using the correct endpoint
  const { data: parentsData, isPending: parentsLoading } = useQuery({
    queryKey: ["parents", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { parents: [], pagination: { total: 0 } };

      try {
        const response = await client.api.parents.$get({
          query: {
            page: "1",
            limit: "10"
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching parents:", error);
        return { parents: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Fetch children - using the correct endpoint
  const { data: childrenData, isPending: childrenLoading } = useQuery({
    queryKey: ["children", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { children: [], pagination: { total: 0 } };

      try {
        const response = await client.api.children.$get({
          query: {
            page: "1",
            limit: "10"
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching children:", error);
        return { children: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Fetch classes - using the correct endpoint
  const { data: classesData, isPending: classesLoading } = useQuery({
    queryKey: ["classes", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { classes: [], pagination: { total: 0 } };

      try {
        const response = await client.api.classes.$get({
          query: {
            page: "1",
            limit: "10"
          }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching classes:", error);
        return { classes: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Combine loading states
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const statsLoading =
    adminsLoading ||
    teachersLoading ||
    parentsLoading ||
    childrenLoading ||
    classesLoading;

  if (activeOrgPending) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Loader className="size-6 animate-spin" />
      </div>
    );
  }

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

        {/* Stats summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Admins Card */}
            <LargeStatCard
              icon={<ShieldCheck className="size-10 text-yellow-500" />}
              title="Admins"
              value={adminsLoading ? "..." : adminsData?.pagination?.total || 0}
              loading={adminsLoading}
              color="bg-yellow-50 dark:bg-yellow-950/30"
              link="/dashboard/admins"
            />

            {/* Teachers Card */}
            <LargeStatCard
              icon={<UserRound className="size-10 text-blue-500" />}
              title="Teachers"
              value={
                teachersLoading ? "..." : teachersData?.pagination?.total || 0
              }
              loading={teachersLoading}
              color="bg-blue-50 dark:bg-blue-950/30"
              link="/dashboard/teachers"
            />

            {/* Parents Card */}
            <LargeStatCard
              icon={<Users className="size-10 text-green-500" />}
              title="Parents"
              value={
                parentsLoading ? "..." : parentsData?.pagination?.total || 0
              }
              loading={parentsLoading}
              color="bg-green-50 dark:bg-green-950/30"
              link="/dashboard/parents"
            />

            {/* Children Card */}
            <LargeStatCard
              icon={<Smile className="size-10 text-purple-500" />}
              title="Children"
              value={
                childrenLoading ? "..." : childrenData?.pagination?.total || 0
              }
              loading={childrenLoading}
              color="bg-purple-50 dark:bg-purple-950/30"
              link="/dashboard/children"
            />

            {/* Classes Card */}
            <LargeStatCard
              icon={<School className="size-10 text-indigo-500" />}
              title="Classes"
              value={
                classesLoading ? "..." : classesData?.pagination?.total || 0
              }
              loading={classesLoading}
              color="bg-indigo-50 dark:bg-indigo-950/30"
              link="/dashboard/classes"
            />
          </div>
        </Card>

        {/* Key statistics  */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4 min-h-48 flex items-center justify-center">
              <p className="text-muted-foreground">No recent activities to display</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4 min-h-48 flex items-center justify-center">
              <p className="text-muted-foreground">No upcoming events scheduled</p>
            </div>
          </Card>
        </div> */}
      </div>
    </PageContainer>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  loading: boolean;
  color: string;
  link: string;
}

function LargeStatCard({
  icon,
  title,
  value,
  loading,
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
          <p className="text-4xl font-bold">
            {loading ? (
              <Loader className="size-7 animate-spin text-muted-foreground" />
            ) : (
              value
            )}
          </p>
          {!loading && value === 0 && (
            <p className="text-sm text-muted-foreground mt-1">None yet</p>
          )}
        </div>
      </a>
    </Card>
  );
}
