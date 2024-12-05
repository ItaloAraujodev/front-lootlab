"use client";
import { Login } from "@/components/Modal/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Suspense } from "react";

function AuthConditionalRender() {
  const { data: session } = useSession();
  return (
    <div className="space-x-3">
      {session?.accessToken ? (
        <Link
          className="rounded-lg bg-[#212c52] bg-primary p-2 font-bold text-primary-foreground text-white shadow transition-all hover:bg-[#283563]/60"
          href="/create-post?activatedTab=basic"
        >
          Create Post
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
