import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import LinksAndLogin from "../../NavBar/LinksAndLogin";

function DialogNavBar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="sm:hidden">
          <Menu />
        </button>
      </DialogTrigger>
      <DialogContent className="right-36 top-36 w-[98%] rounded-lg border-none bg-lootlab-bg-main sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <LinksAndLogin orientation="vertical" />
      </DialogContent>
    </Dialog>
  );
}

export default DialogNavBar;
