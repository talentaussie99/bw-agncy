
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes icons */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-32 h-32" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#d35400] uppercase tracking-widest block mb-4">Worker Feedback</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our Workers Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our reputation is built by the workers we support. We take pride in 
            providing reliable, flexible, and supportive career paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#d35400]/5 p-8 rounded-2xl shadow-sm border border-[#d35400]/10 hover:border-[#d35400]/30 transition-all hover:shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-700 text-sm mb-8 leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center pt-6 border-t border-[#d35400]/10">
                <div className="w-10 h-10 rounded-full bg-[#d35400] flex items-center justify-center font-bold text-white mr-3 shadow-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
