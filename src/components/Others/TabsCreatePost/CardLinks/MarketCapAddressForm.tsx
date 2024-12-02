"use client";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import { Input } from "@/components/ui/input";

function MarketCapAddresForm() {
  const { register } = useFormContext<FormData>();

  return (
    <div className="space-y-2 px-4">
      <div className="flex flex-col justify-between gap-2">
        <Input id="market-cap" {...register("market_link")} />
      </div>
    </div>
  );
}

export default MarketCapAddresForm;
