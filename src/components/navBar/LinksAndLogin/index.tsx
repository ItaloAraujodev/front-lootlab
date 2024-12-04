import { Login } from "@/components/Modal/Login";
import NavLinks from "../NavLinks";
import classNames from "classnames";
import Link from "next/link";

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
      <div className="space-x-3">
        <Link href="/create-post?activatedTab=basic">Create Post</Link>
        <Login />
      </div>
    </div>
  );
}

export default LinksAndLogin;
