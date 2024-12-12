import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaSquareFacebook,
  FaReddit,
  FaMedium,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";

type TIcon =
  | "twitter"
  | "x"
  | "instagram"
  | "discord"
  | "telegram"
  | "facebook"
  | "reddit"
  | "medium"
  | "youtube"
  | "globe";

interface IProps {
  link: string;
  plataform: TIcon;
}

const plataformChoice = {
  instagram: { icon: <FaInstagram />, label: "Instagram" },
  discord: { icon: <FaDiscord />, label: "Discord" },
  telegram: { icon: <FaTelegram />, label: "Telagram" },
  facebook: { icon: <FaSquareFacebook />, label: "Facebook" },
  reddit: { icon: <FaReddit />, label: "Reddit" },
  medium: { icon: <FaMedium />, label: "Medium" },
  youtube: { icon: <FaYoutube />, label: "Youtube" },
  twitter: { icon: <FaXTwitter />, label: "Twitter" },
  x: { icon: <FaXTwitter />, label: "XTwitter" },
  globe: { icon: <FaGlobe />, label: "Site" },
};
function LinkGame({ plataform, link }: IProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-2 text-lg text-[#94a7c6] hover:text-[#ffffff]"
    >
      {plataformChoice[plataform].icon}
      {plataformChoice[plataform].label}
    </Link>
  );
}

export default LinkGame;
