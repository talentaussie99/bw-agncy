
import React from 'react';
import { ShieldCheck, Target, Users2, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "Transparent processes and honest partnerships built on mutual respect.",
      icon: <ShieldCheck className="w-6 h-6 text-[#d35400]" />
    },
    {
      title: "Compliance",
      description: "Strict adherence to Australian labor laws and safety regulations.",
      icon: <Award className="w-6 h-6 text-[#d35400]" />
    },
    {
      title: "Excellence",
      description: "Delivering superior workforce quality that drives operational success.",
      icon: <Target className="w-6 h-6 text-[#d35400]" />
    },
    {
      title: "Partnership",
      description: "Long-term relationships that evolve with your business needs.",
      icon: <Users2 className="w-6 h-6 text-[#d35400]" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Management" 
                className="w-full h-auto"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-100 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d35400]/5 rounded-full -z-0"></div>
            
            <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="bg-[#d35400] p-3 rounded-lg text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold text-[#d35400] uppercase tracking-widest block mb-4">About Our Agency</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              An Australia-based Recruitment & Workforce Solutions Provider
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Brickworks Agency supports key industries across Australia, including construction, 
              manufacturing, operations, and corporate sectors. We are inspired by the legacy of 
              foundational building, focusing on creating durable professional connections.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
