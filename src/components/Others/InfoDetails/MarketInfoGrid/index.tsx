import CardInfo from "../CardInfo";
import MarketInfo from "../MarketInfo";

function MarketInfoGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <CardInfo title="INFORMAÇÕES DE MERCADO">
        <MarketInfo title="LAUNCH" info="Q2 - 2022" />
        <MarketInfo title="SUPPLY ATUAL" info="Alto" />
        <MarketInfo title="MARKET CAP" info="555,319,807" />
        <MarketInfo title="SUPPLY TOTAL" info="10,000,000,000" />
      </CardInfo>

      <CardInfo title="INFORMAÇÕES DE VENDA">
        <MarketInfo title="PRIVATE SALE" info="20% - 2,000,000,000" />
        <MarketInfo title="PUBLIC SALE" info="6% - 400,000,000" />
      </CardInfo>
    </div>
  );
}

export default MarketInfoGrid;
