"use client";
import { useParams } from "next/navigation";
import React from "react";

function Folder() {
  const { folderId } = useParams();
  return <div>folder page {folderId}</div>;
}

export default Folder;
