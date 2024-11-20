import BasicInfoGrid from "../BasicInfoGrid";
import Commentary from "../Commentary";

function AnalysisAndCommentary() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <BasicInfoGrid />
      <Commentary />
    </div>
  );
}

export default AnalysisAndCommentary;
