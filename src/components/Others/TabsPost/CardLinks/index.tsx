import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LayoutCard from "../CardLayout";
import LinksContent from "./LinksContent";
import ButtonNextTab from "../Buttons/ButtonTab/buttonNextTab";
import ButtonPrevTab from "../Buttons/ButtonTab/buttonPrevTab";

function LinksCard() {
  return (
    <LayoutCard>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Links e Parcerias</CardTitle>
        <CardDescription className="text-base text-[#8d8d8d]">
          Links importantes e parcerias do jogo.
        </CardDescription>
      </CardHeader>

      <LinksContent />

      <CardFooter className="flex w-full justify-between">
        <ButtonPrevTab />
        <ButtonNextTab />
      </CardFooter>
    </LayoutCard>
  );
}

export default LinksCard;
