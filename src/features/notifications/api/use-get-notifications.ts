import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export interface Notification {
  id: string;
  content: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}

interface NotificationRecipient {
  id: string;
  notificationId: string;
  recipientId: string;
  readAt: string | null;
}

export function useGetNotifications(filter?: "all" | "unread" | "read") {
  return useQuery({
    queryKey: ["notifications", filter],
    queryFn: async () => {
      const response = await client.api.notifications.$get({
        query: filter ? { filter } : undefined
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch notifications");
      }

      const data: Notification[] = await response.json();
      return data;
    }
  });
}
