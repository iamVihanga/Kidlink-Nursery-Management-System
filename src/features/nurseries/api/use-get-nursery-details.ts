import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface FilterParams {
  nurseryId: string;
}

export const useGetNurseryDetails = (params: FilterParams) => {
  const { nurseryId } = params;

  const query = useQuery({
    queryKey: ["nurseries"],
    queryFn: async () => {
      const response = await client.api.nurseries.details[":id"].$get({
        param: {
          id: nurseryId
        }
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message);
      }

      const data = await response.json();

      return data;
    }
  });

  return query;
};
