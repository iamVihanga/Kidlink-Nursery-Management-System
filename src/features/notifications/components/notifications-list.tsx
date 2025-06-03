"use client";

import { useState } from "react";
import { useGetNotifications } from "../api/use-get-notifications";
import { NotificationCard } from "./notification-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BellOff, AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationsList() {
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "read">("all");

  const {
    data: notifications,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching
  } = useGetNotifications(activeTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value as "all" | "unread" | "read");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="read">Read</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => refetch()}
          disabled={isLoading || isRefetching}
        >
          <RefreshCcw
            className={`h-4 w-4 mr-2 ${isRefetching ? "animate-spin" : ""}`}
          />
          Refresh
        </Button>
      </div>

      {isLoading && (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error
              ? error.message
              : "Failed to fetch notifications"}
          </AlertDescription>
        </Alert>
      )}

      {!isLoading && !isError && notifications?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-3 mb-3">
            <BellOff className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No notifications</h3>
          <p className="text-muted-foreground mt-1 max-w-sm">
            {activeTab === "all"
              ? "You don't have any notifications yet."
              : activeTab === "unread"
                ? "You don't have any unread notifications."
                : "You don't have any read notifications."}
          </p>
        </div>
      )}

      {!isLoading && !isError && notifications && notifications.length > 0 && (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification as any}
            />
          ))}
        </div>
      )}
    </div>
  );
}
