import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import FinancialContent from "./FinancialContent";
import ButtonNextTab from "../Buttons/ButtonTab/buttonNextTab";
import ButtonPrevTab from "../Buttons/ButtonTab/buttonPrevTab";

function FinancialCard() {
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Informações Financeiras
        </CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Informações sobre investimento e tokens.
        </CardDescription>
      </CardHeader>

      <FinancialContent />

      <CardFooter className="flex w-full justify-between">
        <ButtonPrevTab />
        <ButtonNextTab />
      </CardFooter>
    </LayoutCard>
  );
}

export default FinancialCard;
