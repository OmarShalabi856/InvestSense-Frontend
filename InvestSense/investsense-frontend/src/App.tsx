import React, { ChangeEvent, useState, FormEvent } from "react";
import "./App.css";
import "./index.css";
import Search from "./Components/Search/Search";
import CardList from "./Components/CardList/CardList";
import { CompanySearch } from "./company";
import { searchCompanies } from "./Components/api";
import PortfolioList from "./Components/Portfolio/PortfolioList/PortfolioList";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverErrors, setServerErrors] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string[]>([]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    const exists = portfolio.find((p) => p === e.target[0].value);
    if (exists) {
      e.preventDefault();
      return;
    }
    setPortfolio((prevPortfolio) => [...prevPortfolio, e.target[0].value]);
  };

  const onPortfolioDelete = (e: any) => {
    const portoflioFiltered = portfolio.filter((p) => p !== e.target[0].value);
    setPortfolio(portoflioFiltered);
  };

  async function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const result = await searchCompanies(search);
      if (typeof result == "string") {
        setServerErrors(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
    } catch (error) {}
  }
  console.log(portfolio);
  return (
    <div className="w-full">
        <Navbar />
        <Search
            search={search}
            onSearch={onSearch}
            onSearchSubmit={onSearchSubmit}
          />
          <PortfolioList
            onDeletePortfolio={onPortfolioDelete}
            portfolio={portfolio}
          />
          {serverErrors && <div>{serverErrors}</div>}
         
          <CardList
            onPortfolioCreate={onPortfolioCreate}
            searchResult={searchResult}
          />
        </div>
  );
}

export default App;
