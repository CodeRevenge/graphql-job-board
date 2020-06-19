import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadJob } from "./requests";

export const JobDetail = (props) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const { jobId } = props.match.params;
      setJob(await loadJob(jobId));
    };
    fetchJob();
  });

  if (!job) return null;

  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
};
