import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  symbol: string;
  onDeletePortfolio:(e:SyntheticEvent)=>void
}

const PortfolioCard = ({onDeletePortfolio, symbol }: Props) => {
  return (
    <div className="col-3 flex justify-between my-2 mx-2 bg-red-600 rounded text-white font-bold p-2">
      <div className="mx-1">{symbol}</div>
      <DeletePortfolio onDeletePortfolio={onDeletePortfolio} symbol={symbol}/>
    </div>
  );
};

export default PortfolioCard;
