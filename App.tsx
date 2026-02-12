
import React, { useState, useEffect } from 'react';
import NotificationBanner from './components/NotificationBanner.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Products from './components/Products.tsx';
import Reviews from './components/Reviews.tsx';
import Careers from './components/Careers.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import TermsOfService from './components/TermsOfService.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Products />
            <Reviews />
            <Careers />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NotificationBanner />
      <Navbar setView={setView} currentView={view} />
      <main>
        {renderView()}
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default App;
