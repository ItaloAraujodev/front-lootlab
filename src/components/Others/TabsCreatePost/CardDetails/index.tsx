import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import ButtonPrevTab from "../Buttons/ButtonTab/buttonPrevTab";
import PublicButton from "../Buttons/PublicButton";
import DeatilsContent from "./DeatilsContent";

function DetailsCard({ status }: { status: boolean }) {
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Detalhes</CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Especifique os gêneros e deixe sua opinião sobre o jogo.
        </CardDescription>
      </CardHeader>
      <DeatilsContent />
      <CardFooter className="flex w-full justify-between">
        <ButtonPrevTab />
        <PublicButton disabled={status} title="Publicar" />
      </CardFooter>
    </LayoutCard>
  );
}

export default DetailsCard;
