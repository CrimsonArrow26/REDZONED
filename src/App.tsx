import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
// import "./App.css";
import { AuthPage } from "./sign/components/AuthPage"; 
import AuthCallback from "./AuthCallback"; 
import News from "./News";
import Reports from "./Reports";
import UserProfile from "./UserProfile";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ height: '64px', width: '100%' }} aria-hidden="true" /> {/* Single Navbar for all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* 🔹 New routes for Auth */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        <Route
          path="/community"
          element={
            <div className="mt-20 text-center text-xl font-semibold">
              Community Page (Coming Soon)
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
