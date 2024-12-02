"use client";

import { Button } from "@/components/ui/button";
import URLQuery from "@/tools/urlQuery";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPrevTab } from "./whatTabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

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
    </Suspense>
  );
}

export default ButtonNextTab;
