"use client";

import React from "react";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Separator } from "@/components/ui/separator";
import { NewNotificationModal } from "@/features/notifications/components/new-notification-modal";
import { NotificationsList } from "@/features/notifications/components/notifications-list";
import { Card, CardContent } from "@/components/ui/card";
import { useGetNotifications } from "@/features/notifications/api/use-get-notifications";
import { Bell } from "lucide-react";

export default function NotificationPage() {
  // Get unread count for the badge
  const { data: unreadNotifications } = useGetNotifications("unread");
  const unreadCount = unreadNotifications?.length || 0;

  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-4">
        <AppPageShell
          title="Notifications"
          description="Manage and review all your notifications"
          actionComponent={<NewNotificationModal />}
        />

        <Separator />

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Your Notifications</h2>
                {unreadCount > 0 && (
                  <span className="ml-2 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    {unreadCount} unread
                  </span>
                )}
              </div>

              <NotificationsList />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
