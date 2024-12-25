import { Common } from "@/components/Common";
import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes } from "react";

interface IPublicButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
function PublicButton({ ...props }: IPublicButton) {
  return (
    <Button
      {...props}
      type="submit"
      variant="default"
      className="min-w-20 max-w-20 bg-lootlab-color-highlight text-lootlab-font-base hover:bg-lootlab-hover-highlight hover:no-underline"
    >
      <Common.CommonLoading title={props.title!} isLoading={props.disabled!} />
    </Button>
  );
}

export default PublicButton;
