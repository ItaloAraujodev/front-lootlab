import { LayoutPage } from "@/components/Layout";
import { NFTArtesComponent } from "@/components/Pages/NFTArtes";
import { Suspense } from "react";

export default function NftArtes() {
  return (
    <LayoutPage className="pt-10">
      <Suspense>
        <NFTArtesComponent />
      </Suspense>
    </LayoutPage>
  );
}
