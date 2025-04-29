import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";
import { Nurseries } from "../components/nurseries-table/columns";

export const useDeleteNursery = () => {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (org: Nurseries) => {
      const { data, error } = await authClient.organization.delete({
        organizationId: org.id
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Deleting nursery...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Nursery deleted successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["nurseries"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete nursery", {
        id: toastId
      });
    }
  });

  return mutation;
};
