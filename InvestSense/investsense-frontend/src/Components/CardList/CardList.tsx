import React, { SyntheticEvent } from "react";
import Card from "../CompanyCard/CompanyCard";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate:(e:SyntheticEvent)=>void
}

const CardList: React.FC<Props> = ({ searchResult,onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className="row">
      {searchResult.length > 0 ? (
        searchResult.map((result) => (
          <Card onPortfolioCreate={onPortfolioCreate} id={result.symbol} key={uuidv4()} searchResult={result} />
        ))
      ) : (
        <h1>No Results</h1>
      )}
    </div>
  );
};

export default CardList;
