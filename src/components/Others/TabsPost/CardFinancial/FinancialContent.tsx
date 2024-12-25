import { CardContent } from "@/components/ui/card";
import FinancialInfoInputs from "./FinancialInfoInputs";
import FinancialDateLaunch from "./FinancialDateLaunch";

function FinancialContent() {
  return (
    <CardContent className="flex flex-col space-y-4">
      <FinancialDateLaunch />

      <FinancialInfoInputs />
    </CardContent>
  );
}

export default FinancialContent;
