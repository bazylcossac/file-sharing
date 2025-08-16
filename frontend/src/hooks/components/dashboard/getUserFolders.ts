import { fetchUserFolders } from "@/actions/userActions.ts/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useUserFolders = () => {
  return useQuery({
    queryKey: [USER_QUERY_KEYS.userFolders],
    queryFn: fetchUserFolders,
  });
};
