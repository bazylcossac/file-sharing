import { addFile } from "@/actions/userActions.ts/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateAddUserFiles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEYS.userFiles] });
    },
    onError: (error) => console.error("Failed to create todo:", error),
  });
};
