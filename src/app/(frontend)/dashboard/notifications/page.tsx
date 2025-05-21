"use client";

import React from "react";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { AddNotificationModal } from "@/features/notifications/components/add-notification-modal";


export default function NotificationsPage() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title="Notifications"
          description="View your notifications" 
          actionComponent={<button onClick={() => setOpen(true)}>Add Notification</button>}
        />

        <AddNotificationModal open={open} onOpenChange={setOpen} />
      </div>
    </PageContainer>
  );
}