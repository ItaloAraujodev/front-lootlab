"use client";
import { Form } from "@/components/Form";
import { CardContent } from "@/components/ui/card";
import { useFormContext, Controller } from "react-hook-form";
import type { FormData } from "../schemas";
import { DatePicker } from "@/components/ui/datePicker";
import classNames from "classnames";
import FinancialInfoInputs from "./FinancialInfoInputs";

function FinancialContent() {
  const {
    formState: { errors },
    control,
  } = useFormContext<FormData>();
  return (
    <CardContent className="flex flex-col space-y-4">
      <Form.Label htmlFor="Launch" title="Launch">
        <Controller
          control={control}
          name="launchInfo.launchDate"
          render={({ field }) => (
            <DatePicker
              className={classNames({
                "border-red-500": errors.launchInfo?.launchDate?.message,
              })}
              date={new Date(field.value || new Date())}
              onChange={field.onChange}
            />
          )}
        />
        <Form.ErrorMessage error={errors.launchInfo?.launchDate?.message} />
      </Form.Label>

      <FinancialInfoInputs />
    </CardContent>
  );
}

export default FinancialContent;
