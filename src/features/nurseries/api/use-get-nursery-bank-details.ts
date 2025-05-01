import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface FilterParams {
  nurseryId: string;
}

export const useGetNurseryBankDetails = (params: FilterParams) => {
  const { nurseryId } = params;

  const query = useQuery({
    queryKey: ["bank-details"],
    queryFn: async () => {
      const response = await client.api.nurseries.bank[":id"].$get({
        param: { id: nurseryId }
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
