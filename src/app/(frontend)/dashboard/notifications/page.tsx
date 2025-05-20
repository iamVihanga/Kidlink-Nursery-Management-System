"use client";

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader, Bell, Filter, Search, Check, X, ChevronRight } from "lucide-react";

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
import { toast } from "sonner";
import { NotificationSchema } from "@/types/schema-types";
import { z } from "zod";

// Define the Notification type based on the schema
type Notification = z.infer<typeof NotificationSchema>;

export default function NotificationsPage() {
  const {
    data: activeOrgData,
    error: activeOrgErr,
    isPending: activeOrgPending
  } = authClient.useActiveOrganization();

  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterTag, setFilterTag] = React.useState<string | null>(null);
  
  // Fetch notifications
  const {
    data: notificationsData,
    isPending: notificationsLoading,
    error: notificationsError
  } = useQuery({
    queryKey: ["notifications", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { notifications: [], pagination: { total: 0 } };
      
      try {
        // Fetch notifications for the current user in this organization
        const response = await client.api.notifications.$get({
          query: { organizationId: activeOrgData.id }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching notifications:", error);
        return { notifications: [], pagination: { total: 0 } };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Fetch notification tags for filtering
  const {
    data: tagsData,
    isPending: tagsLoading
  } = useQuery({
    queryKey: ["notification-tags", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id) return { tags: [] };
      
      try {
        const response = await client.api.notifications.tags.$get({
          query: { organizationId: activeOrgData.id }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching notification tags:", error);
        return { tags: [] };
      }
    },
    enabled: !!activeOrgData?.id
  });

  // Mark notification as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (notificationId: string) => {
      return client.api.notifications[notificationId].read.$post();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: () => {
      toast.error("Failed to mark notification as read");
    }
  });

  // Mark all notifications as read mutation
  const markAllAsReadMutation = useMutation({
    mutationFn: async () => {
      return client.api.notifications.read.all.$post({
        query: { organizationId: activeOrgData?.id }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("All notifications marked as read");
    },
    onError: () => {
      toast.error("Failed to mark all notifications as read");
    }
  });

  // Delete notification mutation
  const deleteNotificationMutation = useMutation({
    mutationFn: async (notificationId: string) => {
      return client.api.notifications[notificationId].$delete();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: () => {
      toast.error("Failed to delete notification");
    }
  });

  // Handle the notifications data
  const notifications = notificationsData?.notifications || [];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = 
      notification.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      notification.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = !filterTag || notification.tags?.includes(filterTag);
    
    return matchesSearch && matchesFilter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (notificationId: string) => {
    markAsReadMutation.mutate(notificationId);
  };

  const handleMarkAllAsRead = () => {
    markAllAsReadMutation.mutate();
  };

  const handleDeleteNotification = (notificationId: string) => {
    deleteNotificationMutation.mutate(notificationId);
  };

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
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleMarkAllAsRead}
              disabled={unreadCount === 0 || markAllAsReadMutation.isPending}
            >
              {markAllAsReadMutation.isPending ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Check className="mr-2 h-4 w-4" />
              )}
              Mark all as read
            </Button>
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
                tagsData?.tags?.map(tag => (
                  <DropdownMenuItem key={tag.id} onClick={() => setFilterTag(tag.name)}>
                    {tag.name}
                  </DropdownMenuItem>
                ))
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
              {filteredNotifications.map((notification) => (
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
                        {notification.tags?.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(notification.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleMarkAsRead(notification.id)}
                        disabled={notification.read || markAsReadMutation.isPending}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleDeleteNotification(notification.id)}
                        disabled={deleteNotificationMutation.isPending}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
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
    </PageContainer>
  );
}