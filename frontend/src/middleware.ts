import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
export { auth } from "@/auth";

// export { auth as middleware } from "@/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();
  console.log(session);
  return NextResponse.next();
}
