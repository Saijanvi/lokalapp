import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../context/BookmarkContext";

export default function JobCard({ job }) {
  const { isBookmarked, addBookmark, removeBookmark } = useContext(BookmarkContext);

  if (!job) {
    return null; // Avoid crashes if job data is missing
  }

  const {
    id,
    company_name = "Unknown Company",
    job_title ="software engineer",
    location = "Delhi",
    min_salary = "30000",
    max_salary = "60000",
    contact_number = "+91-901938473",
  } = job;

  const toggleBookmark = () => {
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark(job);
    }
  };

  return (
    <div className="job-card">
      <Link to={`/job/${id}`} style={{ textDecoration: "none", color: "inherit", flex: 1 }}>
        <div>
          <h3>🏢 {company_name}</h3>
          <h4>💼 {job_title}</h4>
          <p>📍 {location}</p>
          <p>💰 {min_salary} - {max_salary}</p>
          <p>📞 {contact_number}</p>
        </div>
      </Link>
      <button onClick={toggleBookmark} className="bookmark-btn">
        {isBookmarked(id) ? "⭐" : "☆"}
      </button>
    </div>
  );
}
