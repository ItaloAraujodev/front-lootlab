import classNames from "classnames";
import NavLink from "./NavLink";

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
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">NFT Jogos</NavLink>
      <NavLink href="/">NTF Artes</NavLink>
      <NavLink href="/">Crypto</NavLink>
    </ul>
  );
}

export default NavLinks;
