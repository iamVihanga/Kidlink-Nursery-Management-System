import { toast } from "sonner";
import { useId } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { CreateBadgeSchema } from "../schemas/create-badge";

interface MutationParams {
  values: CreateBadgeSchema;
}

export function useCreateBadge() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async ({ values }: MutationParams) => {
      const res = await client.api.badges.$post({
        json: values
      });

      if (!res.ok) {
        const { message } = await res.json();

        throw new Error(message);
      }

      const data = await res.json();

      return data;
    },
    onMutate: () => {
      toast.loading("Creating badge...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Badge created successfully", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["badges"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create badge", {
        id: toastId
      });
    }
  });

  return mutation;
}
