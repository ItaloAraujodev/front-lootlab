import classNames from "classnames";
import NavLink from "./NavLink";
import Tooltip from "@/components/Others/Tooltip";
import Link from "next/link";

interface IProps {
  orientation?: "horizontal" | "vertical";
}
function NavLinks({ orientation = "horizontal" }: IProps) {
  return (
    <ul
      className={classNames("flex items-center gap-2", {
        "flex-col": orientation === "vertical",
      })}
    >
      <Link
        className="cursor-pointer select-none rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
        href="/"
      >
        Home
      </Link>
      <NavLink href="/nft-jogos">NFT Jogos</NavLink>
      <NavLink href="/nft-artes">NTF Artes</NavLink>
      <Tooltip>
        <NavLink href="/">Crypto</NavLink>
      </Tooltip>
    </ul>
  );
}

export default NavLinks;
