import { useEffect } from "react";

interface ITwitterFeedProps {
  twitterUrl: string;
}
function TwitterFeed({ twitterUrl }: ITwitterFeedProps) {
  const twitterDomains = ["twitter.com", "/x.com"];
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!twitterDomains.some((domain) => twitterUrl.includes(domain))) {
    return <h1 className="text-xl text-white">URL inválida para o Twitter.</h1>;
  }

  const urlParts = twitterUrl.split("/");
  const site = urlParts[urlParts.length - 1];

  return (
    <div>
      <h1>Feed do Twitter Incorporado</h1>
      <a
        className="twitter-timeline"
        href={`https://twitter.com/${site}`}
        data-width="600"
        data-height="400"
        data-chrome="noheader nofooter noborders"
      >
        Tweets by TNT Sports
      </a>
    </div>
  );
}

export default TwitterFeed;
