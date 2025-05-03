import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface FilterParams {
  userId: string;
}

export const useGetUser = (params: FilterParams) => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await client.api.users[":id"].$get({
        param: { id: params.userId }
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const userData = await response.json();

      return userData;
    }
  });

  return query;
};
