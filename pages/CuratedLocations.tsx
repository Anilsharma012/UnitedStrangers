
import React, { useState } from 'react';
import LaunchesSection from '../components/LaunchesSection';

interface CuratedLocationsProps {
  onExploreClick: () => void;
  onLocationClick?: () => void;
}

const CuratedLocations: React.FC<CuratedLocationsProps> = ({ onExploreClick, onLocationClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const row1 = [
    { city: 'Cape Town', name: 'Green Point', img: 'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=800' },
    { city: 'Sri Lanka', name: 'Weligama', img: 'https://images.unsplash.com/photo-1506461883276-5d4a3ef5f073?q=80&w=800' },
    { city: 'Cape Town', name: 'Camps Bay', img: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=800' },
    { city: 'Sofia', name: 'Vitosha', img: 'https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=800' }
  ];

  const inclusions = [
    { icon: 'public', text: 'LOCATED IN A REMOTE WORK HUB' },
    { icon: 'wifi', text: 'FAST WIFI AND WORKSPACE' },
    { icon: 'bed', text: 'COMFORTABLE PRIVATE ROOMS OR APARTMENTS' },
    { icon: 'groups', text: 'COMMUNITY ACTIVITIES' },
    { icon: 'pool', text: 'SHARED AMENITIES LIKE POOLS, TERRACES OR GYMS' },
    { icon: 'restaurant', text: 'KITCHEN AND/OR F&B ON-SITE' }
  ];

  const faqs = [
    { q: "What is the difference between Signature and Curated?", a: "Signature properties are designed and fully operated by the Outsite team. Curated properties are independently operated stays that meet our strict quality standards for remote work and community." },
    { q: "Do Curated properties have Community Managers?", a: "Yes, every Curated property has a dedicated host or community manager to ensure your stay is seamless and to facilitate connections." },
    { q: "Can I use my Outsite Member perks here?", a: "Absolutely. All Outsite Members get exclusive discounted rates and accumulate rewards at Curated locations just like at Signature ones." }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">CURATED</span>
          <h1 className="text-[56px] md:text-[90px] font-serif italic text-primary leading-none tracking-tight mt-2">Locations</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Independently operated stays, curated by Outsite for quality, comfort, and remote work.
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl"
        >
          Explore Locations
        </button>
      </section>

      {/* Hero Gallery Slider */}
      <section className="px-6 md:px-0 mb-32 relative">
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10 px-6 snap-x">
            {row1.map((loc, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[45vw] snap-center relative group cursor-pointer overflow-hidden" onClick={onLocationClick}>
                <div className="aspect-[16/11] rounded-sm overflow-hidden mb-4 relative shadow-lg">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                  <div className="absolute bottom-6 left-6 text-white font-sans font-bold text-xs uppercase tracking-widest drop-shadow-md">{loc.city} - {loc.name}</div>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* What Makes a Property Curated? */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-b border-black/5">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-tight tracking-tight max-w-xl">
          What Makes a Property Curated?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
           <div className="space-y-12">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                   <span className="material-symbols-outlined text-primary text-2xl font-light shrink-0">{item.icon}</span>
                   <span className="text-[11px] md:text-[13px] font-condensed font-black text-primary/70 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{item.text}</span>
                </div>
              ))}
           </div>
           <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200" className="w-full h-full object-cover" alt="Community" />
              </div>
              <div className="grid grid-cols-2 gap-6 -mt-12 md:-mt-32">
                 <div className="aspect-square overflow-hidden rounded-sm shadow-xl border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600" className="w-full h-full object-cover" alt="Workspace" />
                 </div>
                 <div className="aspect-square overflow-hidden rounded-sm shadow-xl border-8 border-white transform translate-y-12">
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600" className="w-full h-full object-cover" alt="Cafe" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* What You Get Grid Section */}
      <section className="py-40 px-6 md:px-24 bg-white text-center">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-none tracking-tight">
          What You Get with Outsite Curated
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
           {[
             { title: 'EVERYTHING IN ONE PLACE', text: 'Manage all your bookings, perks, and payments from a single Outsite account.' },
             { title: 'DISCOUNTED RATES', text: 'Enjoy exclusive rates you won’t find on other booking sites or platforms.' },
             { title: 'ACCUMULATE REWARDS', text: 'Earn credits every time you stay and use them toward your next adventure with Outsite.' }
           ].map((benefit, i) => (
             <div key={i} className="flex flex-col items-center space-y-10 group px-4">
                <div className="w-[100px] h-[100px] border border-black/10 flex items-center justify-center relative overflow-hidden bg-[#FAF9F6]">
                   <span className="material-symbols-outlined text-primary text-4xl font-light z-10">layers</span>
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
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" className="w-full h-full object-cover" alt="Devon's Story" />
               </div>
               <div className="w-full md:w-[65%] bg-white p-12 md:p-24 md:-ml-24 shadow-2xl relative z-20 space-y-12">
                  <p className="text-xl md:text-2xl text-gray-700 font-serif font-light leading-relaxed italic">
                    "Outsite has completely changed the way I travel and work. The spaces are beautiful, comfortable, and always in walkable neighbourhoods, but what really makes it special is the community. I’ve met people from all over the world who actually get the remote-work lifestyle."
                  </p>
                  <div className="space-y-2">
                     <p className="text-[18px] font-condensed font-black uppercase tracking-widest text-primary">Devon</p>
                     <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Software Engineer</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-32 px-6 md:px-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-20 leading-none tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full py-10 flex items-center justify-between text-left group-hover:bg-[#FAF9F6] transition-all px-4"
                >
                  <span className="text-[16px] font-sans font-medium text-primary leading-snug">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0 ml-4 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[18px]">{openFaq === i ? 'remove' : 'add'}</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed max-w-2xl">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launches Section */}
      <LaunchesSection />

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default CuratedLocations;
