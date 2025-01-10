"use client";

import usePostStore from "@/stores/post.store";
import CardInfo from "../CardInfo";
import MarketInfo from "../MarketInfo";
import { formatCurrency } from "@/tools/formatCurrency";

function MarketInfoGrid() {
  const { post } = usePostStore();
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
          {String(launchInfo?.currentSupply) || ""}
        </MarketInfo>
        {post?.category === "NFT Jogos" && (
          <>
            <MarketInfo title="MARKET CAP">
              {formatCurrency(launchInfo?.marketCap)}
            </MarketInfo>
            <MarketInfo title="SUPPLY TOTAL">
              {formatCurrency(Number(launchInfo?.totalSupply))}
            </MarketInfo>
          </>
        )}
      </CardInfo>

      <CardInfo title="INFORMAÇÕES DE VENDA">
        <MarketInfo title="PRIVATE SALE">
          {formatCurrency(launchInfo?.privateSale)}
        </MarketInfo>
        <MarketInfo title="PUBLIC SALE">
          {formatCurrency(launchInfo?.publicSale)}
        </MarketInfo>
      </CardInfo>
    </div>
  );
}

export default MarketInfoGrid;
