import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navBar/Navbar";

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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
