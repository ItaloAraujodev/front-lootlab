import Link from "next/link";
import CardInfo from "../CardInfo";
import FeatureItem from "../FeatureItem";

function ProjectFeaturies() {
  return (
    <div className="space-y-6">
      <CardInfo title="CARACTERÍSTICAS DO PROJETO">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <FeatureItem check info="Equipe Transparente" />
            <FeatureItem check info="Projeto Estruturado" />
            <FeatureItem check info="Cronograma em Dia" />
            <FeatureItem check info="Suporte" />
          </div>
          <div className="space-y-4">
            <FeatureItem check info="Contratos Regularizados e Auditados" />
            <FeatureItem info="Oracle" />
            <FeatureItem check info='Jogo "jogável"' />
            <FeatureItem check info="Marketing" />
          </div>
        </div>
      </CardInfo>

      <CardInfo title="PARCERIAS">
        <Link
          href="https://outerringmmo.com/partners/"
          className="text-[#94a7c6] hover:text-[#ffffff]"
        >
          https://outerringmmo.com/partners/
        </Link>
      </CardInfo>
    </div>
  );
}

export default ProjectFeaturies;
