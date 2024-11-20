import LinkGame from "../LinkGame";

function LinksAndResources() {
  return (
    <div className="rounded-lg border-[#1c2f4a] bg-[#132238] p-6">
      <h2 className="mb-6 font-semibold">DOCUMENTAÇÃO E LINKS</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <LinkGame icon="FileText" />
        <LinkGame icon="MapPin" />
        <LinkGame icon="Globe" />
        <LinkGame icon="Twitter" />
        <LinkGame icon="MessageCircle" />
        <LinkGame icon="Send" />
        <LinkGame icon="Facebook" />
      </div>
    </div>
  );
}

export default LinksAndResources;
