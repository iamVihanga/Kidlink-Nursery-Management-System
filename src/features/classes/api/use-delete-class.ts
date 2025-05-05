import { useId } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

export function useDeleteClass() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: { id: string }) => {
      // Only send the fields that the client should provide
      const response = await client.api.classes[":id"].$delete({
        param: { id: values.id }
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const data = await response.json();

      return data;
    },
    onMutate() {
      toast.loading("Deleting class...", { id: toastId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      toast.success("Class deleted successfully", { id: toastId });
    },
    onError: (error) => {
      toast.error("Failed to delete class", {
        id: toastId,
        description: error.message
      });
    }
  });

  return mutation;
}
