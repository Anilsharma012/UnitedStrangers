
import React, { useState, useRef } from 'react';
import { SIGNATURE_LOCATIONS, CURATED_LOCATIONS } from '../constants';
import LaunchesSection from '../components/LaunchesSection';

interface HomeProps {
  onPropertyClick: () => void;
  onBecomeMemberClick: () => void;
  onExploreAllClick: () => void;
  onViewDealClick: () => void;
}

const OFFERS = [
  {
    id: 1,
    title: "GET EXTRA CREDIT",
    description: "$50 for our restaurants and bars when you book.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    btn1: "BOOK NOW",
    btn2: "VIEW OFFER",
    overlayText: "EXTRA CREDIT"
  },
  {
    id: 2,
    title: "ACE MEMBER RATE",
    description: "Join the United Strangers Fan Club for up to 10% off stays and 15% off the Shop.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    btn1: "SIGN UP",
    btn2: "VIEW OFFER",
    overlayText: "FAN CLUB"
  },
  {
    id: 3,
    title: "MAKE IT LAST",
    description: "Book a stay over 2 nights or more and receive up to 30% off.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    btn1: "BOOK NOW",
    btn2: "VIEW OFFER",
    overlayText: "MAKE IT LAST"
  },
  {
    id: 4,
    title: "PAY NOW AND SAVE",
    description: "Book a pre-paid stay at least 2 weeks in advance and receive up to 20% off.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
    btn1: "BOOK NOW",
    btn2: "VIEW OFFER",
    overlayText: "PRE-PAY"
  }
];

