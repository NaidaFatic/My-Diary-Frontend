import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import FeedPage from "./Pages/feedPage";
import Header from "./Pages/header";
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("LOGIN");

  return (
    <BrowserRouter>
      <div className="App">
        {currentPage !== "LOGIN" && <Header />}
        <Routes>
          <Route path="/" element={<Login setCurrentPage={setCurrentPage} />} />
          <Route path="/feed" element={<FeedPage setCurrentPage={setCurrentPage} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
