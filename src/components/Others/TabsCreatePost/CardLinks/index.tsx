import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LayoutCard from "../CardLayout";
import LinksContent from "./LinksContent";

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

export default LinksCard;
