import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { client } from "@/lib/rpc";
import { type UpdateChildSchema } from "@/features/children/schemas/update-child";

interface MutationParams {
  id: string;
  body: UpdateChildSchema;
}

export function useUpdateChild() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: MutationParams) => {
      const res = await client.api.children[":id"].$patch({
        json: values.body,
        param: { id: values.id }
      });

      if (!res.ok) {
        const { message } = await res.json();

        throw new Error(message);
      }

      const data = await res.json();

      return data;
    },
    onMutate: () => {
      toast.loading("Updating child...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Child updated successfully", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["children"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create child", {
        id: toastId
      });
    }
  });

  return mutation;
}
