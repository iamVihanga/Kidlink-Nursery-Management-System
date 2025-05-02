import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";
import { type InviteParentSchema } from "@/features/parents/schemas/invite-parent";

export function useInviteParent() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: InviteParentSchema) => {
      const { data, error } = await authClient.organization.inviteMember({
        email: values.email,
        role: "member"
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Sending invitation...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("Invitation sent successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["parents"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to sent invitation", {
        id: toastId
      });
    }
  });

  return mutation;
}
