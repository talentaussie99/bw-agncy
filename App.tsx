import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Products from './components/Products.tsx';
import Reviews from './components/Reviews.tsx';
import Careers from './components/Careers.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Reviews />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default App;