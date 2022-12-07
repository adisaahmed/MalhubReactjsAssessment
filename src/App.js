import React from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Footer } from "./components/LandingPageContent";
import GlobalStore from "./components/GlobalStore";
import AboutPage from "./components/AboutPage";
import MenWears from "./components/MenWears";
import WomenWears from "./components/WomenWears";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStore>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>

          <ErrorBoundary>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/men" element={<MenWears />} />
              <Route path="/men" element={<MenWears />} />
              <Route path="/women" element={<WomenWears />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ErrorBoundary>

          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </GlobalStore>
      </Router>
    </>
  );
};

export default App;