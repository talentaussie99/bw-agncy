import React from 'react';
import { ExternalLink, MapPin, Clock } from 'lucide-react';
import { JOBS } from '../constants.tsx';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#d35400] uppercase tracking-widest block mb-4">Join Our Team</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Open Career Opportunities</h2>
            <p className="text-lg text-slate-600">
              Take the next step in your career with Brickworks Agency. We are currently 
              seeking professionals for the following critical roles.
            </p>
          </div>
          <div className="bg-slate-100 px-6 py-3 rounded-full text-sm font-semibold text-slate-600 whitespace-nowrap">
            3 Active Openings
          </div>
        </div>

        <div className="space-y-6">
          {JOBS.map((job, index) => (
            <div 
              key={index} 
              className="group bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#d35400] hover:shadow-xl hover:shadow-[#d35400]/5 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#d35400] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-[#d35400]/10 text-[#d35400] px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Full-Time
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase border border-slate-200">
                        Part-Time
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Sydney, NSW, Australia
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Immediate Start Available
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#d35400] text-white font-bold rounded-xl hover:bg-[#a04000] transition-all w-full lg:w-auto shadow-lg shadow-[#d35400]/10 group-hover:scale-[1.02]"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Don't see a role for you?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Submit your CV for our general talent pool and we'll contact you when a 
              matching opportunity arises.
            </p>
            <a 
              href="mailto:brickworks.agency@outlook.com?subject=Talent Pool Application" 
              className="inline-block border-2 border-white/20 hover:border-white px-8 py-3 rounded-full transition-all font-semibold"
            >
              Submit General Interest
            </a>
          </div>
          {/* Background texture */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;