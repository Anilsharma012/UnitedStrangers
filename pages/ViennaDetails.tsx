
import React, { useState, useEffect, useRef } from 'react';
import AmenitiesModal from '../components/AmenitiesModal';

const ViennaDetails: React.FC = () => {
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
      {/* Header */}
      <section className="pt-24 px-6 md:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 aspect-[21/9] mb-12">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group shadow-xl">
            <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Vienna" />
            <div className="absolute top-6 left-6"><span className="bg-[#BCECE0] px-4 py-1.5 text-[10px] font-display font-black uppercase tracking-widest text-black">CURATED</span></div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1555854817-57739d8995a0?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm relative group bg-gray-200 flex items-center justify-center shadow-sm"><span className="relative z-10 text-white font-condensed font-black text-4xl uppercase tracking-widest">+5</span></div>
        </div>
        <div className="border-t border-black/5 pt-12 mb-20 space-y-4">
           <span className="ace-section-label !text-left !mb-0 text-gray-400 uppercase">BY ZOKU</span>
           <h1 className="editorial-heading !text-[56px] md:!text-[88px]">Vienna Lofts</h1>
           <p className="text-gray-400 font-sans font-medium text-lg tracking-tight">Modern Loft Apartments • Historic Diverse Neighborhood</p>
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
          <div className="space-y-12 text-left">
             <span className="ace-section-label !text-left !mb-0 text-gray-300 uppercase">THE SPACE</span>
             <h2 className="editorial-heading !text-[44px] md:!text-[68px] !leading-[1.0]">Smart lofts in Leopoldstadt.</h2>
             <p className="text-[18px] md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-xl">Zoku Vienna provides a home for business travelers who want to live in the city for a few days to a few months. Each loft features a clever mezzanine sleeping area and a full kitchen.</p>
          </div>
          <div className="space-y-12">
            <h3 className="ace-title !text-[14px] border-b border-black/5 pb-4 text-left uppercase">WHAT'S INCLUDED</h3>
            <div className="space-y-10">
               {[{ icon: 'desk', title: 'Smart Workspace', desc: 'Integrated desk setup in every loft.' }, { icon: 'restaurant', title: 'Living Kitchen', desc: 'Rooftop social area and high-spec shared kitchen.' }, { icon: 'groups', title: 'Local Community', desc: 'Access to Zoku\'s famous community events.' }].map((item, i) => (
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
              <h3 className="ace-title !text-2xl text-left mb-2 uppercase">LOFT XL</h3>
              <p className="text-gray-400 font-sans font-medium mb-6 uppercase tracking-widest">From €120/night</p>
              <button className="bg-white border border-black px-10 py-3 rounded-full ace-title !text-[10px] hover:bg-black hover:text-white transition-all uppercase">Select Dates</button>
            </div>
         </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={experienceRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-16">Experience</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'PRATER PARK', img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=800', desc: 'Historic amusement park and lush green trails.' },
              { title: 'COFFEE HOUSES', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800', desc: 'Indulge in Vienna\'s world-famous traditional coffee culture.' },
              { title: 'MUSEUM QUARTER', img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800', desc: 'A hub for modern art, design, and evening drinks.' }
            ].map((exp, i) => (
              <div key={i} className="space-y-6">
                 <div className="aspect-square overflow-hidden rounded-sm shadow-md"><img src={exp.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /></div>
                 <h4 className="ace-title !text-[16px] text-left uppercase">{exp.title}</h4>
                 <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">{exp.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* LOCATION */}
      <section ref={locationRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-12">Location</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">Leopoldstadt neighborhood, known for its green spaces and creative atmosphere. You are located right next to the U-Bahn station for easy access to the Stephansplatz.</p>
            <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden shadow-lg grayscale">
               <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" className="w-full h-full object-cover" />
            </div>
         </div>
      </section>

      {/* REVIEWS */}
      <section ref={reviewsRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-16">Reviews</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'Sebastian G.', date: 'NOV 2025', text: 'The smart lofts are incredible. Most productive stay I\'ve had in Europe.' },
              { name: 'Linda P.', date: 'OCT 2025', text: 'Rooftop community dinners were the highlight. Great views of the Ferris wheel!' }
            ].map((rev, i) => (
              <div key={i} className="p-10 border border-black/5 bg-white shadow-sm">
                 <p className="text-[16px] text-gray-600 font-sans font-light italic mb-6">"{rev.text}"</p>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                    <span className="ace-title !text-[11px] uppercase">{rev.name} • {rev.date}</span>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* THINGS TO KNOW */}
      <section ref={knowRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-16">Things to Know</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
               <h4 className="ace-title !text-[14px] uppercase border-b border-black/5 pb-2">SUSTAINABILITY</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">Our Vienna lofts are energy-efficient with sustainable heating and recycling programs in place.</p>
            </div>
            <div className="space-y-4">
               <h4 className="ace-title !text-[14px] uppercase border-b border-black/5 pb-2">GUESTS</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">External guests are welcome in the Living Kitchen and rooftop area during public hours.</p>
            </div>
         </div>
      </section>

      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} />
    </div>
  );
};

export default ViennaDetails;
