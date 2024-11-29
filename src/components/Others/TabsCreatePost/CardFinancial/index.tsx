import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import FormField from "@/components/Form/Field";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { IFieldInfos } from "@/interfaces/interfaces";
import type { TFormData, TLaunchInfo } from "../schemas";
import { Form } from "@/components/Form";
import { useFormContext } from "react-hook-form";

const financialInfos: IFieldInfos<TLaunchInfo>[] = [
  { title: "Data de Lançamento", path: "launchDate" },
  { title: "Market Cap", path: "marketCap" },
  { title: "Supply Atual", path: "currentSupply" },
  { title: "Supply Total", path: "totalSupply" },
  { title: "Venda Privada", path: "privateSale" },
  { title: "Venda Publica", path: "publicSale" },
];

function FinancialCard() {
  const {
    formState: { errors },
    register,
  } = useFormContext<TFormData>();
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
        {/* {financialInfos.map(({ title, path }) => (
          <FormField key={title}>
            <Label htmlFor={title}>{title}</Label>
            <Form.Input
              error={errors?.launchInfo?.[path]?.message}
              register={register(`launchInfo.${path}`)}
              id={title}
            />
          </FormField>
        ))} */}
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
