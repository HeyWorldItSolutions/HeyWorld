import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/main-content/MainContent";
import Footer from "./components/footer/Footer";
import CoursesListPage from "./components/courses/CoursesListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/courses" element={<CoursesListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
