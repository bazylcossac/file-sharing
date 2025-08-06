"use client";
import React from "react";
import FileComponent from "@/components/App/dashboard/FileComponent";
import EmptyFileComponent from "@/components/App/dashboard/EmptyFileComponent";

import { useUserFiles } from "@/hooks/components/dashboard/getUserFiles";
import { FileType } from "@/@types/file";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  const { data, isLoading, isError } = useUserFiles();

  if (!isLoading) {
    return (
      <div className="flex-1 flex-row">
        {Array.from(Array(3)).map((_, i) => {
          return <Skeleton className="w-auto h-24 rounded-nd my-2" key={i} />;
        })}
      </div>
    );
  }

  if (isError) {
    return <p>error</p>;
  }

  return (
    <div>
      <EmptyFileComponent />
      <div className="w-full flex gap-2 flex-wrap">
        {data?.map((file: FileType) => (
          <FileComponent {...file} key={file.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
