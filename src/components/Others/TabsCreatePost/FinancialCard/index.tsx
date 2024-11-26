import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../LayoutCard";
import FormField from "@/components/Form/FormFiel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const financialInfos = [
  "Investimento",
  "Token",
  "Data de Lançamento",
  "Supply",
  "Venda Privada",
  "Market Cap",
  "Venda Pública",
];

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
      <CardContent className="space-y-2">
        {financialInfos.map((info) => (
          <FormField key={info}>
            <Label htmlFor={info}>{info}</Label>
            <Input id={info} />
          </FormField>
        ))}
      </CardContent>
      <CardFooter className="flex w-full justify-between">
        <Button
          variant="link"
          className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
        >
          <ArrowLeft />
          Anterior
        </Button>
        <Button
          variant="link"
          className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
        >
          Próximo
          <ArrowRight />
        </Button>
      </CardFooter>
    </LayoutCard>
  );
}

export default FinancialCard;
