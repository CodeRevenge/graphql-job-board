import React, { useState, useEffect } from "react";
import { loadCompany } from "./requests";
import { JobList } from "./JobList";

export const CompanyDetail = (props) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { companyId } = props.match.params;
      setCompany(await loadCompany(companyId));
    };
    fetchData();
  });

  if (!company) return null;

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h5 className="title is-5">Jobs at {company.name}</h5>
      <JobList jobs={company.jobs} />
    </div>
  );
};
