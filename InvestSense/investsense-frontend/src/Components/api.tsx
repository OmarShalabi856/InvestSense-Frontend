import axios from "axios";
import { CompanyProfile, CompanySearch } from "../company";
export interface SearchResponse {
  data: CompanySearch[];
}
const FINANCE_API_KEY = "05db7e289d0eb8a1b1d8dbfad8dbdc71";
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
