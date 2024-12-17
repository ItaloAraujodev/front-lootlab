"use client";
import useCurrentPost from "@/hooks/useCurrentPost";
import CardInfo from "../CardInfo";
import MarketInfo from "../MarketInfo";
import { formatCurrency } from "@/tools/formatCurrency";

function MarketInfoGrid() {
  const { post } = useCurrentPost();
  const launchInfo = post?.launchInfo;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <CardInfo title="INFORMAÇÕES DE MERCADO">
        <MarketInfo title="LAUNCH">
          <span>
            {String(new Date(launchInfo?.launchDate || "").getFullYear()) || ""}
          </span>
        </MarketInfo>
        <MarketInfo title="SUPPLY ATUAL">
          {String(launchInfo?.totalSupply) || ""}
        </MarketInfo>
        <MarketInfo title="MARKET CAP">{formatCurrency(100)}</MarketInfo>
        <MarketInfo title="SUPPLY TOTAL">
          {formatCurrency(Number(launchInfo?.totalSupply) || 0)}
        </MarketInfo>
      </CardInfo>

      <CardInfo title="INFORMAÇÕES DE VENDA">
        <MarketInfo title="PRIVATE SALE">
          {formatCurrency(launchInfo?.privateSale || 0)}
        </MarketInfo>
        <MarketInfo title="PUBLIC SALE">
          {formatCurrency(launchInfo?.publicSale || 0)}
        </MarketInfo>
      </CardInfo>
    </div>
  );
}

export default MarketInfoGrid;
