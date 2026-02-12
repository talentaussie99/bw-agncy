
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setView('home');
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-6">
              <button onClick={() => setView('home')} className="block">
                <img 
                  src="https://i.imgur.com/S4DNCNH.jpg" 
                  alt="Brickworks Agency Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/200x60?text=Brickworks+Agency';
                  }}
                />
              </button>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Providing premier workforce and talent solutions across Australia. 
              Built on foundations of integrity, reliability, and industry expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-[#d35400]" />
                <span>Headquartered in Australia</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-[#d35400]" />
                <a href="mailto:brickworks.agency@outlook.com" className="hover:text-[#d35400] transition-colors">
                  brickworks.agency@outlook.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[#d35400] transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#d35400] transition-colors cursor-pointer">About</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#d35400] transition-colors cursor-pointer">Services</a></li>
              <li><a href="#careers" onClick={(e) => handleLinkClick(e, '#careers')} className="hover:text-[#d35400] transition-colors cursor-pointer">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6">Industries</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Construction</li>
              <li>Manufacturing</li>
              <li>Building Materials</li>
              <li>HR Operations</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-white mb-6">Compliance</h4>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Brickworks Agency is a registered Australian recruitment entity. We operate in full compliance with Fair Work Australia regulations.
              </p>
              <div className="flex space-x-2">
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d35400] w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Brickworks Agency. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <button 
              onClick={() => setView('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setView('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
