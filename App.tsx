
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Careers from './components/Careers';
import Footer from './components/Footer';

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
