import React from "react";
import FileComponent from "@/components/App/dashboard/EmptyFileComponent";
import EmptyFileComponent from "@/components/App/dashboard/EmptyFileComponent";
function page() {
  return (
    <div className="flex gap-2">
      <EmptyFileComponent />
      <FileComponent />
    </div>
  );
}

export default page;
