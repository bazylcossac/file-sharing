import { fetchUserFiles } from "@/actions/userActions.ts/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useUserFiles = () => {
  return useQuery({
    queryKey: [USER_QUERY_KEYS.userFiles],
    queryFn: fetchUserFiles,
  });
};
