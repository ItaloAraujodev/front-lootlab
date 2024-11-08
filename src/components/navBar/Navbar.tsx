export function NavBar() {
  return (
    <nav className="flex h-14 items-center border-b-[0.5px] border-[#1F2C47] px-6 text-white">
      <h1 className="mr-6 font-russo-one text-2xl">Lootlab</h1>
      <div>
        <ul className="flex gap-2">
          <li className="cursor-pointer rounded-sm px-2 py-1 text-[#94a7c6] transition-all hover:bg-[#242C3A] hover:text-white">
            Home
          </li>
          <li className="cursor-pointer rounded-sm px-2 py-1 text-[#94a7c6] transition-all hover:bg-[#242C3A] hover:text-white">
            Games
          </li>
          <li className="cursor-pointer rounded-sm px-2 py-1 text-[#94a7c6] transition-all hover:bg-[#242C3A] hover:text-white">
            Quests
          </li>
          <li className="cursor-pointer rounded-sm px-2 py-1 text-[#94a7c6] transition-all hover:bg-[#242C3A] hover:text-white">
            News
          </li>
          <li className="cursor-pointer rounded-sm px-2 py-1 text-[#94a7c6] transition-all hover:bg-[#242C3A] hover:text-white">
            Vault
          </li>
        </ul>
      </div>
    </nav>
  );
}
