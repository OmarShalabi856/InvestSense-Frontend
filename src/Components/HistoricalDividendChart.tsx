import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { CompanyHistoricalDividend } from "../company";
import { getHistoricalDividend } from "./api";
import Spinner from "./Spinner";
import LineChart from "./LineChart";

type Props = {};

const HistoricalDividendChart = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [historicalDividend, setHistoricalDividend] =
    useState<CompanyHistoricalDividend>();
  useEffect(() => {
    const companyDataCall = async () => {
      const result = await getHistoricalDividend(ticker);
      setHistoricalDividend(result!.data);
    };
    companyDataCall();
  }, []);
  console.log(historicalDividend)
  return <>{(historicalDividend && historicalDividend.historical.length>0) 
    ? <LineChart dividends={historicalDividend} /> 
    : <Spinner />}</>;
};

export default HistoricalDividendChart;
