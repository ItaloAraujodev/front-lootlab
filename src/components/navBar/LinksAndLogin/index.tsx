import { Login } from "@/components/Modal/Login";
import NavLinks from "../NavLinks";
import classNames from "classnames";

interface IProps {
  orientation?: "vertical" | "horizontal";
  className?: string;
}

function LinksAndLogin({ orientation = "horizontal", className }: IProps) {
  return (
    <div
      className={classNames(
        className,
        "h-full w-full items-center justify-between gap-4 sm:flex",
        {
          "flex-col items-center justify-center": orientation === "vertical",
        },
      )}
    >
      <NavLinks orientation={orientation} />
      <Login />
    </div>
  );
}

export default LinksAndLogin;
