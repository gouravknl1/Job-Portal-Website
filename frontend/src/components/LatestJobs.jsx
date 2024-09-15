import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

function LatestJobs() {
  const { allJobs } = useSelector((store) => store.job);

  // Fallback to empty array if allJobs is undefined or null
  const jobsToShow = allJobs || [];
  console.log("jobs are ", jobsToShow);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {jobsToShow.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          jobsToShow
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default LatestJobs;