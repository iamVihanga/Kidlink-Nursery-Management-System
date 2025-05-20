"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Loader, Bell, Filter, Search, Check, X, ChevronRight, 
  Plus, Users, Tag
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
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const { data: userData } = authClient.useSession();
  const isAdmin = userData?.user?.role === "ADMIN";

  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterTag, setFilterTag] = React.useState<string | null>(null);
  
  // State for new notification dialog
  const [isNewNotificationOpen, setIsNewNotificationOpen] = useState(false);
  const [newNotificationData, setNewNotificationData] = useState({
    title: "",
    message: "",
    selectedTags: [] as string[],
    selectedRecipients: [] as string[]
  });
  
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
        // The API returns an array directly according to the handler
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
        // Based on your API, this returns tags directly
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

  // Fetch all users (for admin to select recipients)
  const {
    data: users = [],
    isPending: usersLoading
  } = useQuery({
    queryKey: ["users", activeOrgData?.id],
    queryFn: async () => {
      if (!activeOrgData?.id || !isAdmin) return [];
      
      try {
        // Assuming you have an API endpoint to get users
        const response = await client.api.users.$get({
          query: { organizationId: activeOrgData.id }
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    },
    enabled: !!activeOrgData?.id && isAdmin
  });
  
  // Send notification mutation
  const sendNotificationMutation = useMutation({
    mutationFn: async (data: {
      title: string;
      message: string;
      recipients: string[];
      tags: string[];
    }) => {
      return client.api.notifications.$post({
        json: {
          title: data.title,
          message: data.message,
          recipients: data.recipients,
          tags: data.tags
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("Notification sent successfully");
      setIsNewNotificationOpen(false);
      setNewNotificationData({
        title: "",
        message: "",
        selectedTags: [],
        selectedRecipients: []
      });
    },
    onError: () => {
      toast.error("Failed to send notification");
    }
  });

  // Function to handle sending a new notification
  const handleSendNotification = () => {
    if (!newNotificationData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    if (!newNotificationData.message.trim()) {
      toast.error("Message is required");
      return;
    }
    
    if (newNotificationData.selectedTags.length === 0) {
      toast.error("At least one tag is required");
      return;
    }
    
    if (newNotificationData.selectedRecipients.length === 0) {
      toast.error("At least one recipient is required");
      return;
    }
    
    sendNotificationMutation.mutate({
      title: newNotificationData.title,
      message: newNotificationData.message,
      recipients: newNotificationData.selectedRecipients,
      tags: newNotificationData.selectedTags
    });
  };

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
                  onClick={() => setIsNewNotificationOpen(true)}
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

      {/* New Notification Dialog */}
      <Dialog open={isNewNotificationOpen} onOpenChange={setIsNewNotificationOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Notification</DialogTitle>
            <DialogDescription>
              Create a notification to send to users in your organization.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input 
                id="title" 
                value={newNotificationData.title}
                onChange={(e) => setNewNotificationData({
                  ...newNotificationData,
                  title: e.target.value
                })}
                placeholder="Notification title"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                value={newNotificationData.message}
                onChange={(e) => setNewNotificationData({
                  ...newNotificationData,
                  message: e.target.value
                })}
                placeholder="Enter notification message"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Tag className="h-4 w-4" /> Tags
              </label>
              <Select 
                value={newNotificationData.selectedTags.join(',')}
                onValueChange={(value) => {
                  setNewNotificationData({
                    ...newNotificationData,
                    selectedTags: value ? value.split(',') : []
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select tags" />
                </SelectTrigger>
                <SelectContent>
                    {tagsLoading ? (
                        <div className="flex items-center justify-center p-2">
                        <Loader className="h-4 w-4 mr-2 animate-spin" />
                        Loading tags...
                        </div>
                    ) : (
                        // Ensure tags is an array before mapping
                        Array.isArray(tags) ? 
                        tags.map(tag => (
                            <SelectItem key={tag.id} value={tag.id}>
                            {tag.name}
                            </SelectItem>
                        ))
                        : (
                        <SelectItem disabled value="">
                            No tags available
                        </SelectItem>
                        )
                    )}
                    </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" /> Recipients
              </label>
              <Select 
                value={newNotificationData.selectedRecipients.join(',')}
                onValueChange={(value) => {
                  setNewNotificationData({
                    ...newNotificationData,
                    selectedRecipients: value ? value.split(',') : []
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select recipients" />
                </SelectTrigger>
                <SelectContent>
                  {usersLoading ? (
                    <div className="flex items-center justify-center p-2">
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Loading users...
                    </div>
                  ) : (
                    users.map(user => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name || user.email}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsNewNotificationOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSendNotification}
              disabled={sendNotificationMutation.isPending}
            >
              {sendNotificationMutation.isPending ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>Send Notification</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
}