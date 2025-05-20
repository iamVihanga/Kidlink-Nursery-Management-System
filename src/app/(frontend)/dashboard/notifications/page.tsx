"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Loader, Bell, Filter, Search, Plus
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { client } from "@/lib/rpc";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { NotificationSchema } from "@/types/schema-types";
import { z } from "zod";
import { AddNotificationModal } from "@/features/notifications/components/add-notification-modal";

// Define the Notification type based on the schema
type Notification = z.infer<typeof NotificationSchema>;

export default function NotificationsPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  const { data: userData } = authClient.useSession();
  const isAdmin = userData?.user?.role === "ADMIN";

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterTag, setFilterTag] = React.useState<string | null>(null);
  
  // State for add notification modal
  const [isAddNotificationOpen, setIsAddNotificationOpen] = useState(false);
  
  // Fetch notifications
  const {
    data: notificationsResponse = [],
    isPending: notificationsLoading,
    error: notificationsError
  } = useQuery({
    queryKey: ["notifications", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return [];
      
      try {
        const response = await client.api.notifications.$get();
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching notifications:", error);
        return [];
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Ensure notifications is always an array
  const notifications = Array.isArray(notificationsResponse) ? notificationsResponse : [];

  // Fetch notification tags for filtering
  const {
    data: tagsResponse = [],
    isPending: tagsLoading
  } = useQuery({
    queryKey: ["notification-tags"],
    queryFn: async () => {
      try {
        const response = await client.api.notifications.tag.$get();
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching notification tags:", error);
        return [];
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Ensure tags is always an array
  const tags = Array.isArray(tagsResponse) ? tagsResponse : [];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = 
      (notification.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
       notification.message?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Check if notification has any tags that match the filter
    const notificationTagNames = Array.isArray(tags) ? 
        tags
            .filter(tag => notification.tags?.includes(tag.id))
            .map(tag => tag.name)
        : [];
    
    const matchesFilter = !filterTag || notificationTagNames.includes(filterTag);
    
    return matchesSearch && matchesFilter;
  });

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  if (activeOrgPending) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Loader className="size-6 animate-spin" />
      </div>
    );
  }

  if (!activeOrgData || activeOrgErr) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Card className="p-6 max-w-md">
          <div className="text-center">
            <Bell className="size-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold">No nursery selected</h2>
            <p className="text-muted-foreground mt-2">
              Please select a nursery to view notifications
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (notificationsError) {
    return (
      <PageContainer scrollable={true}>
        <div className="flex flex-1 flex-col space-y-6">
          <AppPageShell
            title="Notifications"
            description="View your notifications"
          />
          <Separator />
          <Card className="p-6 text-center">
            <div className="text-center">
              <Bell className="size-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Failed to fetch notifications</h2>
              <p className="text-muted-foreground mt-2">
                Please try again later
              </p>
            </div>
          </Card>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title="Notifications"
          description={`You have ${unreadCount} unread notifications`}
          actionComponent={
            isAdmin ? (
              <div className="flex gap-2">
                <Button
                  size="sm" 
                  onClick={() => setIsAddNotificationOpen(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Notification
                </Button>
              </div>
            ) : null
          }
        />

        <Separator />

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notifications..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                {filterTag ? `Tag: ${filterTag}` : 'Filter by tag'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilterTag(null)}>
                All notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {tagsLoading ? (
                <DropdownMenuItem disabled>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Loading tags...
                </DropdownMenuItem>
              ) : (
                // Ensure tags is an array before mapping
                Array.isArray(tags) ? 
                  tags.map(tag => (
                    <DropdownMenuItem key={tag.id} onClick={() => setFilterTag(tag.name)}>
                      {tag.name}
                    </DropdownMenuItem>
                  ))
                : (
                  <DropdownMenuItem disabled>
                    No tags available
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Notifications list */}
        <Card className="p-0 overflow-hidden">
          {notificationsLoading ? (
            <div className="py-12 text-center">
              <Loader className="size-8 text-primary mx-auto mb-3 animate-spin" />
              <h3 className="font-medium text-lg">Loading notifications</h3>
            </div>
          ) : filteredNotifications.length > 0 ? (
            <ul className="divide-y">
              {filteredNotifications.map((notification) => {
                // Find tag names that match this notification's tag IDs
                const notificationTagNames = tags
                  .filter(tag => notification.tags?.includes(tag.id))
                  .map(tag => tag.name);
                
                return (
                  <li 
                    key={notification.id}
                    className={`p-4 hover:bg-muted/30 transition-colors ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{notification.title}</h3>
                          {!notification.read && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {notificationTagNames.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="py-12 text-center">
              <Bell className="size-8 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-medium text-lg">No notifications found</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {searchTerm || filterTag ? 'Try adjusting your filters' : 'You\'re all caught up!'}
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Add Notification Modal - Only rendered when needed */}
      {isAdmin && (
        <AddNotificationModal 
          open={isAddNotificationOpen}
          onOpenChange={setIsAddNotificationOpen}
          organizationId={activeOrgData?.id}
        />
      )}
    </PageContainer>
  );
}