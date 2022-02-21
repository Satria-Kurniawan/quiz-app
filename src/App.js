import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Admin from "./pages/Admin";
import QuizSummary from "./pages/QuizSummary";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/summary" element={<QuizSummary />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
