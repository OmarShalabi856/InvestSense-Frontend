import React, { SyntheticEvent } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { PortfolioGet } from "../../../Services/Models/PortfolioGet";

interface Props {
  portfolio: PortfolioGet[];
  onDeletePortfolio: (e: SyntheticEvent) => void;
}

const PortfolioList: React.FC<Props> = ({
  onDeletePortfolio,
  portfolio,
}: Props): JSX.Element => {
  return portfolio.length > 0 ? (
    <div >
      <h2 style={{ textAlign: "center" }}>My Portfolio</h2>
      <div className="row flex justify-center">
        {portfolio.map((stock) => (
          <PortfolioCard
            onDeletePortfolio={onDeletePortfolio}
            key={stock.symbol}
            symbol={stock.symbol}
          />
        ))}
      </div>
      
    </div>
  ) : (
    <></>
  );
};

export default PortfolioList;
