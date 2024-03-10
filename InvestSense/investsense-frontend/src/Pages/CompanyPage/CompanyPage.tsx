import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../Components/api";
import Sidebar from "../../Components/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard";
import { Tile } from "../../Components/Tile";

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
    <div className="flex flex-row h-full mt-24">
      <Sidebar />
      <CompanyDashboard ticker={ticker!} description={company?.description??""}>
          <Tile title="Company Name" subtitle={company?.companyName} />
          <Tile title="Price" subtitle={company?.price.toString()} />
          <Tile title="Sector" subtitle={company?.sector} />
          <Tile title="CEO" subtitle={company?.ceo} />
      </CompanyDashboard>
    </div>
  );
}

export default CompanyPage;
