import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex h-14 items-center border-b-[0.5px] border-[#1F2C47] px-6 text-white">
      <h1 className="mr-6 font-russo-one text-2xl">Lootlab</h1>
      <div>
        <ul className="flex gap-2">
          <Link
            href="/"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/games"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Games
          </Link>
          <Link
            href="/quests"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Quests
          </Link>
          <Link
            href="/news"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            News
          </Link>
          <Link
            href="/vault"
            className="cursor-pointer rounded-sm px-2 py-1 text-lootlab-font-highlight transition-all hover:bg-[#242C3A] hover:text-white"
          >
            Vault
          </Link>
        </ul>
      </div>
    </nav>
  );
}
