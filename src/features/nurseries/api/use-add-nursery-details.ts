import { useId } from "react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { type NurseryDetailsUpsertSchemaT } from "@/features/nurseries/schemas/upsert-nursery-details";

interface MutationParams {
  nurseryId: string;
  formData: NurseryDetailsUpsertSchemaT;
}

export const useAddNurseryDetails = () => {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: MutationParams) => {
      const updatedResultRes = await client.api.nurseries.details[":id"].$patch(
        {
          param: { id: values.nurseryId },
          json: values.formData
        }
      );

      if (!updatedResultRes.ok) {
        const errorRes = await updatedResultRes.json();

        throw new Error(errorRes.message);
      }

      const updatedResult = await updatedResultRes.json();

      return updatedResult;
    },
    onMutate: () => {
      toast.loading("Updating nursery details...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Nursery details updated successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["nurseries"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update nursery", {
        id: toastId
      });
    }
  });

  return mutation;
};
