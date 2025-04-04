import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import JobCard from "../components/JobCard";

export default function Bookmarks() {
  const { bookmarkedJobs } = useContext(BookmarkContext);

  return (
    <div className="bookmarks-page" style={{ padding: 20 }}>
      <h2>⭐ Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarked jobs yet. Bookmark some jobs to see them here!</p>
      ) : (
        <div className="bookmarks-list">
          {bookmarkedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
