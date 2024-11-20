import Link from "next/link";
import { Login } from "../Modal/Login";

export function NavBar() {
  return (
    <nav className="flex h-14 items-center border-b-[0.5px] border-[#1F2C47] px-6 text-white">
      <h1 className="mr-6 font-russo-one text-2xl">Lootlab</h1>
      <div className="flex h-full w-full items-center justify-between">
        <ul className="flex items-center gap-2">
          <Link
            href="/"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/nft-Jogos"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            NFT Jogos
          </Link>
          <Link
            href="/nft-artes"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            NTF Artes
          </Link>
          <Link
            href="/crypto"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Crypto
          </Link>
        </ul>
        <Login />
      </div>
    </nav>
  );
}
