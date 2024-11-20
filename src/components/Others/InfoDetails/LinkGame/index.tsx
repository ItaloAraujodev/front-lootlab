import Link from "next/link";
import {
  Check,
  Facebook,
  FileText,
  Globe,
  MapPin,
  MessageCircle,
  Send,
  Twitter,
  X,
} from "lucide-react";

type TIcon =
  | "Check"
  | "Facebook"
  | "FileText"
  | "Globe"
  | "MapPin"
  | "MessageCircle"
  | "Send"
  | "Twitter"
  | "X";

interface IProps {
  link?: string;
  icon: TIcon;
}

const iconChoice = {
  Check: <Check />,
  Facebook: <Facebook />,
  FileText: <FileText />,
  Globe: <Globe />,
  MapPin: <MapPin />,
  MessageCircle: <MessageCircle />,
  Send: <Send />,
  Twitter: <Twitter />,
  X: <X />,
};
function LinkGame({ icon }: IProps) {
  return (
    <Link
      href={"https://outerringmmo.com/whitepaper/"}
      className="flex items-center gap-2 text-lg text-[#94a7c6] hover:text-[#ffffff]"
    >
      {iconChoice[icon]}
      Whitepaper
    </Link>
  );
}

export default LinkGame;
