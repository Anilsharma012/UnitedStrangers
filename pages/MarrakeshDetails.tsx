
import React, { useState, useEffect, useRef } from 'react';
import AmenitiesModal from '../components/AmenitiesModal';

const MarrakeshDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SPACE');
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  
  const spaceRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const knowRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { label: 'SPACE', ref: spaceRef },
    { label: 'ROOMS & PRICES', ref: roomsRef },
    { label: 'EXPERIENCE', ref: experienceRef },
    { label: 'LOCATION', ref: locationRef },
    { label: 'REVIEWS', ref: reviewsRef },
    { label: 'THINGS TO KNOW', ref: knowRef }
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

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen text-black">
      {/* Gallery Header */}
      <section className="pt-24 px-6 md:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 aspect-[21/9] mb-12">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group shadow-xl">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Marrakesh" />
            <div className="absolute top-6 left-6"><span className="bg-primary px-4 py-1.5 text-[10px] font-display font-black uppercase tracking-widest text-white">SIGNATURE</span></div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1512100356132-d3220389324a?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1539115806315-e2343b44b8ee?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm relative group bg-gray-200 flex items-center justify-center shadow-sm"><span className="relative z-10 text-white font-condensed font-black text-4xl uppercase tracking-widest">+15</span></div>
        </div>
        <div className="border-t border-black/5 pt-12 mb-20 space-y-4">
           <span className="ace-section-label !text-left !mb-0 text-gray-400 uppercase">BY UNITED STRANGERS</span>
           <h1 className="editorial-heading !text-[56px] md:!text-[88px]">Marrakesh Riad</h1>
           <p className="text-gray-400 font-sans font-medium text-lg tracking-tight">Traditional Tiled Riad • Heart of the Red City • Pool</p>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="border-y border-black/5 sticky top-[76px] md:top-[128px] z-[90] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between gap-8 md:gap-16 overflow-x-auto no-scrollbar h-[80px]">
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

      {/* SPACE */}
      <section ref={spaceRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
             <span className="ace-section-label !text-left !mb-0 text-gray-300 uppercase">THE SPACE</span>
             <h2 className="editorial-heading !text-[44px] md:!text-[68px] !leading-[1.0]">A quintessential Berber riad.</h2>
             <p className="text-[18px] md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-xl">This beautifully restored riad features a serene courtyard pool and a traditional hammam.</p>
          </div>
          <div className="space-y-12">
            <h3 className="ace-title !text-[14px] border-b border-black/5 pb-4 text-left uppercase">WHAT'S INCLUDED</h3>
            <div className="space-y-10">
               {[{ icon: 'pool', title: 'Courtyard Pool', desc: 'Refreshing dip in our central Riad area.' }, { icon: 'wifi', title: 'High-Speed Wi-Fi', desc: 'Dedicated coworking floor.' }, { icon: 'groups', title: 'Community Events', desc: 'Weekly family riad dinners and tours.' }].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                    <span className="material-symbols-outlined text-gray-400 text-3xl shrink-0 group-hover:text-primary transition-colors">{item.icon}</span>
                    <div className="text-left"><h4 className="ace-title !text-[16px] text-left !mb-1 uppercase">{item.title}</h4><p className="text-[14px] text-gray-500 leading-relaxed font-light">{item.desc}</p></div>
                 </div>
               ))}
            </div>
            <button onClick={() => setIsAmenitiesOpen(true)} className="bg-black text-white px-10 py-5 rounded-full ace-title !text-[11px] mt-8 hover:bg-gray-800 shadow-lg uppercase">Show all amenities</button>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section ref={roomsRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] mb-16 text-left uppercase">Rooms & Prices</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="group cursor-pointer flex flex-col items-start">
              <div className="aspect-[1.4/1] w-full overflow-hidden rounded-sm mb-8 shadow-xl"><img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
              <h3 className="ace-title !text-2xl text-left mb-4 uppercase">SIGNATURE QUEEN</h3>
              <button className="bg-white border border-black px-10 py-3 rounded-full ace-title !text-[10px] hover:bg-black hover:text-white transition-all uppercase">Select Dates</button>
            </div>
         </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={experienceRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-12">Experience</h2>
         <p className="text-xl text-gray-500 font-sans font-light">Moroccan craft workshops and desert expeditions await.</p>
      </section>

      {/* LOCATION */}
      <section ref={locationRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-12">Location</h2>
         <p className="text-lg text-gray-500 font-sans font-light">Situated in the vibrant Medina, steps from the Souks and Jemaa el-Fnaa.</p>
      </section>

      {/* REVIEWS */}
      <section ref={reviewsRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase">Reviews</h2>
      </section>

      {/* THINGS TO KNOW */}
      <section ref={knowRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase">Things to Know</h2>
      </section>

      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} />
    </div>
  );
};

export default MarrakeshDetails;
