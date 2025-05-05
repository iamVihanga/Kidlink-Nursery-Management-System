import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { client } from "@/lib/rpc";

export function useRemoveChild() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: { childId: string }) => {
      const res = await client.api.children[":id"].$delete({
        param: { id: values.childId }
      });

      if (!res.ok) {
        const { message } = await res.json();

        throw new Error(message);
      }

      const data = await res.json();

      return data;
    },
    onMutate: () => {
      toast.loading("Removing child...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Child removed successfully", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["children"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to remove child", {
        id: toastId
      });
    }
  });

  return mutation;
}
