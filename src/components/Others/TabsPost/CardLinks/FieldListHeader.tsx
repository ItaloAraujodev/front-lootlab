import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

type FieldListHeaderProps = React.ButtonHTMLAttributes<HTMLElement>;

function FieldListHeader({ ...props }: FieldListHeaderProps) {
  return (
    <div className="flex justify-between gap-2">
      <Button
        {...props}
        type="button"
        variant="outline"
        className="border-lootlab-font-highlight bg-inherit scrollbar-thin scrollbar-track-lootlab-color-highlight hover:bg-[#111f33] hover:text-lootlab-font-base"
      >
        Add Link
        <PlusIcon className="stroke-[4px] text-lootlab-font-base" />
      </Button>
    </div>
  );
}

export default FieldListHeader;
