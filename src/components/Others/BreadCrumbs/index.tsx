"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BreadCrumbs() {
  const [crumbs, setCrumbs] = useState<string[]>([]);

  // Busca bread crumbs pela url quando a pagina for montada
  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href.split("/");
      setCrumbs(fullUrl.splice(3, fullUrl.length));
    }
  }, []);

  return (
    <div className="flex gap-3">
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
