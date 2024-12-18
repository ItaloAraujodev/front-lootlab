"use client";
import { Login } from "@/components/Modal/Login";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import NavLink from "../../NavLinks/NavLink";

function AuthConditionalRender() {
  const { data: session } = useSession();
  return (
    <div className="space-x-3">
      {session?.accessToken ? (
        <NavLink href="/create-post?activatedTab=basic">Criar Post</NavLink>
      ) : (
        <Suspense>
          <Login />
        </Suspense>
      )}
    </div>
  );
}

export default AuthConditionalRender;
