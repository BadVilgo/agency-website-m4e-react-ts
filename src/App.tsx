import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import TworzenieStron from "./pages/Tworzenie-stron/Tworzenie-stron";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tworzenie-stron" element={<TworzenieStron />} />
            <Route path="/reklama-w-internecie" element={<Home />} />
            <Route path="/kontakt" element={<TworzenieStron />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
