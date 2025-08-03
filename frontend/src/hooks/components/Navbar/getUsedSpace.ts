import { fetchUserSpace } from "@/actions/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useUserSpace = () => {
  return useQuery({
    queryKey: [USER_QUERY_KEYS.userSpace],
    queryFn: fetchUserSpace,
    refetchOnWindowFocus: true,
  });
};
