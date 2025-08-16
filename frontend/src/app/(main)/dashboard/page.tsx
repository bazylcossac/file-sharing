"use client";
import React from "react";

import { useUserFolders } from "@/hooks/components/dashboard/getUserFolders";
import { FolderType } from "@/@types/Folder";
import { Skeleton } from "@/components/ui/skeleton";
import CreateFileDialog from "@/components/App/dashboard/CreateFileDialog";
import FolderComponent from "@/components/App/dashboard/FolderComponent";

function Page() {
  const { data, isLoading, isError } = useUserFolders();

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
    <div className="mt-2">
      <CreateFileDialog />
      <div className="grid gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 overflow-y-auto">
        {data?.map((file: FolderType) => (
          <FolderComponent {...file} key={file.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
