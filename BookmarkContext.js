import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext();

export default function BookmarkProvider({ children }) {
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const saved = localStorage.getItem("bookmarkedJobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarkedJobs));
  }, [bookmarkedJobs]);

  const addBookmark = (job) => {
    if (!bookmarkedJobs.find((j) => j.id === job.id)) {
      setBookmarkedJobs((prev) => [...prev, job]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarkedJobs((prev) => prev.filter((j) => j.id !== id));
  };

  const isBookmarked = (id) => bookmarkedJobs.some((j) => j.id === id);

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedJobs, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}