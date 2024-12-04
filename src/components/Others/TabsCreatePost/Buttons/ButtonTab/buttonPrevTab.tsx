"use client";

import { Button } from "@/components/ui/button";
import URLQuery from "@/tools/urlQuery";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPrevTab } from "./whatTabs";

function ButtonNextTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activatedTab = searchParams.get("activatedTab") as
    | "basic"
    | "financial"
    | "links"
    | "comment";
  return (
    <Button
      type="button"
      onClick={() =>
        router.push(
          URLQuery.addQuery([
            { key: "activatedTab", value: getPrevTab(activatedTab) },
          ]),
        )
      }
      variant="link"
      className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
    >
      <ArrowLeft />
      Anterior
    </Button>
  );
}

export default ButtonNextTab;
