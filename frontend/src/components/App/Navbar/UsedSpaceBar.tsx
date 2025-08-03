"use client";
import { Progress } from "@/components/ui/progress";
import { useUserSpace } from "@/hooks/components/Navbar/getUsedSpace";
import { getBytesToGb } from "@/utils/bytesToGb";

import { useMemo } from "react";

export default function UsedSpaceBar() {
  const { data, isLoading, isError } = useUserSpace();

  const { usedPercentage, usedSpace, availableSpace } = useMemo(() => {
    return getBytesToGb(data?.usedSpace, data?.availableSpace);
  }, [data]);

  if (isLoading) {
    return <p>loading</p>;
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
