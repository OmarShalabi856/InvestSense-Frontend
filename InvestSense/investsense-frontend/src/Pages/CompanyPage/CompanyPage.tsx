import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../Components/api";

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
    <>
      {company ? (
        <div>{company?.companyName}</div>
      ) : (
        <div>Company Not Found</div>
      )}
    </>
  );
}

export default CompanyPage;
