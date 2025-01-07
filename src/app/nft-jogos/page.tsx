import { LayoutPage } from "@/components/Layout";
import { NFTJogosComponent } from "@/components/Pages/NFTJogos";
import { Suspense } from "react";

export default function NftJogos() {
  return (
    <LayoutPage className="px-6 pt-10">
      <Suspense>
        <NFTJogosComponent />
      </Suspense>
    </LayoutPage>
  );
}
