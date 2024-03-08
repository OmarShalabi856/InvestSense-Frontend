import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import Sidebar from "../Pages/CompanyPage/Sidebar";

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
        // children:[
        //   { path: "", element: <Sidebar /> },
        // ] 
      }
    ],
  },
]);
