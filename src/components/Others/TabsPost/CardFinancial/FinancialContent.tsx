import { CardContent } from "@/components/ui/card";
import FinancialInfoInputs from "./FinancialInfoInputs";

function FinancialContent() {
  return (
    <CardContent className="flex flex-col space-y-4">
      <FinancialInfoInputs />
    </CardContent>
  );
}

export default FinancialContent;
