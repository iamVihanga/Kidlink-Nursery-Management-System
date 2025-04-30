import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface FilterParams {
  page?: number;
  limit?: number;
  search?: string | null;
}

export const useGetNurseries = (params: FilterParams) => {
  const { page = 1, limit = 10, search = "" } = params;

  const query = useQuery({
    queryKey: ["nurseries", { page, limit, search }],
    queryFn: async () => {
      const queryParams = {
        page: page.toString(),
        limit: limit.toString(),
        ...(search && { search })
      };

      const response = await client.api.nurseries.$get({
        query: queryParams
      });

      if (!response.ok) {
        throw new Error("Failed to fetch nurseries");
      }

      const data = await response.json();

      return data;
    }
  });

  return query;
};
