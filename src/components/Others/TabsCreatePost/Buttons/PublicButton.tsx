import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes } from "react";

interface IPublicButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
function PublicButton({ children, ...props }: IPublicButton) {
  return (
    <Button
      {...props}
      type="submit"
      variant="default"
      className="min-w-20 max-w-20 bg-lootlab-color-highlight text-lootlab-font-base hover:bg-lootlab-hover-highlight hover:no-underline"
    >
      {children}
    </Button>
  );
}

export default PublicButton;
