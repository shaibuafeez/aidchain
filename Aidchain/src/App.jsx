import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/dashboard';

// Import individual grant pages
import SuiTelegramGame from './components/pages/SuiTelegramGame';
import MoveOnSuiAiAssistant from './components/pages/MoveOnSuiAiAssistant';
import SuiAgro from './components/pages/SuiAgro';
import SuiGeneris from './components/pages/SuiGeneris';
import Doubleup from './components/pages/Doubleup';
import Suilend from './components/pages/Suilend';
import SuiOnCampus from './components/pages/SuiOnCampus';
import AtlansuiNft from './components/pages/AtlansuiNft';
import StudioMirai from './components/pages/StudioMirai';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/* Conditionally render Navbar based on the current route */}
            <ConditionalNavbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              {/* Main landing page content */}
              <Route path="/" element={<MainContent />} />
              {/* Auth routes */}
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
              {/* Dashboard route */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Grant-specific routes */}
              <Route path="/sui-telegram-game" element={<SuiTelegramGame />} />
              <Route path="/move-on-sui-ai-assistant" element={<MoveOnSuiAiAssistant />} />
              <Route path="/sui-agro" element={<SuiAgro />} />
              <Route path="/sui-generis" element={<SuiGeneris />} />
              <Route path="/doubleup" element={<Doubleup />} />
              <Route path="/suilend" element={<Suilend />} />
              <Route path="/sui-on-campus" element={<SuiOnCampus />} />
              <Route path="/atlansui-nft" element={<AtlansuiNft />} />
              <Route path="/studio-mirai" element={<StudioMirai />} />

              {/* Catch-all route */}
              <Route path="*" element={<MainContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

// ConditionalNavbar component only shows the Navbar on specific routes
const ConditionalNavbar = () => {
  const location = useLocation();
  // Paths where Navbar should be shown
  const showNavbarOnPaths = ['/', '/login', '/signup'];

  // Check if the current path is in the list of paths where the Navbar should be shown
  if (showNavbarOnPaths.includes(location.pathname)) {
    return <Navbar />;
  }

  return null; // Do not render Navbar on other paths
};

const MainContent = () => (
  <>
    <Hero />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </>
);

export default App;
