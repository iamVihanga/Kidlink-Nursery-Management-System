/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useId } from "react";

import { authClient } from "@/lib/auth-client";
import { type CreateUserSchema } from "../schemas/create-user";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const toastId = useId();

  const mutation = useMutation({
    mutationFn: async (values: CreateUserSchema) => {
      const { data, error } = await authClient.admin.createUser({
        ...values,
        role: (values?.role || "user").toString() as any
      });

      if (error) throw new Error(error.message);

      return data;
    },
    onMutate: () => {
      toast.loading("Creating new user...", { id: toastId });
    },
    onSuccess: () => {
      toast.success("User created successfully !", { id: toastId });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create user", {
        id: toastId
      });
    }
  });

  return mutation;
}
