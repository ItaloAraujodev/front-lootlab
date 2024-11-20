import AnalysisAndCommentary from "./AnalysisAndCommentary";
import GameHeader from "./GameHeader";
import LinksAndResources from "./LinksAndResources";
import MarketInfoGrid from "./MarketInfoGrid";
import ProjectFeaturies from "./ProjectFeaturies";

export default function InfoDetails() {
  return (
    <div className="min-h-screen p-4 text-[#ffffff] md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <GameHeader />
        <AnalysisAndCommentary />
        <LinksAndResources />
        <MarketInfoGrid />
        <ProjectFeaturies />
      </div>
    </div>
  );
}