const CURATED_SLIDES = [
  { city: 'London', name: 'Canary Wharf', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200' },
  { city: 'Sofia', name: '', img: 'https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=1200' },
  { city: 'Cape Town', name: 'Green Point', img: 'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=1200' },
  { city: 'Cape Town', name: 'Camps Bay', img: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=1200' },
  { city: 'Sri Lanka', name: 'Weligama', img: 'https://images.unsplash.com/photo-1506461883276-5d4a3ef5f073?q=80&w=1200' }
];

const TRIPS_SLIDES = [
  { 
    id: 'marrakesh', 
    name: 'MARRAKESH', 
    bg: 'bg-[#1E57A8]', 
    textColor: 'text-[#B5C98E]', 
    font: 'ace-title !text-[48px] md:!text-[64px]',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800' 
  },
  { 
    id: 'ericeira', 
    name: 'ERICEIRA', 
    bg: 'bg-[#A3C7D7]', 
    textColor: 'text-black', 
    font: 'font-serif italic lowercase tracking-tight scale-x-125 !text-[48px] md:!text-[64px]',
    img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800' 
  },
  { 
    id: 'medellin', 
    name: 'MEDELLIN', 
    bg: 'bg-[#1E4379]', 
    textColor: 'text-[#D4A15D]', 
    font: 'ace-title !text-[48px] md:!text-[64px]',
    img: 'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=800' 
  },
  { 
    id: 'loscabos', 
    name: 'LOS CABOS', 
    bg: 'bg-[#B5BA61]', 
    textColor: 'text-black', 
    font: 'font-serif italic lowercase tracking-tight scale-x-110 !text-[48px] md:!text-[64px]',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800' 
  },
  { 
    id: 'sagres', 
    name: 'SAGRES', 
    bg: 'bg-[#2E1B15]', 
    textColor: 'text-[#E6814D]', 
    font: 'ace-title !text-[48px] md:!text-[64px]',
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800' 
  }
];

const Home: React.FC<HomeProps> = ({ onPropertyClick, onBecomeMemberClick, onExploreAllClick, onViewDealClick }) => {
  const offerScrollRef = useRef<HTMLDivElement>(null);
  const curatedScrollRef = useRef<HTMLDivElement>(null);
  const tripsScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="fade-in bg-white">
      {/* Hero Section - REDUCED SCALE BY 50% FOR 100% FIT */}
      <section className="relative h-screen w-full bg-primary overflow-hidden flex flex-col items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="https://cdn.coverr.co/videos/coverr-walking-around-the-city-7679/1080p.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center px-6 max-w-[1400px] w-full flex flex-col items-center">
          <h1 className="text-white hero-zoom mb-10 text-center block w-full drop-shadow-2xl">
            WORK ANYWHERE.<br/>
            LIVE DIFFERENTLY.
          </h1>
          <div className="w-16 h-[1px] bg-white/40 mb-10" />
          <p className="font-display font-[900] !text-[10px] md:!text-[12px] !tracking-ace-section text-white mx-auto max-w-2xl leading-none uppercase opacity-90">
            EDITORIAL HOSPITALITY FOR THE GLOBAL CREATIVE CLASS
          </p>
        </div>
      </section>

      {/* SIGNATURE LOCATIONS */}
      <section className="py-24 bg-[#FAF9F6] border-b border-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-6xl font-serif italic text-primary leading-tight mb-8 normal-case tracking-tight">Explore Our<br/>Signature Locations</h2>
          <div className="mb-6 flex flex-col items-center gap-4">
            <span className="ace-section-label !text-gray-400 !mb-0 pb-1 border-b border-gray-200">SIGNATURE</span>
            <p className="text-[16px] md:text-[20px] text-gray-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Homes designed by United Strangers for remote work, community and slow travel.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1 px-1">
          <div className="flex gap-1 h-[45vh] md:h-[60vh]">
            <div className="flex-[1] overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt="Villa Exterior" /></div>
            <div className="flex-[1.2] overflow-hidden"><img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt="Interior Workspace" /></div>
            <div className="flex-[1.4] overflow-hidden"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt="People at desks" /></div>
            <div className="flex-[1.2] overflow-hidden"><img src="https://images.unsplash.com/photo-1512918766755-ee7b17104235?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt="Poolside Building" /></div>
            <div className="flex-[1] overflow-hidden"><img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" alt="Modern Bedroom" /></div>
          </div>
        </div>
      </section>

      {/* CURATED SECTION */}
      <section className="py-24 px-6 md:px-0 bg-[#FAF9F6] border-b border-black/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-12">
          <span className="ace-section-label">C U R A T E D</span>
          <p className="text-[18px] md:text-[22px] text-gray-700 font-sans font-light max-w-xl mx-auto leading-relaxed">
            See more of the world with United Strangers Curated, a<br className="hidden md:block" /> selection of the best-in-class independent stays.
          </p>
        </div>

        <div className="relative group/curated">
          <button onClick={() => scroll(curatedScrollRef, 'left')} className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/5 hover:scale-110 transition-all opacity-0 group-hover/curated:opacity-100 hidden md:flex"><span className="material-symbols-outlined text-black">chevron_left</span></button>
          <button onClick={() => scroll(curatedScrollRef, 'right')} className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/5 hover:scale-110 transition-all opacity-0 group-hover/curated:opacity-100 hidden md:flex"><span className="material-symbols-outlined text-black">chevron_right</span></button>

          <div ref={curatedScrollRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-12">
            {CURATED_SLIDES.map((loc, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[400px] snap-start flex flex-col group cursor-pointer" onClick={onPropertyClick}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm bg-gray-200">
                  <img src={loc.img} alt={loc.city} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  <div className="absolute bottom-4 left-6 text-white text-[16px] font-sans font-medium drop-shadow-lg">{loc.city}{loc.name ? ` - ${loc.name}` : ''}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <div className="flex flex-col md:flex-row md:items-baseline gap-6">
              <h2 className="ace-title !text-[90px] md:!text-[120px] text-black">OFFERS</h2>
              <p className="text-[15px] text-black/60 font-sans font-medium pb-2 tracking-tight">Available at most United Strangers locations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {OFFERS.map((offer) => (
              <div key={offer.id} className="flex flex-col group cursor-pointer" onClick={onViewDealClick}>
                <div className="relative aspect-square overflow-hidden mb-6 bg-black">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <h4 className="text-white ace-title !text-6xl drop-shadow-2xl">{offer.overlayText}</h4>
                  </div>
                </div>
                <div className="space-y-2 mb-10 flex-1">
                  <h5 className="ace-title !text-[18px] text-black !scale-y-100">{offer.title}</h5>
                  <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed line-clamp-2">{offer.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-black text-white py-4 ace-title !text-[10px] !tracking-ace-wide hover:bg-zinc-800 transition-colors">{offer.btn1}</button>
                  <button className="flex-1 border border-black text-black py-4 ace-title !text-[10px] !tracking-ace-wide hover:bg-black hover:text-white transition-all">{offer.btn2}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIPS SECTION */}
      <section className="py-24 px-6 md:px-0 bg-[#FAF9F6] border-y border-black/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-12">
          <span className="ace-section-label">UNITED STRANGERS TRIPS</span>
          <p className="text-[18px] text-gray-700 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Curated one-month journeys for remote professionals who work - and live - anywhere.
          </p>
        </div>

        <div className="relative group/trips">
          <div ref={tripsScrollRef} className="flex gap-1 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-0 pb-12">
            {TRIPS_SLIDES.map((trip, i) => (
              <div key={i} className={`min-w-[85vw] md:min-w-[400px] aspect-square snap-start relative ${trip.bg} group cursor-pointer overflow-hidden flex flex-col items-center justify-center`}>
                <div className="relative w-[52%] h-[60%] overflow-hidden bg-gray-200 z-10 transition-transform duration-700 group-hover:scale-105 shadow-2xl">
                  <img src={trip.img} alt={trip.name} className="w-full h-full object-cover" />
                </div>
                <div className={`absolute bottom-8 left-0 w-full text-center px-6 z-20 ${trip.textColor}`}>
                  <h3 className={`${trip.font} uppercase drop-shadow-sm transition-all group-hover:-translate-y-2`}>{trip.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#FAF9F6] border-t border-black/5">
        <div className="py-20 px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
           <div className="text-center space-y-3">
              <h3 className="ace-title !text-6xl md:!text-8xl text-primary">$350</h3>
              <p className="ace-section-label !text-gray-400 !mb-0">AVG SAVING PER BOOKING</p>
           </div>
           <div className="hidden md:block h-24 w-px bg-black/10"></div>
           <div className="text-center space-y-3">
              <h3 className="ace-title !text-6xl md:!text-8xl text-primary">21,349</h3>
              <p className="ace-section-label !text-gray-400 !mb-0">STAYS HOSTED BY US</p>
           </div>
        </div>
      </section>

      {/* TESTIMONIAL FEATURE */}
      <section className="py-32 px-6 md:px-24 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-16">
           <div className="w-full md:w-[45%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Jakob" />
           </div>
           <div className="w-full md:w-[55%] space-y-10 text-left">
              <div className="space-y-2">
                 <h4 className="ace-title !text-[24px] text-primary">JAKOB</h4>
                 <p className="ace-section-label !text-left !mb-0">QUANTITATIVE TRADER FROM LONDON</p>
              </div>
              <div className="h-px bg-black/10 w-full" />
              <div className="space-y-8">
                 <h3 className="text-3xl md:text-5xl font-serif italic text-primary leading-tight normal-case tracking-tight text-black">
                   "I started working remotely in 2017 - the work I do can be done anywhere"
                 </h3>
                 <p className="text-[16px] text-gray-500 font-sans font-light leading-relaxed">
                   I Escape the London corporate life that was slowly draining my soul. I realized the kind of work I do can be done from anywhere with an internet connection. Initially, I relocated to Bali and later Australia, but over time I've returned closer to Europe and developed a bit of a migration pattern approach to nomading.
                 </p>
                 <button className="bg-white border border-black px-10 py-3.5 rounded-full ace-title !text-[11px] text-black hover:bg-black hover:text-white transition-all shadow-sm">Read full story</button>
              </div>
           </div>
        </div>
      </section>

      {/* STAY IN THE LOOP */}
      <section className="py-24 md:py-40 px-6 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <span className="ace-section-label">STAY IN THE LOOP</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary italic leading-none lowercase tracking-tighter text-black">Stay updated with us</h2>
          </div>

          <form className="w-full max-w-[400px] space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-black">First Name</label>
              <input type="text" className="w-full bg-[#FAF9F6] border border-gray-300 py-3.5 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm shadow-sm text-black" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-black">Email</label>
              <input type="email" className="w-full bg-[#FAF9F6] border border-gray-300 py-3.5 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm shadow-sm text-black" />
            </div>
            <div className="pt-4">
              <button type="button" className="w-full py-4 border border-black rounded-full ace-title !text-[11px] !tracking-ace-wide text-black hover:bg-black hover:text-white transition-all shadow-md active:scale-95">Sign up</button>
            </div>
          </form>
        </div>
      </section>
      
      <div className="fixed bottom-6 right-6 z-[200]">
         <button className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
           <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span>
           <span className="text-[14px] font-medium">Help</span>
         </button>
      </div>

      <div className="h-10 bg-[#FAF9F6]"></div>
    </div>
  );
};

export default Home;