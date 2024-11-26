import { Card } from "@/components/ui/card";

function LayoutCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="border-none bg-lootlab-bg-main text-lootlab-font-base shadow-sm shadow-lootlab-font-highlight">
      {children}
    </Card>
  );
}

export default LayoutCard;
