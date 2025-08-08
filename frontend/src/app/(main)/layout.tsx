import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-14 flex-shrink-0 sticky top-0 z-50">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex-shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto p-2 no-scrollbar px-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
