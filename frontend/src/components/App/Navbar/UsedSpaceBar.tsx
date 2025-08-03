"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserSpace } from "@/hooks/components/Navbar/getUsedSpace";
import { getBytesToGb } from "@/utils/bytesToGb";

import { useMemo } from "react";

export default function UsedSpaceBar() {
  const { data, isLoading, isError, refetch } = useUserSpace();

  const { usedPercentage, usedSpace, availableSpace } = useMemo(() => {
    return getBytesToGb(data?.usedSpace, data?.availableSpace);
  }, [data]);

  if (isError) {
    return (
      <div>
        <Button className="cursor-pointer h-8" onClick={() => refetch()}>
          Refetch
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <Skeleton className="h-8" />
      </>
    );
  }

  return (
    <>
      <Progress value={usedPercentage} className="bg-primary" />
      <p className="text-xs font-bold mt-2">
        {usedSpace} / {availableSpace} GB
      </p>
    </>
  );
}
