import classNames from "classnames";
import NavLink from "./NavLink";
import Tooltip from "@/components/Others/Tooltip";

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
      <Tooltip>
        <NavLink href="/">NFT Jogos</NavLink>
      </Tooltip>
      <Tooltip>
        <NavLink href="/">NTF Artes</NavLink>
      </Tooltip>
      <Tooltip>
        <NavLink href="/">Crypto</NavLink>
      </Tooltip>
    </ul>
  );
}

export default NavLinks;
