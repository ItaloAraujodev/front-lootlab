"use client";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import { Form } from "@/components/Form";
import { Input } from "@/components/ui/input";

function MarketCapAddresForm() {
  const { register } = useFormContext<FormData>();

  return (
    <div className="space-y-2 px-4">
      <div className="flex flex-col justify-between gap-2">
        <Form.Field>
          <Input id="market-cap" {...register("cardLinks.marketCap")} />
        </Form.Field>
      </div>
    </div>
  );
}

export default MarketCapAddresForm;
