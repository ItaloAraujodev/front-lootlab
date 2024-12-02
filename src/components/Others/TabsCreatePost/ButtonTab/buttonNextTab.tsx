"use client";

import { Button } from "@/components/ui/button";
import URLQuery from "@/tools/urlQuery";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getNextTab } from "./whatTabs";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ButtonNextTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activatedTab = searchParams.get("activatedTab") as
    | "basic"
    | "financial"
    | "links"
    | "comment";
  return (
    <Suspense
      fallback={<Skeleton className="h-3 w-5 text-inherit">Proximo</Skeleton>}
    >
      <Button
        onClick={() =>
          router.push(
            URLQuery.addQuery([
              { key: "activatedTab", value: getNextTab(activatedTab) },
            ]),
          )
        }
        variant="link"
        className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
      >
        Próximo
        <ArrowRight />
      </Button>
    </Suspense>
  );
}

export default ButtonNextTab;
