import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import React from "react";

async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full overflow-y-hidden">
      <div className="w-full h-14">
        <Header />
      </div>

      <div className="flex flex-row h-[calc(100vh-3.5rem)]">
        <div>
          <Navbar />
        </div>

        <div className="rounded-lg w-full h-full m-2">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
