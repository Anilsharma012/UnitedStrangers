
import React, { useState, useEffect, useRef } from 'react';
import AmenitiesModal from '../components/AmenitiesModal';

const SofiaDetails: React.FC = () => {
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
      {/* Editorial Header */}
      <section className="pt-24 px-6 md:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 aspect-[21/9] mb-12">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group shadow-xl">
            <img src="https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sofia" />
            <div className="absolute top-6 left-6"><span className="bg-[#BCECE0] px-4 py-1.5 text-[10px] font-display font-black uppercase tracking-widest text-black">CURATED</span></div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1555854817-57739d8995a0?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-sm"><img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=600" className="w-full h-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm relative group bg-gray-200 flex items-center justify-center shadow-sm"><span className="relative z-10 text-white font-condensed font-black text-4xl uppercase tracking-widest">+18</span></div>
        </div>
        <div className="border-t border-black/5 pt-12 mb-20 space-y-4">
           <span className="ace-section-label !text-left !mb-0 text-gray-400 uppercase">BY WORKNOMADS</span>
           <h1 className="editorial-heading !text-[56px] md:!text-[88px]">Sofia Hub</h1>
           <p className="text-gray-400 font-sans font-medium text-lg tracking-tight">Creative Hub • Nomad Hotspot • Rooftop Bar</p>
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
      <section ref={spaceRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 text-left">
          <div className="space-y-12">
             <span className="ace-section-label !text-left !mb-0 text-gray-300 uppercase">THE SPACE</span>
             <h2 className="editorial-heading !text-[44px] md:!text-[68px] !leading-[1.0]">Bulgaria's first nomad hotel.</h2>
             <p className="text-[18px] md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-xl">WorkNomads Hotel offers private rooms designed for focus, plus shared spaces that bring people together. The interior combines industrial aesthetics with cozy Balinese-inspired touches.</p>
          </div>
          <div className="space-y-12">
            <h3 className="ace-title !text-[14px] border-b border-black/5 pb-4 text-left uppercase">WHAT'S INCLUDED</h3>
            <div className="space-y-10">
               {[{ icon: 'wifi', title: 'High-Speed Wi-Fi', desc: 'Reliable fiber internet throughout the property.' }, { icon: 'work', title: 'Dedicated Workspaces', desc: 'Comfortable desks and quiet zones for focused work.' }, { icon: 'groups', title: 'Community Events', desc: 'Join weekly activities and connect with fellow nomads.' }].map((item, i) => (
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
      <section ref={roomsRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] space-y-24 border-b border-black/5">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] text-left uppercase">Rooms & Prices</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 text-left">
            {[
              { title: 'DELUXE DOUBLE', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200', price: '€45/night' },
              { title: 'EXECUTIVE SUITE', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200', price: '€75/night' }
            ].map(r => (
              <div key={r.title} className="group flex flex-col items-start">
                <div className="aspect-[1.4/1] w-full overflow-hidden rounded-sm mb-8 shadow-xl"><img src={r.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
                <h3 className="ace-title !text-2xl text-left mb-2 uppercase">{r.title}</h3>
                <p className="text-gray-400 font-sans font-medium mb-6 uppercase tracking-widest">{r.price}</p>
                <button className="bg-white border border-black px-10 py-3 rounded-full ace-title !text-[10px] hover:bg-black hover:text-white transition-all uppercase">Select Dates</button>
              </div>
            ))}
         </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={experienceRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] mb-20 text-left uppercase">Experience</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'VITOSHA MOUNTAIN', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800', desc: 'Hiking and skiing just 20 minutes from the city center.' },
              { title: 'COFFEE CULTURE', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800', desc: 'Explore Sofia\'s booming specialty coffee scene and historic cafes.' },
              { title: 'NIGHTLIFE', img: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=800', desc: 'Experience the energetic bars and underground clubs of the capital.' }
            ].map((exp, i) => (
              <div key={i} className="space-y-6">
                 <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-md"><img src={exp.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /></div>
                 <h4 className="ace-title !text-[16px] text-left uppercase">{exp.title}</h4>
                 <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">{exp.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* LOCATION */}
      <section ref={locationRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-12">Location</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
               <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">Centrally located in the heart of Sofia, near transport hubs and cultural landmarks. You're a short walk from the Alexander Nevsky Cathedral and the vibrant Vitosha Boulevard.</p>
               <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">directions_walk</span>
                  <span className="text-[13px] font-bold uppercase tracking-widest">Walk Score: 92</span>
               </div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden grayscale opacity-60">
               <img src="https://images.unsplash.com/photo-1524850041227-63d2e24760fc?q=80&w=800" className="w-full h-full object-cover" />
            </div>
         </div>
      </section>

      {/* REVIEWS */}
      <section ref={reviewsRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] border-b border-black/5 text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-16">Reviews</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'Marcus L.', date: 'SEP 2025', text: 'Sofia is a hidden gem. WorkNomads provided the perfect balance of deep work and social energy.' },
              { name: 'Elena R.', date: 'DEC 2025', text: 'The community events here are the best. I met so many interesting people from all over Europe.' }
            ].map((rev, i) => (
              <div key={i} className="p-10 bg-white border border-black/5 shadow-sm space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100" />
                    <div>
                       <p className="ace-title !text-[14px]">{rev.name}</p>
                       <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">{rev.date}</p>
                    </div>
                 </div>
                 <p className="text-[16px] text-gray-600 italic font-sans font-light leading-relaxed">"{rev.text}"</p>
              </div>
            ))}
         </div>
      </section>

      {/* THINGS TO KNOW */}
      <section ref={knowRef} className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-[210px] text-left">
         <h2 className="editorial-heading !text-[56px] md:!text-[88px] uppercase mb-16">Things to Know</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
               <h4 className="ace-title !text-[14px] uppercase border-b border-black/5 pb-2">CHECK-IN / OUT</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">Check-in: 3:00 PM • Check-out: 11:00 AM. Self check-in is available via mobile app.</p>
            </div>
            <div className="space-y-4">
               <h4 className="ace-title !text-[14px] uppercase border-b border-black/5 pb-2">HOUSE RULES</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">Quiet hours after 10:00 PM. No pets allowed. This is a non-smoking property.</p>
            </div>
            <div className="space-y-4">
               <h4 className="ace-title !text-[14px] uppercase border-b border-black/5 pb-2">TRANSPORT</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">Metro station M1/M2 is a 5-minute walk. Airport shuttle can be arranged on request.</p>
            </div>
         </div>
      </section>

      <AmenitiesModal isOpen={isAmenitiesOpen} onClose={() => setIsAmenitiesOpen(false)} />
    </div>
  );
};

export default SofiaDetails;
