import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface FilterParams {
  childId: string;
}

export const useGetChildBadges = (params: FilterParams) => {
  const { childId } = params;

  const query = useQuery({
    queryKey: ["badges", { childId }],
    queryFn: async () => {
      const response = await client.api.children[":id"].badges.$get({
        param: { id: childId }
      });

      if (!response.ok) {
        const { message } = await response.json();

        throw new Error(message);
      }

      const data = await response.json();

      return data;
    }
  });

  return query;
};
