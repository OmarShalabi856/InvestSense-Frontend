import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import "../../App.css";
import "../../index.css";
import Search from "../../Components/Search";
import CardList from "../../Components/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../Components/api";
import PortfolioList from "../../Components/Portfolio/PortfolioList/PortfolioList";
import { PortfolioGet } from "../../Services/Models/PortfolioGet";
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from "../../Services/backend-api";
import { toast } from "react-toastify";


function SearchPage() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverErrors, setServerErrors] = useState<string>("");
  const [portfolio, setPortfolio] = useState<PortfolioGet[] | null>([]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
  const getPortfolio = ()=>{
    portfolioGetAPI().then((res:any)=>{
      if(res?.data){
        setPortfolio(res?.data)
      }
    }).catch((e)=>{
      toast.warning("Could Not Retrieve Portfolio!")
    })
  }
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Stock Added!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could Not Add Stock!");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Stock Deleted Successfully!");
        getPortfolio();
      }
    });
  }

  useEffect(() => {
    getPortfolio();
  }, []);

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
    <div className="w-full mt-20">
        <Search
            search={search}
            onSearch={onSearch}
            onSearchSubmit={onSearchSubmit}
          />
          <PortfolioList
            onDeletePortfolio={onPortfolioDelete}
            portfolio={portfolio!}
          />
          {serverErrors && <div>{serverErrors}</div>}
         
          <CardList
            onPortfolioCreate={onPortfolioCreate}
            searchResult={searchResult}
          />
        </div>
  );
}

export default SearchPage;
