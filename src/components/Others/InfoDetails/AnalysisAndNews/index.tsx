import BasicInfoGrid from "../BasicInfoGrid";
import News from "../News";

function AnalysisAndNews() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <BasicInfoGrid />
      <News />
    </div>
  );
}

export default AnalysisAndNews;
