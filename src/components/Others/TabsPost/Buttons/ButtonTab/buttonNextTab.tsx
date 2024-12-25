"use client";

import { Button } from "@/components/ui/button";
import URLQuery from "@/tools/urlQuery";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getNextTab } from "./whatTabs";

function ButtonNextTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activatedTab = searchParams.get("activatedTab") as
    | "basic"
    | "financial"
    | "links"
    | "details";
  return (
    <Button
      type="button"
      onClick={() => {
        router.push(
          URLQuery.addQuery([
            { key: "activatedTab", value: getNextTab(activatedTab) },
          ]),
        );
      }}
      variant="link"
      className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
    >
      Próximo
      <ArrowRight />
    </Button>
  );
}

export default ButtonNextTab;
