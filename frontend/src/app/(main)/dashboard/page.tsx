"use client";
import React from "react";
import FileComponent from "@/components/App/dashboard/FileComponent";

import { useUserFiles } from "@/hooks/components/dashboard/getUserFiles";
import { FileType } from "@/@types/file";
import { Skeleton } from "@/components/ui/skeleton";
import CreateFileDialog from "@/components/App/dashboard/CreateFileDialog";

function Page() {
  const { data, isLoading, isError } = useUserFiles();

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
    <div>
      <CreateFileDialog />
      <div className="w-full flex gap-2 flex-wrap overflow-y-auto">
        {data?.map((file: FileType) => (
          <FileComponent {...file} key={file.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
