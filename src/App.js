import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/login";
import FeedPage from "./Pages/feedPage";
import Header from "./Pages/header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
