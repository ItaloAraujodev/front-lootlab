"use client";
import { Form } from "@/components/Form";
import { CardContent } from "@/components/ui/card";
import { useFormContext, Controller } from "react-hook-form";
import type { FormData, LaunchInfo } from "../schemas";
import type { IInfosCard } from "@/interfaces/interfaces";
import { DatePicker } from "@/components/ui/datePicker";
import classNames from "classnames";

const financialInfos: IInfosCard<LaunchInfo>[] = [
  { title: "Current Supply", pathRegister: "currentSupply" },
  { title: "Total Supply", pathRegister: "totalSupply" },
  { title: "Private Sale", pathRegister: "privateSale" },
  { title: "Public Sale", pathRegister: "publicSale" },
  { title: "Market Cap", pathRegister: "marketCap" },
];

function FinancialContent() {
  const {
    register,
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
      {financialInfos.map(({ pathRegister, title }) => (
        <Form.Label key={title} htmlFor={title} title={title}>
          <Form.Input.FormInputGeneric
            type={pathRegister === "currentSupply" ? "text" : "number"}
            id={title}
            register={register(`launchInfo.${pathRegister}`)}
            error={errors.launchInfo?.[pathRegister]?.message}
          />
          <Form.ErrorMessage
            error={errors.launchInfo?.[pathRegister]?.message}
          />
        </Form.Label>
      ))}
    </CardContent>
  );
}

export default FinancialContent;
