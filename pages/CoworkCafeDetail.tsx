
import React, { useState, useEffect, useRef } from 'react';

const CoworkCafeDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SPACE');
  
  const spaceRef = useRef<HTMLDivElement>(null);
  const passesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { label: 'SPACE', ref: spaceRef },
    { label: 'PASSES', ref: passesRef },
    { label: 'EVENTS', ref: eventsRef },
    { label: 'LOCATION', ref: locationRef },
    { label: 'FOR TEAMS', ref: teamsRef }
  ];

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-200px 0px -60% 0px', threshold: 0 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tab = tabs.find(t => t.ref.current === entry.target);
          if (tab) setActiveTab(tab.label);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    tabs.forEach(tab => { if (tab.ref.current) observer.observe(tab.ref.current); });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -220;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const amenities = [
    { icon: 'wifi', label: 'High-speed Wifi' },
    { icon: 'lock', label: 'Locker Storage' },
    { icon: 'chair_alt', label: 'Comfortable Chairs' },
    { icon: 'groups', label: 'Meeting Rooms' },
    { icon: 'podcasts', label: 'Phone Booths' },
    { icon: 'event', label: 'Professional Events' }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen text-black">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hero" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="hero-zoom mb-12 uppercase">Cowork Cafe<br/><span className="italic font-serif normal-case">Lisbon</span></h1>
        </div>
      </section>

      {/* STICKY NAV: MATCHING 2ND SCREENSHOT EXACTLY */}
      <nav className="border-y border-black/5 sticky top-[76px] md:top-[128px] z-[100] bg-white">
        <div className="max-w-[1400px] mx-auto flex justify-center gap-12 md:gap-24 overflow-x-auto no-scrollbar h-[80px]">
           {tabs.map(tab => (
             <button 
               key={tab.label} 
               onClick={() => scrollToSection(tab.ref)}
               className={`tab-nav-item whitespace-nowrap ${activeTab === tab.label ? 'border-primary text-black' : 'border-transparent text-[#D1D1D1] hover:text-black'}`}
             >
               {tab.label}
             </button>
           ))}
        </div>
      </nav>

      <section ref={spaceRef} className="py-48 px-6 md:px-24 bg-white border-b border-black/5 scroll-mt-[210px] text-left">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12 text-left">
             <span className="ace-section-label !text-left !mb-0 text-gray-300 uppercase">THE SPACE</span>
             <h2 className="editorial-heading !text-[44px] md:!text-[68px] !leading-[1.0]">A central workspace in Lisbon.</h2>
             <p className="text-[18px] md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-xl text-left">Find focus and community at Cais do Sodre's premier cowork cafe. Fast WiFi and specialty coffee guaranteed.</p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-left items-start">
             {amenities.map((a, i) => (
               <div key={i} className="flex items-center gap-4 text-left"><span className="material-symbols-outlined text-gray-400">{a.icon}</span><span className="text-[14px] font-bold uppercase tracking-tight text-primary">{a.label}</span></div>
             ))}
          </div>
        </div>
      </section>

      <section ref={passesRef} className="py-48 px-6 md:px-24 bg-[#FAF9F6] scroll-mt-[210px] border-b border-black/5 text-left">
        <h2 className="editorial-heading !text-[56px] md:!text-[88px] mb-16 text-left uppercase">Passes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
           <div className="bg-white border border-black p-12 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all text-left">
              <h3 className="ace-title !text-4xl text-left uppercase">FLEXI PASS (10 DAYS)</h3>
              <p className="text-3xl font-sans font-light mt-8">150€</p>
           </div>
           <div className="bg-white border border-black p-12 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all text-left">
              <h3 className="ace-title !text-4xl text-left uppercase">HALF DAY PASS</h3>
              <p className="text-3xl font-sans font-light mt-8">15€</p>
           </div>
        </div>
      </section>

      <footer className="bg-black text-white py-32 text-center">
         <div className="flex flex-col items-center">
            <span className="text-[24px] font-condensed font-black uppercase tracking-widest">COWORKCAFE</span>
         </div>
      </footer>
    </div>
  );
};

export default CoworkCafeDetail;
