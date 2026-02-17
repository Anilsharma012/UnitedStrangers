import React, { useState } from 'react';
import LaunchesSection from '../components/LaunchesSection';

interface SignatureLocationsProps {
  onVisitHouseClick: () => void;
  onExploreClick: () => void;
}

const SignatureLocations: React.FC<SignatureLocationsProps> = ({ onVisitHouseClick, onExploreClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inclusions = [
    { icon: 'star', text: 'DESIGNED & OPERATED BY OUTSITE' },
    { icon: 'bed', text: 'COMFORTABLE PRIVATE ROOMS, STUDIOS OR APARTMENTS' },
    { icon: 'groups', text: 'WEEKLY COMMUNITY ACTIVITY' },
    { icon: 'chat_bubble_outline', text: 'LOCAL COMMUNITY MANAGER' },
    { icon: 'wifi', text: 'FAST WIFI AND WORKSPACE' },
    { icon: 'restaurant', text: 'KITCHEN ON-SITE' },
    { icon: 'location_on', text: 'BEAUTIFUL DESTINATIONS' },
    { icon: 'pool', text: 'SHARED AMENITIES LIKE POOLS, TERRACES AND/OR A GYM.' },
  ];

  const benefits = [
    {
      icon: 'bed',
      title: 'CONSISTENT COMFORT',
      text: 'Stay in spaces designed and operated by the Outsite team, with predictable quality wherever you go.'
    },
    {
      icon: 'local_offer',
      title: 'MEMBER PERKS',
      text: 'Enjoy free nights in new locations, up to 40% off long stays, and 50% off last-minute flash deals.'
    },
    {
      icon: 'card_giftcard',
      title: 'ACCUMULATE REWARDS',
      text: 'Earn credits every time you stay and use them toward your next adventure with Outsite.'
    }
  ];

  const faqs = [
    { q: "What is Outsite? How does it work?", a: "Outsite is a global network of coliving spaces designed for remote workers. As a member, you get access to all our locations, community events, and member-only perks." },
    { q: "Do I need to be a Member to stay at Outsite?", a: "Yes, Outsite is a members-only community. This ensures a consistent environment for productivity and community building." },
    { q: "What workspaces do you have?", a: "Every Signature location features a dedicated workspace with high-speed WiFi, ergonomic chairs, and quiet zones for calls." }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">SIGNATURE</span>
          <h1 className="text-[56px] md:text-[90px] font-serif text-primary leading-none tracking-tight mt-2">Locations</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Outsite-designed and operated locations for consistent comfort, community, and workspace quality.
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
        >
          Explore Locations
        </button>
      </section>

      {/* Hero Gallery Slider */}
      <section className="px-6 md:px-0 mb-32 relative">
         <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x h-[500px] md:h-[650px]">
            {/* Lisbon */}
            <div className="min-w-[85vw] md:min-w-[45vw] snap-center relative group cursor-pointer overflow-hidden" onClick={onVisitHouseClick}>
               <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Lisbon" />
               <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[12px] font-condensed font-black uppercase tracking-widest drop-shadow-md">Lisbon - Cais do Sodre</p>
               </div>
               <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-black text-xl">chevron_left</span>
               </div>
            </div>
            {/* Puerto Rico */}
            <div className="min-w-[85vw] md:min-w-[45vw] snap-center relative group cursor-pointer overflow-hidden" onClick={onVisitHouseClick}>
               <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Puerto Rico" />
               <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[12px] font-condensed font-black uppercase tracking-widest drop-shadow-md">Puerto Rico - Aguadilla</p>
               </div>
               <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-black text-xl">chevron_right</span>
               </div>
            </div>
         </div>
      </section>

      {/* What Makes a Property Signature? */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-b border-black/5">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-tight tracking-tight max-w-xl">
          What Makes a Property Signature?
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
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="w-full h-full object-cover" alt="Community gathering" />
              </div>
              <div className="grid grid-cols-2 gap-6 -mt-12 md:-mt-32">
                 <div className="aspect-square overflow-hidden rounded-sm shadow-xl border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600" className="w-full h-full object-cover" alt="Collaborating" />
                 </div>
                 <div className="aspect-square overflow-hidden rounded-sm shadow-xl border-8 border-white transform translate-y-12">
                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600" className="w-full h-full object-cover" alt="Workspace" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* What You Get Grid Section */}
      <section className="py-40 px-6 md:px-24 bg-white text-center">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-none tracking-tight">
          What You Get with Outsite Signature
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
           {benefits.map((benefit, i) => (
             <div key={i} className="flex flex-col items-center space-y-10 group px-4">
                <div className="w-[100px] h-[100px] border border-black/10 flex items-center justify-center relative overflow-hidden bg-[#FAF9F6]">
                   <span className="material-symbols-outlined text-primary text-4xl font-light z-10">{benefit.icon}</span>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-black/10 group-hover:bg-primary/5 transition-all"></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-[16px] font-condensed font-black uppercase tracking-widest text-primary">{benefit.title}</h3>
                  <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed text-black">
                    {benefit.text}
                  </p>
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
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lane's Story" />
               </div>
               <div className="w-full md:w-[65%] bg-white p-12 md:p-24 md:-ml-24 shadow-2xl relative z-20 space-y-12">
                  <p className="text-xl md:text-2xl text-gray-700 font-serif font-light leading-relaxed italic text-black">
                    "I booked a month in Lisbon with Outsite because I was tired of being alone — and somehow found the opposite of loneliness. I went from working in silence to sharing dinners, boat rides, and spontaneous beach days with people from all over the world. Living and working together made me more open, playful, and connected than I'd been in years. Outsite didn't just give me a place to stay — it reminded me how good it feels to make community wherever you are."
                  </p>
                  <div className="space-y-2">
                     <p className="text-[18px] font-condensed font-black uppercase tracking-widest text-primary">Lane</p>
                     <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Head of Content, Zapier</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-32 px-6 md:px-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-20 leading-none tracking-tight text-black">
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
                    <span className="material-symbols-outlined text-[18px] text-black group-hover:text-white">
                      {openFaq === i ? 'remove' : 'add'}
                    </span>
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

export default SignatureLocations;
