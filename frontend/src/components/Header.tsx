import { Link } from "lucide-react";
import { Suspense } from "react";
import HeaderClient from "./HeaderClient";

async function Header() {
  return (
    <>
      <header className="h-full flex items-center justify-between mx-4">
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderClient />
        </Suspense>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/dashboard/tokens"
            className="text-[11px] bg-white px-2 py-1 rounded-md text-black font-semibold hover:bg-white/70 transition hidden md:inline-block "
          >
            Buy Tokens
          </Link>
          <p className="font-bold mx-1 text-white/50">/</p>

          {/* <IoSettingsOutline className="font-bold text-white/70 hover:text-white cursor-pointer hidden md:inline-block" /> */}
          {/* <Image
            src={session!.user!.image!}
            alt="user image"
            width={25}
            height={25}
            quality={100}
            className="rounded-full"
          /> */}
        </div>
      </header>
    </>
  );
}
export default Header;
