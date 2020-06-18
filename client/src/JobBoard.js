import React, { useState, useEffect } from "react";
import { JobList } from "./JobList";
import { loadJobs } from "./requests";

export const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobs = await loadJobs();
      setJobs(jobs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};
