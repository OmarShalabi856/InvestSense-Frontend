import React, { SyntheticEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="bg-slate-100">
      <div className="  card col-12 flex-row justify-between rounded">
        <div className="card-body">
          <h4 className="card-title">
            {searchResult.name}({searchResult.symbol})
          </h4>
          <p className="card-text">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}- {searchResult.currency}
          </p>
        </div>
        <div className="card-body">
          <p className="card-text"></p>
        </div>
        <div className="flex items-center">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
