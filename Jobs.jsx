import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://testapi.getlokalapp.com/common/jobs";

    axios
      .get(apiUrl)
      .then((response) => {
        const apiData = response.data?.results || response.data?.data || response.data || [];
        setJobs(apiData);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: 20, textAlign: "center" }}>Loading jobs...</div>;
  }

  if (error) {
    return <div style={{ padding: 20, textAlign: "center", color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
}
