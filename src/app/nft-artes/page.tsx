import { LayoutPage } from "@/components/Layout";
import { Suspense } from "react";

export default function NftArtes() {
  return (
    <LayoutPage className="pt-10">
      <Suspense>
        <h1 className="text-white">NFT Artes</h1>
      </Suspense>
    </LayoutPage>
  );
}
