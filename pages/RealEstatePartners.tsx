
import React, { useState, useRef } from 'react';

const RealEstatePartners: React.FC = () => {
  const submitRef = useRef<HTMLDivElement>(null);

  const scrollToSubmit = () => {
    submitRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen pt-[95px]">
      {/* Hero Section - Matched to Screenshot */}
      <section className="flex flex-col md:flex-row h-auto md:h-[600px] border-b border-black">
        <div className="flex-1 bg-white p-12 md:p-24 flex flex-col justify-center border-r border-black">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-7xl font-display text-primary mb-8 leading-[1] tracking-tight">
              Increase your rental revenue by up to +50%
            </h1>
            <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-12">
              Outsite is a coliving brand and operator that designs and manages residential and commercial properties to appeal to the growing market of remote workers and distributed teams. We deliver exceptional performance to our partners through smart design and tech-enabled operations.
            </p>
            <button 
              onClick={scrollToSubmit}
              className="bg-black text-white px-12 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] hover:bg-gray-800 transition-all shadow-xl"
            >
              Tell Us About Your Property
            </button>
          </div>
        </div>
        <div className="flex-1 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Pool side villa" 
          />
        </div>
      </section>

      {/* Press Logos Bar */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale contrast-125">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bloomberg_logo.svg/1280px-Bloomberg_logo.svg.png" alt="Bloomberg" className="h-5 md:h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/The_Next_Web_logo.svg/1280px-The_Next_Web_logo.svg.png" alt="Skift" className="h-5 md:h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Forbes_logo.svg/1280px-Forbes_logo.svg.png" alt="Forbes" className="h-6 md:h-7 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Quartz_logo.svg/1280px-Quartz_logo.svg.png" alt="Quartz" className="h-5 md:h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Reuters_logo.svg/1280px-Reuters_logo.svg.png" alt="Reuters" className="h-5 md:h-6 object-contain" />
        </div>
      </section>

      {/* Testimonial Box - Exact Style from Screenshot */}
      <section className="py-40 px-6 md:px-24 bg-[#EAE7DD]/30 border-y border-gray-100">
        <div className="max-w-xl mx-auto border border-gray-200 rounded-sm bg-white overflow-hidden shadow-2xl relative">
          <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Landlord" 
            />
          </div>
          <div className="p-12 space-y-6 text-left">
            <span className="material-symbols-outlined text-5xl text-primary opacity-20 italic">format_quote</span>
            <div>
              <h3 className="text-3xl font-display text-primary">Arthur Queron</h3>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">Landlord - Outsite Biarritz</p>
            </div>
            <div className="h-[1px] bg-gray-100 w-full" />
            <p className="text-[16px] text-gray-500 font-sans font-light leading-relaxed italic">
              "Overall, my workload & expenses decreased dramatically. The clientele is younger, easy-going & easier to manage. People appreciate (and participate in) the cleanliness & order. Outsite filters in ideal guests - no kids, no large families, mostly singles & couples."
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={submitRef} className="py-40 px-6 md:px-24 bg-white text-center">
        <div className="max-w-4xl mx-auto bg-[#F9F7F2] p-10 md:p-16 border border-gray-100 shadow-sm space-y-12 text-left">
           <div>
             <h2 className="text-5xl font-display mb-4">Submit a Property</h2>
             <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
               Have a property we might be interested in? Submit it here.
             </p>
           </div>

           <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans uppercase tracking-widest">First Name*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans uppercase tracking-widest">Last Name*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans uppercase tracking-widest">Email Address*</label>
                  <input type="email" className="w-full bg-white border border-gray-200 py-4 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans uppercase tracking-widest">Property City*</label>
                  <input type="text" className="w-full bg-white border border-gray-200 py-4 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-gray-700 font-sans uppercase tracking-widest">Why do you think this property would be a good fit?*</label>
                <textarea className="w-full bg-white border border-gray-200 py-4 px-4 h-32 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white py-6 rounded-full font-condensed font-black uppercase tracking-widest text-[16px] hover:bg-black transition-all shadow-xl">
                Submit Property
              </button>
           </form>
        </div>
      </section>

      <div className="h-48 bg-[#FAF9F6]"></div>
    </div>
  );
};

export default RealEstatePartners;
