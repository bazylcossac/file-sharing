"use client";
import HeaderUser from "./HeaderUser";

function Header() {
  return (
    <>
      <header className="h-full flex items-center justify-between mx-4">
        <HeaderUser />
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold">
            Drop<span className="text-primary">Thing</span>
          </h1>
        </div>
      </header>
    </>
  );
}
export default Header;
