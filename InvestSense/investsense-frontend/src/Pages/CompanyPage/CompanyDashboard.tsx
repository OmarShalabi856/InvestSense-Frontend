import React from "react";
import { Tile } from "./Tile";
import { Outlet } from "react-router";
import Table from "../../Components/Table";
import RatioList from "../../Components/RatioList";

interface Props {
  children:React.ReactNode
  ticker: string;
}

const CompanyDashboard = ({ children,ticker }: Props) => {
  return (
    <div className="flex flex-col w-full p-3 gap-2 ">
      <div className="w-full mx-2 grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:h-auto md:h-52 sm:grid-cols-1">
        {children}
      </div>
      <Outlet context={ticker} />
    </div>
  );
};

export default CompanyDashboard;
