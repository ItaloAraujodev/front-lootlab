import { Form } from "@/components/Form";
import { useFormContext, Controller } from "react-hook-form";
import type { FormData } from "../schemas";
import DatePicker from "@/components/ui/datePicker";
import classNames from "classnames";

function FinancialDateLaunch() {
  const {
    formState: { errors },
    control,
  } = useFormContext<FormData>();
  return (
    <Form.Label htmlFor="Launch" title="Launch">
      <Controller
        control={control}
        name="launchInfo.launchDate"
        render={({ field }) => (
          <DatePicker
            onChange={field.onChange}
            value={field.value}
            triggerClassName={classNames(
              "bg-inherit border-[1px] border-lootlab-font-highlight hover:bg-[#192136] hover:text-white",
              {
                "border-red-500": errors.launchInfo?.launchDate,
              },
            )}
          />
        )}
      />
      <Form.ErrorMessage error={errors.launchInfo?.launchDate?.message} />
    </Form.Label>
  );
}

export default FinancialDateLaunch;
