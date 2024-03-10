import React from "react";
import { Outlet } from "react-router";


interface Props {
  children:React.ReactNode
  ticker: string;
  description:string|undefined
}

const CompanyDashboard = ({ children,ticker,description }: Props) => {
  return (
    <div className="flex flex-col w-full p-1 gap-2 max-w-screen-lg ml-64 ">
      <div className="mx-2 grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:h-auto md:h-52 sm:grid-cols-1">
        {children}
      </div>
      <div>
        {description?(description):""}
      </div>
      <Outlet context={ticker} />
    </div>
  );
};

export default CompanyDashboard;
