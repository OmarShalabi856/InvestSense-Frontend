import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { CompanyCashFlow } from "../company";
import { getBalanceStatement, getCashflowStatement } from "./api";
import RatioList from "./RatioList";
import { useOutletContext } from "react-router";
import Table from "./Table";
import Spinner from "./Spinner";
import { formatLargeMonetaryNumber } from "../Helper/NumberFormatting";

type Props = {};
const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(
          company.netCashUsedProvidedByFinancingActivities
        ),
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) =>
        formatLargeMonetaryNumber(company.freeCashFlow),
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
       <Spinner/>
      )}
    </>
  );
};

export default CashFlowStatement;
