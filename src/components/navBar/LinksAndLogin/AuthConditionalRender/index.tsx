"use client";
import { Login } from "@/components/Modal/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Suspense } from "react";
// import NavLink from "../../NavLinks/NavLink";

function AuthConditionalRender() {
  const { data: session } = useSession();
  return (
    <div className="space-x-3">
      {session?.accessToken ? (
        <Link
          className="cursor-pointer select-none rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          href="/create-post?activatedTab=basic"
        >
          Criar Post
        </Link>
      ) : (
        <Suspense>
          <Login />
        </Suspense>
      )}
    </div>
  );
}

export default AuthConditionalRender;
