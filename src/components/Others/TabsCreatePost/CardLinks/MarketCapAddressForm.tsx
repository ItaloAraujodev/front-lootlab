"use client";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas";
import { Form } from "@/components/Form";
import { Input } from "@/components/ui/input";

function MarketCapAddresForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-2 px-4">
      <div className="flex flex-col justify-between gap-2">
        <Form.Field>
          <Input id="market-cap" {...register("marketCap")} />
          <Form.ErrorMessage error={errors.marketCap?.message} />
        </Form.Field>
      </div>
    </div>
  );
}

export default MarketCapAddresForm;
