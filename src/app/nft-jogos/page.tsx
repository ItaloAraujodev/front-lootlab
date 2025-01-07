import { LayoutPage } from "@/components/Layout";
import { Suspense } from "react";

export default function NftJogos() {
  return (
    <LayoutPage className="px-[5%] pt-10">
      <Suspense>
        <h1 className="text-white">NFT Jogos</h1>
      </Suspense>
    </LayoutPage>
  );
}
