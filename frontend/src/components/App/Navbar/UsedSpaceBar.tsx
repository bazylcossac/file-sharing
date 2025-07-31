"use client";
import { Progress } from "@/components/ui/progress";

export default function UsedSpaceBar() {
  return (
    <>
      <Progress value={70} className="bg-primary" />
      <p className="text-xs font-bold mt-2">8.23GB / 10.00GB</p>
    </>
  );
}
