import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

export function useGetClass() {
  const mutation = useMutation({
    async mutationFn(values: { id: string }) {
      const response = await client.api.classes[":id"].$get({
        param: { id: values.id }
      });

      if (!response.ok) {
        const { message } = await response.json();

        throw new Error(message);
      }

      const data = await response.json();

      return data;
    },
    onError(error) {
      toast.error(error.message || "Failed to fetch lesson !");
    }
  });

  return mutation;
}
