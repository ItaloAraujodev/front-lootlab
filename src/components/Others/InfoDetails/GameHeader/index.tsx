"use client";
import Image from "next/image";
import Link from "next/link";
import outerRing from "@/images/outerRing.jpg";
import { useBreadCrumbs } from "@/hooks";

export default function GameHeader() {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    crumbs: [_, gameName],
  } = useBreadCrumbs();
  return (
    <div className="grid items-center md:grid-cols-2">
      <div className="relative flex aspect-square max-w-md items-center">
        <Image
          width={370}
          height={370}
          alt="Imagem do jogo"
          className="h-auto max-w-full rounded-lg"
          src={outerRing}
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-lootlab-font-base md:text-4xl">
          {gameName}
        </h1>
        <p className="text-lootlab-font-highlight">Descrição do {gameName}</p>
        <Link
          href={"https://coinmarketcap.com/pt-br/currencies/outer-ring-mmo-og"}
          className="break-all text-lootlab-font-highlight hover:text-[#ffffff]"
        >
          https://coinmarketcap.com/pt-br/currencies/outer-ring-mmo-og
        </Link>
      </div>
    </div>
  );
}
