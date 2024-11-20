"use client";

import { useEffect, useState } from "react";

export default function useBreadCrumbs() {
  const [crumbs, setCrumbs] = useState<string[]>([]);

  // Busca bread crumbs pela url quando a pagina for montada
  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href.split("/");
      const crumbs = fullUrl.splice(3, fullUrl.length);
      setCrumbs(crumbs.map((crumb) => crumb.replace("%20", " ")));
    }
  }, []);

  console.log(crumbs);

  return { crumbs };
}
