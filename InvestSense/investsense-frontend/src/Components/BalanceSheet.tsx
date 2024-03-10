import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet, CompanyIncomeStatement } from "../company";
import { useOutletContext } from "react-router";
import Table from "./Table";
import { getBalanceStatement, getIncomeStatement } from "./api";
import RatioList from "./RatioList";
import Spinner from "./Spinner";

type Props = {};
const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
  },
];
const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [balanceStatement, setBalanceStatement] =
    useState<CompanyBalanceSheet>();

  useEffect(() => {
    const companyDataCall = async () => {
      const result = await getBalanceStatement(ticker);
      setBalanceStatement(result?.data[0]);
    };
    companyDataCall();
  }, []);
  return (
    <>
      {balanceStatement ? (
        <RatioList config={config} data={balanceStatement} />
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default BalanceSheet;
