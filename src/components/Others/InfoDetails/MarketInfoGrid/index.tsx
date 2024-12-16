"use client";
import useCurrentPost from "@/hooks/useCurrentPost";
import CardInfo from "../CardInfo";
import MarketInfo from "../MarketInfo";

function MarketInfoGrid() {
  const { post } = useCurrentPost();
  const launchInfo = post?.launchInfo;

  console.log(launchInfo);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <CardInfo title="INFORMAÇÕES DE MERCADO">
        <MarketInfo
          title="LAUNCH"
          info={
            String(new Date(launchInfo?.launchDate || "").getFullYear()) || ""
          }
        />
        <MarketInfo
          title="SUPPLY ATUAL"
          info={String(launchInfo?.totalSupply) || ""}
        />
        <MarketInfo
          title="MARKET CAP"
          info={String(launchInfo?.marketCap) || ""}
        />
        <MarketInfo
          title="SUPPLY TOTAL"
          info={String(launchInfo?.totalSupply) || ""}
        />
      </CardInfo>

      <CardInfo title="INFORMAÇÕES DE VENDA">
        <MarketInfo
          title="PRIVATE SALE"
          info={String(launchInfo?.privateSale) || ""}
        />
        <MarketInfo
          title="PUBLIC SALE"
          info={String(launchInfo?.publicSale) || ""}
        />
      </CardInfo>
    </div>
  );
}

export default MarketInfoGrid;
