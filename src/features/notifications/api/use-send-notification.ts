import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { type SendNotification } from "../schemas/send-notification";
import { toast } from "sonner";

export function useSendNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SendNotification) => {
      const response = await client.api.notifications.$post({
        json: data,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send notification");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Notification sent successfully");

      // Invalidate notifications queries to refresh the list
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to send notification"
      );
    },
  });
}
