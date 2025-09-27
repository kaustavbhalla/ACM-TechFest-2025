import React from 'react'
import Header from './components/header'
import Hero from './components/Hero';
import Flagships from './components/Flagships';
import Benefits from './components/Benefits';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Speakers from './components/speakers';

const App = () => {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8 min-h-screen">
        <Header />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Flagships />
                <Benefits />
                <Speakers />
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;