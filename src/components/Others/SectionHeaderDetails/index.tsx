"use client";
import { useBreadCrumbs } from "@/hooks";
import { Common } from "../../Common";
import { BsHexagonFill } from "react-icons/bs";

export default function SectionHeaderDetails() {
  const {
    crumbs: [crumb],
  } = useBreadCrumbs();
  return (
    <div className="flex w-2/5 items-center gap-6 capitalize">
      <Common.CommonTitle title={crumb || ""} />
      <div className="relative">
        <BsHexagonFill className="h-16 w-16 fill-green-500" />
        <h3 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-xl font-black">
          {7.5}
        </h3>
      </div>
    </div>
  );
}
