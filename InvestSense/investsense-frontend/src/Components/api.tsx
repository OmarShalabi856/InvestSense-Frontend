import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, Dividend } from "../company";
export interface SearchResponse {
  data: CompanySearch[];
}
// const FINANCE_API_KEY = "05db7e289d0eb8a1b1d8dbfad8dbdc71";
const FINANCE_API_KEY ="kOs7ssheFzhsjJgFFWkrz6CA0e1NH7ki"
const BASE_API_URL = "https://financialmodelingprep.com/api/v3";

export const searchCompanies = async (query: string) => {
  try {
    console.log();
    const data = await axios.get<SearchResponse>(
      `${BASE_API_URL}/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${FINANCE_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `${BASE_API_URL}/profile/${query}?apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}


export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `${BASE_API_URL}/key-metrics-ttm/${query}?limit=40&apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `${BASE_API_URL}/income-statement/${query}?limit=40&apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}
export const getBalanceStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `${BASE_API_URL}/balance-sheet-statement/${query}?limit=40&apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}

export const getCashflowStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `${BASE_API_URL}/cash-flow-statement/${query}?limit=40&apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}

export const getHistoricalDividend = async (query: string) => {
  try {
    const data = await axios.get<CompanyHistoricalDividend>(
      `${BASE_API_URL}/historical-price-full/stock_dividend/${query}?limit=40&apikey=${FINANCE_API_KEY}`
    );
    return data
  } catch (error) {
      console.log("error: ", error);
  }
}