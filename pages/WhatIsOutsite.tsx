
import React, { useState } from 'react';

interface WhatIsOutsiteProps {
  onBecomeMemberClick: () => void;
  onExploreClick: () => void;
}

const WhatIsOutsite: React.FC<WhatIsOutsiteProps> = ({ onBecomeMemberClick, onExploreClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const spaceTypes = [
    { title: 'APARTMENTS', desc: 'Enjoy private living quarters with a private bedroom, bathroom, lounge, kitchen, and workspace.' },
    { title: 'STUDIOS', desc: 'Our Studios are private rooms with en suites, kitchenettes, and access to common areas.' },
    { title: 'PRIVATE ROOMS', desc: 'You\'ll have your own private room, and share the lounge, workspace, and kitchens.' }
  ];

  const benefits = [
    { title: 'CONSISTENT COMFORT', text: 'Predictable quality, ergonomic workspaces, and high-speed WiFi across the global network.' },
    { title: 'GLOBAL COMMUNITY', text: 'Join 5,000+ members worldwide and build meaningful connections while you travel.' },
    { title: 'FLEXIBLE LIVING', text: 'Stay for a week or a year. Our memberships and booking terms are built for nomads.' }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">STAY WITH</span>
          <h1 className="text-[56px] md:text-[90px] font-serif italic text-primary leading-none tracking-tight mt-2">United Strangers</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Accommodation built for work, life, and everything in between. Designed for the global creative class.
        </p>
        <div className="flex justify-center gap-4">
           <button onClick={onBecomeMemberClick} className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl">Become a Member</button>
        </div>
      </section>

      {/* Hero Gallery Grid Style */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh]">
          <div className="overflow-hidden rounded-sm relative group">
            <img src="https://images.unsplash.com/photo-1543783230-278358633ef2?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Lifestyle" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600" className="w-full h-full object-cover" /></div>
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1512918766755-ee7b17104235?q=80&w=600" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different? */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-b border-black/5">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-tight tracking-tight max-w-xl">
          What Makes Our Spaces Different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
           <div className="space-y-12">
              {spaceTypes.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                   <h3 className="text-[16px] font-condensed font-black text-primary uppercase tracking-widest group-hover:text-blue-600 transition-colors">{item.title}</h3>
                   <p className="text-[14px] md:text-[15px] text-gray-500 font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
           <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-40 px-6 md:px-24 bg-white text-center">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-none tracking-tight">Why Choose Outsite?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
           {benefits.map((benefit, i) => (
             <div key={i} className="flex flex-col items-center space-y-10 group px-4">
                <div className="w-[100px] h-[100px] border border-black/10 flex items-center justify-center relative overflow-hidden bg-[#FAF9F6]">
                   <span className="material-symbols-outlined text-primary text-4xl font-light z-10">verified_user</span>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-black/10 group-hover:bg-primary/5 transition-all"></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-[16px] font-condensed font-black uppercase tracking-widest text-primary">{benefit.title}</h3>
                  <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">{benefit.text}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-black/10" style={{ left: `${(i + 1) * 33.3}%` }}></div>}
             </div>
           ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-40 bg-[#FAF9F6] relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 md:px-24">
            <div className="flex flex-col md:flex-row items-center gap-0 relative">
               <div className="w-full md:w-[45%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=1200" className="w-full h-full object-cover" />
               </div>
               <div className="w-full md:w-[65%] bg-white p-12 md:p-24 md:-ml-24 shadow-2xl relative z-20 space-y-12">
                  <p className="text-xl md:text-2xl text-gray-700 font-serif font-light leading-relaxed italic">
                    "Outsite didn't just give me a place to stay — it reminded me how good it feels to make community wherever you are. Living and working together made me more open and playful than I'd been in years."
                  </p>
                  <div className="space-y-2">
                     <p className="text-[18px] font-condensed font-black uppercase tracking-widest text-primary">Sasha</p>
                     <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Digital Nomad, Freelance Designer</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 px-6 md:px-24 bg-[#FAF9F6] border-t border-black/5">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl overflow-hidden rounded-sm">
            <div className="aspect-square md:aspect-auto overflow-hidden">
               <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200" className="w-full h-full object-cover" />
            </div>
            <div className="p-12 md:p-24 flex flex-col justify-center text-center lg:text-left space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-serif italic text-primary leading-[0.9] tracking-tighter">Find your next stay</h2>
                  <p className="text-lg text-gray-500 font-sans font-light leading-relaxed">
                     Ready to join the community? Browse our worldwide locations and find the perfect spot for your next remote working adventure.
                  </p>
               </div>
               <button onClick={onExploreClick} className="mx-auto lg:mx-0 bg-transparent border border-black/20 text-primary px-12 py-5 rounded-full text-[12px] font-condensed font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all w-fit">
                  Explore Locations
               </button>
            </div>
         </div>
      </section>

      <div className="h-40 bg-white"></div>
    </div>
  );
};

export default WhatIsOutsite;
