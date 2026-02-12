import React from 'react';
import { SERVICES } from '../constants.tsx';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-[#d35400] uppercase tracking-widest block mb-4">Our Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Talent Solutions</h2>
          <p className="text-lg text-slate-600">
            Professional solutions designed to address the unique workforce challenges 
            of the modern industrial and construction landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-transparent hover:border-b-[#d35400]"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d35400]/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#d35400]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
          
          {/* Industry focus card */}
          <div className="bg-[#d35400] p-8 rounded-2xl shadow-xl flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to build your team?</h3>
            <p className="mb-8 text-[#f5f5f5]/80">
              Get in touch with our specialist consultants for a customized workforce strategy.
            </p>
            <a 
              href="mailto:brickworks.agency@outlook.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#d35400] font-bold rounded-lg hover:bg-slate-50 transition-colors text-center"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;