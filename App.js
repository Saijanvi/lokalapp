import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Bookmarks from "./pages/Bookmarks";
import BottomNav from "./components/BottomNav";
import BookmarkProvider from "./context/BookmarkContext";
import "./App.css";

function App() {
  return (
    <BookmarkProvider>
      <BrowserRouter>
        <div className="app-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Jobs />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </BrowserRouter>
    </BookmarkProvider>
  );
}

export default App;