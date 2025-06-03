import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { toast } from "sonner";

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (notificationId: string) => {
      const response = await client.api.notifications.read.$patch({
        json: { id: notificationId }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to mark notification as read");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate notifications queries to refresh the list
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error 
          ? error.message 
          : "Failed to mark notification as read"
      );
    }
  });
}