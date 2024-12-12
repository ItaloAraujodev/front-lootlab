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

const platformIcons: { [key: string]: TIcon } = {
  "twitter.com": "twitter",
  "/x.com": "twitter",
  "discord.com": "discord",
  "instagram.com": "instagram",
  "t.me": "telegram",
  "telegram.org": "telegram",
  "facebook.com": "facebook",
  "reddit.com": "reddit",
  "medium.com": "medium",
  "youtube.com": "youtube",
};

function getPlataformByUrl(url: string): TIcon {
  let choicePlataform: TIcon = "globe";
  console.log("URL ", url);
  Object.keys(platformIcons).forEach((platformIcon) => {
    if (url.includes(platformIcon)) {
      choicePlataform = platformIcons[platformIcon] as TIcon;
    }
  });
  return choicePlataform;
}

export default getPlataformByUrl;
