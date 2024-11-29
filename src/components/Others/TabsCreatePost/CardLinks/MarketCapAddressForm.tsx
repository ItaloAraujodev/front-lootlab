"use client";
import { useFormContext } from "react-hook-form";
import type { TFormData } from "../schemas";
import { Input } from "@/components/ui/input";

function MarketCapAddresForm() {
  const { register } = useFormContext<TFormData>();

  return (
    <div className="space-y-2 px-4">
      <div className="flex flex-col justify-between gap-2">
        <Input id="market-cap" {...register("marketLink")} />
      </div>
    </div>
  );
}

export default MarketCapAddresForm;
