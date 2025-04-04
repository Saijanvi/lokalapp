import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";

const API_URL = "https://testapi.getlokalapp.com/common/jobs";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isBookmarked, addBookmark, removeBookmark } = useContext(BookmarkContext);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setJob(res.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const toggleBookmark = () => {
    if (isBookmarked(job.id)) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!job) return <div className="not-found">Job not found</div>;

  return (
    <div className="job-details">
      <h2>{job.job_title}</h2>
      <h3>🏢 {job.company_name}</h3>
      <p>📍 {job.location}</p>
      <p>💰 {job.min_salary} - {job.max_salary}</p>
      <p>📞 {job.contact_number}</p>
      <p>{job.description}</p>
      
      <button
        onClick={toggleBookmark}
        className="bookmark-btn"
      >
        {isBookmarked(job.id) ? "⭐ Remove Bookmark" : "☆ Add Bookmark"}
      </button>
    </div>
  );
}