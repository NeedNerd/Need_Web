import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegitserPage";
import WritePage from "./pages/WritePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </div>
  );
}

export default App;
