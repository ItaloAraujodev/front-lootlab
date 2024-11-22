import DialogNavBar from "../Modal/DialogNavBar";
import LinksAndLogin from "./LinksAndLogin";

export function NavBar() {
  return (
    <nav className="relative flex h-14 items-center justify-between border-b-[0.5px] border-[#1F2C47] px-6 text-white">
      <h1 className="mr-6 font-russo-one text-2xl">Lootlab</h1>
      <LinksAndLogin className="hidden" />
      <DialogNavBar />
    </nav>
  );
}
