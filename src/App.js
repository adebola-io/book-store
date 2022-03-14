import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/book-store.css";
import Header from "./components/Header";
import Home from "./views/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
