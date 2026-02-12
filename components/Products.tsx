
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-sm font-bold text-[#d35400] uppercase tracking-widest block mb-4">Industry Synergy</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Supporting Building Foundations</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Brickworks Agency operates at the intersection of manpower and material production. 
              We provide essential workforce support for the building materials industry, 
              ensuring the production of Australia's finest construction products.
            </p>
            <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-l-[#d35400]">
              <p className="text-sm italic text-slate-600">
                "We provide the human infrastructure necessary to sustain Australia's most critical manufacturing sectors."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {PRODUCTS.map((product, index) => (
              <div 
                key={index} 
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all flex flex-col h-full"
              >
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#d35400] uppercase">Operations Support Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
