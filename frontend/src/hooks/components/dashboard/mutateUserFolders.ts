import { addFolder } from "@/actions/userActions.ts/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
export const useMutateAddUserFiles = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USER_QUERY_KEYS.userFolders],
      });
    },
    onError: () => {
      toast.error(t("common.folder.createFolder.toasts.error"));
    },
  });
};
