"use client";
import React from "react";

import { useUserFolders } from "@/hooks/components/dashboard/getUserFolders";
import { FolderType } from "@/@types/Folder";
import { Skeleton } from "@/components/ui/skeleton";
import CreateFolderDialog from "@/components/App/dashboard/CreateFolderDialog";
import FolderComponent from "@/components/App/dashboard/FolderComponent";
import { useTranslations } from "next-intl";

function Page() {
  const { data, isLoading, isError } = useUserFolders();
  const t = useTranslations();
  if (isLoading) {
    return (
      <div className="flex flex-row gap-2">
        {Array.from(Array(5)).map((_, i) => {
          return <Skeleton className="w-full h-44 rounded-nd my-2" key={i} />;
        })}
      </div>
    );
  }

  if (isError) {
    return <p>error</p>;
  }

  return (
    <div className="mt-2 w-full">
      <CreateFolderDialog />
      {data?.length ? (
        <div className="grid gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 overflow-y-auto ">
          {data?.map((file: FolderType) => (
            <FolderComponent {...file} key={file.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-screen pb-44">
          <p className="text-sm text-accent font-bold">
            {t("common.folder.no_data")}
          </p>
          <CreateFolderDialog />
        </div>
      )}
    </div>
  );
}

export default Page;
