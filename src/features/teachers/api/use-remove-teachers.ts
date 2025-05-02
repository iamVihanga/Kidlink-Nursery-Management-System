import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";

export function useRemoveTeacher() {
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
      toast.loading("Removing teacher...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Teacher removed successfully", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to remove teacher", {
        id: toastId
      });
    }
  });

  return mutation;
}
