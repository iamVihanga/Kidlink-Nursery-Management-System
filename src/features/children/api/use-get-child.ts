import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface Params {
  id: string;
}

export const useGetChild = ({ id }: Params) => {
  const query = useQuery({
    queryKey: ["children"],
    queryFn: async () => {
      const response = await client.api.children[":id"].$get({
        param: { id }
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
