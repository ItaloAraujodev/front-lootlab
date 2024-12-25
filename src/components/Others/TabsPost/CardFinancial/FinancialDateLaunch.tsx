import { Form } from "@/components/Form";
import { useFormContext, Controller } from "react-hook-form";
import type { FormData } from "../schemas";
import DatePicker from "@/components/ui/datePicker";

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
            triggerClassName="bg-inherit border-[1px] border-lootlab-font-highlight hover:bg-[#192136] hover:text-white"
          />
        )}
      />
      <Form.ErrorMessage error={errors.launchInfo?.launchDate?.message} />
    </Form.Label>
  );
}

export default FinancialDateLaunch;
