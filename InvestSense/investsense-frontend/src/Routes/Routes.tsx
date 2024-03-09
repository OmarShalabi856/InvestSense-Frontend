import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import Sidebar from "../Pages/CompanyPage/Sidebar";
import CompanyProfile from "../Pages/CompanyPage/CompanyProfile";
import IncomeStatement from "../Pages/CompanyPage/IncomeStatement";

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
        ] 
      }
    ],
  },
]);
