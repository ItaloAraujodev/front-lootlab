import NavLinks from "../NavLinks";
import classNames from "classnames";
import AuthConditionalRender from "./AuthConditionalRender";

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
          "flex flex-col justify-center": orientation === "vertical",
        },
      )}
    >
      <NavLinks orientation={orientation} />
      <AuthConditionalRender />
    </div>
  );
}

export default LinksAndLogin;
