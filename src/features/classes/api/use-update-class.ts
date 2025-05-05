import { useId } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { UpdateClassSchema } from "../schemas/update-class";
import { client } from "@/lib/rpc";

export function useUpdateClass() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async ({
      id,
      values
    }: {
      id: string;
      values: UpdateClassSchema;
    }) => {
      // Only send the fields that the client should provide
      const response = await client.api.classes[":id"].$patch({
        param: { id },
        json: values
      });

      if (!response.ok) {
        const { message } = await response.json();

        throw new Error(message);
      }

      const data = await response.json();

      return data;
    },
    onMutate() {
      toast.loading("Updating class...", { id: toastId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessons"] });
      toast.success("Class updated successfully", { id: toastId });
    },
    onError: (error) => {
      toast.error("Failed to update class", {
        id: toastId,
        description: error.message
      });
    }
  });

  return mutation;
}
