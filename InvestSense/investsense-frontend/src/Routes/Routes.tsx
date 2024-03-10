import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement";
import BalanceSheet from "../Components/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement"
import HistoricalDividendChart from "../Components/HistoricalDividendChart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { 
        path: "company/:ticker", 
        element: <CompanyPage />,
        children:[
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          { path: "balance-sheet", element: <BalanceSheet /> },
          {path: "cashflow-statement", element: <CashFlowStatement /> },
          {path: "historical-dividend", element: <HistoricalDividendChart /> },
        ] 
      }
    ],
  },
]);
