import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { CompanyCashFlow } from "../company";
import { getBalanceStatement, getCashflowStatement } from "./api";
import RatioList from "./RatioList";
import { useOutletContext } from "react-router";
import Table from "./Table";

type Props = {};
const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];
const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflowStatement, setCashflowStatement] =
    useState<CompanyCashFlow[]>();

  useEffect(() => {
    const companyDataCall = async () => {
      const result = await getCashflowStatement(ticker);
      setCashflowStatement(result!.data);
    };
    companyDataCall();
  }, []);
  return (
    <>
      {cashflowStatement ? (
        <Table config={config} data={cashflowStatement} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CashFlowStatement;