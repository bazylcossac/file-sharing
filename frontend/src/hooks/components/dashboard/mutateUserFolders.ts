import { addFolder, deleteFolder } from "@/actions/userActions.ts/actions";
import { USER_QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
export const useMutateAddUserFolder = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USER_QUERY_KEYS.userFolders],
      });
      toast.success(t("common.folder.createFolder.toasts.success"));
    },
    onError: () => {
      toast.error(t("common.folder.createFolder.toasts.error"));
    },
  });
};

export const useMutateDeleteFolder = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USER_QUERY_KEYS.userFolders],
      });
      toast.success(t("common.folder.deleteFolder.toasts.success"));
    },
    onError: () => {
      toast.error(t("common.folder.deleteFolder.toasts.error"));
    },
  });
};
