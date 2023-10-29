// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home/Home";
import { Performance } from "./screen/Performance/Performance";
import NaV from "./components/Nav";
import"./index.css"
import About from "./screen/Home/about";

function App() {
  return (
    <div className="container">
      <NaV />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Performance" element={<Performance />}></Route>
            <Route path="/About" element={<About name={"bank"} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
