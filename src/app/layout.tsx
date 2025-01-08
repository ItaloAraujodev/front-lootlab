import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import LayoutQueryClient from "@/components/Layout/LayoutQueryClient";

export const metadata: Metadata = {
  title: "LootLab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body monica-locale="pt_BR" className="vsc-initialized">
        <LayoutQueryClient>{children}</LayoutQueryClient>
      </body>
    </html>
  );
}
