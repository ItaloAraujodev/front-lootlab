"use client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { NavBar } from "../navBar/Navbar";
import React from "react";
import { SessionProvider } from "next-auth/react";

function LayoutQueryClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 30,
          },
        },
      }),
  );
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ReactQueryDevtools initialIsOpen={false} />
          <NavBar />
          {children}
          <ToastContainer />
        </HydrationBoundary>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default LayoutQueryClient;
