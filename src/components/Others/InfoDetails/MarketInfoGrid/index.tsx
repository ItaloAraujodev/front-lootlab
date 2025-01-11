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
        <div className="space-y-1">
          <MarketInfo title="Launch">
            <span>
              {String(new Date(launchInfo?.launchDate || "").getFullYear()) ||
                ""}
            </span>
          </MarketInfo>
          <MarketInfo title="Supply Atual">
            {post?.category === "NFT Artes"
              ? formatCurrency(
                  Number(launchInfo?.currentSupply),
                  post?.category,
                  true,
                )
              : String(launchInfo?.currentSupply) || ""}
          </MarketInfo>
          {post?.category === "NFT Jogos" && (
            <>
              <MarketInfo title="Market Cap">
                {formatCurrency(launchInfo?.marketCap, post?.category)}
              </MarketInfo>
              <MarketInfo title="Supply Total">
                {formatCurrency(
                  Number(launchInfo?.totalSupply),
                  post?.category,
                )}
              </MarketInfo>
            </>
          )}
        </div>
      </CardInfo>

      <CardInfo title="INFORMAÇÕES DE VENDA">
        <div className="space-y-1">
          <MarketInfo title="Private Sale">
            {formatCurrency(launchInfo?.privateSale, post?.category, true)}
          </MarketInfo>
          <MarketInfo title="Public Sale">
            {formatCurrency(launchInfo?.publicSale, post?.category, true)}
          </MarketInfo>
        </div>
      </CardInfo>
    </div>
  );
}

export default MarketInfoGrid;
