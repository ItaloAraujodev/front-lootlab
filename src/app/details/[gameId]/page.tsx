import { LayoutPage } from "@/components/Layout";
import BreadCrumbs from "@/components/Others/BreadCrumbs";
import InfoDetails from "@/components/Others/InfoDetails";

export default function GameDatails() {
  return (
    <LayoutPage className="px-[5%] pt-10">
      <BreadCrumbs />
      <InfoDetails />
    </LayoutPage>
  );
}
