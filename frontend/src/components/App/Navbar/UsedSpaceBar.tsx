"use client";
import { Progress } from "@/components/ui/progress";
import { useUserSpace } from "@/hooks/components/Navbar/getUsedSpace";

export default function UsedSpaceBar() {
  const { data, isLoading, isError } = useUserSpace();
  console.log(data);
  return (
    <>
      <Progress value={70} className="bg-primary" />
      <p className="text-xs font-bold mt-2">8.23GB / 10.00GB</p>
    </>
  );
}
