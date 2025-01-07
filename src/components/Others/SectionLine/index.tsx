import type { IPost } from "@/interfaces/interfaces";
import Link from "next/link";
import GameList from "./GameList";

interface ISectionLineProps {
  iconTitle: React.ReactNode;
  title: string;
  href: "nft-jogos" | "nft-artes";
  posts?: IPost[];
  isLoading: boolean;
}

function SectionLine({
  href,
  isLoading,
  iconTitle,
  title,
  posts,
}: ISectionLineProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-4 text-white">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-lootlab-font-base">
            {iconTitle} {title}
          </h1>
          <span className="text-white/60">
            {posts?.length ?? 0}{" "}
            {(posts?.length ?? 0) > 1 ? "Resultados" : "Resultado"}
          </span>
        </div>
        <Link
          href={`/${href}`}
          className="text-white/60 transition-all hover:text-white"
        >
          Ver mais
        </Link>
      </div>

      <GameList posts={posts || []} isLoading={isLoading} />
    </div>
  );
}

export default SectionLine;
