import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../Components/api";
import Sidebar from "./Sidebar";
import CompanyDashboard from "./CompanyDashboard";
import { Tile } from "./Tile";

interface Props {}

function CompanyPage({}: Props) {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };

    if (ticker) {
      getProfile();
    }
  }, [ticker]);

  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <CompanyDashboard ticker={ticker!}>
          <Tile title="Trafic" subtitle={120392} />
          <Tile title="Sales" subtitle={393443} />
          <Tile title="New Users" subtitle={1000} />
          <Tile title="Update Factor" subtitle={12} />
      </CompanyDashboard>
    </div>
  );
}

export default CompanyPage;
