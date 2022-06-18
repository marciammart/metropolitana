import React from "react";
import "./styles/index.scss";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
