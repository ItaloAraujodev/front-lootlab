import FormField from "@/components/Form/FormFiel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const basicInfos = [
  "Nome do Jogo",
  "CoinMarket Address",
  "Analista",
  "Nota",
  "Rede",
];

function BasicCard() {
  return (
    <Card className="border-none bg-lootlab-bg-main text-lootlab-font-base shadow-sm shadow-lootlab-font-highlight">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Informações Básicas
        </CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Detalhes essenciais sobre o jogo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {basicInfos.map((info) => (
          <FormField key={info}>
            <Label htmlFor={info}>{info}</Label>
            <Input id={info} />
          </FormField>
        ))}
      </CardContent>
      <CardFooter className="flex w-full justify-end">
        <Button
          variant="link"
          className="text-lootlab-font-base hover:bg-slate-700 hover:no-underline"
        >
          Próximo
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BasicCard;
