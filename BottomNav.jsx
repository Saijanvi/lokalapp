import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/">🏠 Jobs</Link>
      <Link to="/bookmarks">⭐ Bookmarks</Link>
    </div>
  );
}