'use client'

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bell, Clock, AlertCircle, Info, Search, Plus } from "lucide-react";
import { client } from "@/lib/rpc";
import PageContainer from "@/components/layouts/page-container";
import { AppPageShell } from "@/components/layouts/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddNotificationModal from "@/features/notifications/components/add-notification-modal";
import { format } from "date-fns";

// Define notification interface
interface Tag {
  name: string;
}

interface Sender {
  name?: string;
  email?: string;
}

interface Notification {
  id: string;
  content: string;
  tags?: Tag[];
  sender?: Sender;
  createdAt: string;
}

// Function to fetch notifications
const useGetNotifications = () => {
  return useQuery<Notification[]>({
    queryKey: ["notifications"],
    queryFn: async () => {
      const response = await client.api.notifications.$get();
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch notifications");
      }
      
      return response.json();
    }
  });
};

// Notification Item Component
const NotificationItem = ({ notification }: { notification: Notification }) => {
  // Determine the icon based on tag name, defaulting to Info icon
  const getIcon = () => {
    if (!notification.tags || notification.tags.length === 0) {
      return <Info className="h-5 w-5 text-green-500" />;
    }
    
    const tagName = notification.tags[0]?.name?.toLowerCase();
    
    if (tagName?.includes('reminder')) {
      return <Clock className="h-5 w-5 text-blue-500" />;
    } else if (tagName?.includes('alert') || tagName?.includes('emergency')) {
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    } else if (tagName?.includes('event')) {
      return <Bell className="h-5 w-5 text-yellow-500" />;
    } else {
      return <Info className="h-5 w-5 text-green-500" />;
    }
  };
  
  // Format the date to a friendly string
  const formatDate = (dateString: string | number | Date): string => {
    try {
      const date = new Date(dateString);
      return format(date, "MMM d, yyyy 'at' h:mm a");
    } catch (e) {
      return String(dateString);
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            {getIcon()}
            <CardTitle className="text-lg">
              {notification.tags && notification.tags.length > 0 
                ? notification.tags[0].name 
                : "Notification"}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="flex justify-between items-center">
          <span>From: {notification.sender?.name || notification.sender?.email || "System"}</span>
          <span className="text-xs text-muted-foreground">{formatDate(notification.createdAt)}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{notification.content}</p>
      </CardContent>
    </Card>
  );
};

export default function NotificationsPage() {
  // State for search and modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch notifications
  const { data: notifications, isLoading, error } = useGetNotifications();

  // Filter notifications based on search query
  const filteredNotifications = notifications?.filter(notification => {
    if (!searchQuery) return true;
    
    return (
      (notification.content || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (notification.tags?.some(tag => 
        tag.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
  }) || [];

  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-1 flex-col space-y-6">
        <AppPageShell
          title="Notifications"
          description="View and manage your notifications" 
          actionComponent={
            <Button onClick={() => setOpenAddModal(true)}>
              <Plus className="mr-1 h-4 w-4" />
              Add Notification
            </Button>
          }
        />

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notifications..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Separator />

        {/* Notifications List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-12">
              <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></span>
              <p className="mt-2">Loading notifications...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              <AlertCircle className="mx-auto h-12 w-12 text-red-500 opacity-70" />
              <h3 className="mt-4 text-lg font-medium">Error loading notifications</h3>
              <p className="mt-2 text-sm">
                {error instanceof Error ? error.message : "An unknown error occurred"}
              </p>
            </div>
          ) : filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <NotificationItem 
                key={notification.id} 
                notification={notification}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <Bell className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
              <h3 className="mt-4 text-lg font-medium">No notifications found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {searchQuery ? "No notifications match your search." : "You don't have any notifications yet."}
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Use the imported AddNotificationModal component */}
        {/* <AddNotificationModal /> */}
      </div>
    </PageContainer>
  );
}