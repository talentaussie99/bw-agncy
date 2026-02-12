
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Layering */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Australia Map Overlay - Subtle and Transparent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-slate-900">
            <path d="M869.6,419.6c-13.8-15.9-29.2-28.7-47.5-35.1c-12.8-4.5-26.6-6.1-40.2-5c-20.9,1.7-40.9,8.5-59.3,18.8 c-10,5.6-18.8,13.2-26.4,22.3c-15,18.1-23.7,40.6-26.7,64.1c-1.5,12.1-1.3,24.4,0.4,36.5c2.6,18.8,9,36.5,18.6,52.4 c10.3,17,23.5,31.8,38.8,44.1c11.8,9.5,24.8,17.2,38.7,23c18.5,7.7,38.2,11.5,58,10.6c21.8-1,42.7-7.8,61.1-19.6 c9.4-6,17.7-13.7,24.6-22.7c13.7-17.7,21.7-39.2,24.4-61.7c1.3-11.4,1-23-0.7-34.4c-2.4-16.1-8-31.3-16.2-45 C900,459.7,886.7,439.4,869.6,419.6z" />
            {/* Simplified Australia Shape Path */}
            <path d="M784,534l-11-23l-34-4l-25-33l-30-5l-19,16l-37,3l-20,31l-34-5l-24,14l-44-3l-28,21l-36-7l-16,19l-42-3l-21,18l-37-6l-18,22l-41,10l-12,23l-28,14l-11,29l-3,46l18,34l34,16l45,1l29,19l46,6l22,25l37,13l16,33l42,12l32,29l46,4l33,26l47-1l18,28l43,11l20,31l38,1l15,22l40,1l25,24l35-6l19,20l32-15l48-1l24-18l36-2l21-16l37-4l20-22l27-31l11-45l-18-35l-33-17l-44-2l-30-20l-46-6l-21-26l-37-12l-15-32l-42-13l-31-29l-45-5l-34-27l-47,1l-18-27L784,534z" opacity="0.8"/>
          </svg>
        </div>

        {/* Semi-Building Architectural Structure Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.08] mix-blend-multiply"></div>
        
        {/* Subtle grid lines like a blueprint */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Gradient light and shadow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#d35400]/20 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#d35400] animate-pulse"></span>
            <span className="text-xs font-bold text-[#d35400] uppercase tracking-widest">National Workforce Solutions</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Building <br/>
            <span className="text-[#d35400]">Strong Careers</span> <br/>
            & Foundations.
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
            Brickworks Agency is Australia's trusted partner for workforce and talent solutions, 
            bridging the gap between elite professionals and the construction sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a 
              href="#careers" 
              onClick={(e) => handleLinkClick(e, '#careers')}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#d35400] hover:bg-[#a04000] rounded-xl transition-all shadow-xl shadow-[#d35400]/30 hover:scale-[1.02]"
            >
              Explore Careers
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, '#services')}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#d35400] bg-white border-2 border-[#d35400] hover:bg-slate-50 rounded-xl transition-all hover:scale-[1.02]"
            >
              Our Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center space-x-8 py-8 border-t border-slate-200/60">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                  <img 
                    className="w-full h-full object-cover" 
                    src={`https://i.pravatar.cc/150?u=${i + 40}`} 
                    alt="Success Story" 
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-extrabold text-slate-900 block text-lg">500+ Active Professionals</span>
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Serving all Australian States & Territories</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structural vertical line decorative element */}
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden xl:block"></div>
      <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-slate-100 to-transparent hidden xl:block"></div>
    </section>
  );
};

export default Hero;
