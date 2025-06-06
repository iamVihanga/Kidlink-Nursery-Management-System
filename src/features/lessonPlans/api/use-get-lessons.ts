import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetLessons = () => {
  const query = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const queryParams = {
        page: "1",
        limit: "100"
      };

      const response = await client.api.lessons.$get({
        query: queryParams
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
