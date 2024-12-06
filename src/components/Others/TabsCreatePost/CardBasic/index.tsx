import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import BasicContent from "./BasicContent";
import ButtonNextTab from "../Buttons/ButtonTab/buttonNextTab";

interface IProps {
  setFile: any;
}

function BasicCard({ setFile }: IProps) {
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Informações Básicas
        </CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Detalhes essenciais sobre o jogo.
        </CardDescription>
      </CardHeader>

      <BasicContent setFile={setFile} />

      <CardFooter className="flex w-full justify-end">
        <ButtonNextTab />
      </CardFooter>
    </LayoutCard>
  );
}

export default BasicCard;
