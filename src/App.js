import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import FeedPage from "./Pages/feedPage";
import Header from "./Pages/header";
import React, { useState } from 'react';
import DiaryPage from "./Pages/diarypage";

function App() {
  const [currentPage, setCurrentPage] = useState("LOGIN");

  return (
    <BrowserRouter>
      <div className="App">
        {currentPage !== "LOGIN" && <Header />}
        <Routes>
          <Route path="/" element={<Login setCurrentPage={setCurrentPage} />} />
          <Route path="/feed" element={<FeedPage setCurrentPage={setCurrentPage} />} />
          <Route path="/diary" element={<DiaryPage setCurrentPage={setCurrentPage} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
