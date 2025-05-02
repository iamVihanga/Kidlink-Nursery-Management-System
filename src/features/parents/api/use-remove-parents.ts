import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";

export function useRemoveParent() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: { memberId: string }) => {
      const { data, error } = await authClient.organization.removeMember({
        memberIdOrEmail: values.memberId
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Removing parent...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Parent removed successfully", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["parents"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to remove parent", {
        id: toastId
      });
    }
  });

  return mutation;
}
