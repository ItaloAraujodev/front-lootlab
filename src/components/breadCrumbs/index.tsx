"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BreadCrumbs() {
  const [crumbs, setCrumbs] = useState<string[]>([]);

  // Busca crumbs da url quando a pagina for montada
  useEffect(() => {
    const fullUrl = window.location.href.split("/");
    setCrumbs(fullUrl.splice(3, fullUrl.length));
  }, []);

  return (
    <div className="flex gap-3">
      <Link
        href="/"
        className="text-lootlab-font-highlight hover:text-lootlab-font-base transition-all"
      >
        Home {">"}
      </Link>
      {crumbs.map((crumb, index) => (
        <Link
          href={
            index === crumbs.length - 1
              ? window.location.href.split("/").slice(3, 3).join()
              : `/${crumb.toLowerCase()}`
          }
          key={crumb + index}
          className={classNames(
            "text-lootlab-font-highlight hover:text-lootlab-font-base transition-all",
            {
              "text-lootlab-font-base": index === crumbs.length - 1,
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
