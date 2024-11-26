import { CardHeader } from "@/components/ui/card";

function HeaderCard({ children }: { children: React.ReactNode }) {
  return <CardHeader className="text-lg md:text-2xl">{children}</CardHeader>;
}

export default HeaderCard;
