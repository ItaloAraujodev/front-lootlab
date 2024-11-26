"use client";

import { useBreadCrumbs } from "../../../hooks";
import classNames from "classnames";
import Link from "next/link";

export default function BreadCrumbs() {
  const { crumbs } = useBreadCrumbs();
  return (
    <div className="flex w-full items-start gap-3">
      <Link
        href="/"
        className="text-lootlab-font-highlight transition-all hover:text-lootlab-font-base"
      >
        Home {">"}
      </Link>
      {crumbs.map((crumb, index) => (
        <Link
          href={index === crumbs.length - 1 ? "" : `/${crumb.toLowerCase()}`}
          key={crumb + index}
          className={classNames(
            "text-lootlab-font-highlight transition-all hover:text-lootlab-font-base",
            {
              "text-white hover:cursor-default": index === crumbs.length - 1,
            },
          )}
        >
          {crumb.charAt(0).toUpperCase() + crumb.slice(1)}{" "}
          {index !== crumbs.length - 1 && ">"}
        </Link>
      ))}
    </div>
  );
}
