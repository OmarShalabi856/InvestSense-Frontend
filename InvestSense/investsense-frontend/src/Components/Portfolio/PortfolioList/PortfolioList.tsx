import React, { SyntheticEvent } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

interface Props {
  portfolio: string[];
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
            key={stock}
            symbol={stock}
          />
        ))}
      </div>
      
    </div>
  ) : (
    <></>
  );
};

export default PortfolioList;
