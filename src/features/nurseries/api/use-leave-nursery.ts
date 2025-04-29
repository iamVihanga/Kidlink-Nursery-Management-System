import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";

export const useLeaveNursery = () => {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: { email: string }) => {
      const { data, error } = await authClient.organization.removeMember({
        memberIdOrEmail: values.email
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Leaving nursery...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Left from nursery successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["nurseries"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to leave nursery", {
        id: toastId
      });
    }
  });

  return mutation;
};
