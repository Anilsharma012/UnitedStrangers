
import React, { useState } from 'react';
import LaunchesSection from '../components/LaunchesSection';

interface Property {
  id: number;
  location: string;
  name: string;
  city: string;
  rating: string | number;
  priceNightly: string;
  priceMonthly?: string;
  image: string;
  type: 'SIGNATURE' | 'CURATED';
  isNew?: boolean;
  discount?: string;
  category?: string;
}

const apartmentProperties: Property[] = [
  { id: 101, location: "Portugal", name: "VILAMOURA", city: "ALGARVE", rating: 4.8, priceNightly: "$57.58", image: "https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=800", type: 'SIGNATURE', category: 'Hybrid Coliving' },
  { id: 102, location: "Mexico", name: "ROMA SUR", city: "MEXICO CITY", rating: 4.3, priceNightly: "$101.81", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800", type: 'SIGNATURE', category: 'Coliving' },
  { id: 103, location: "South Africa", name: "GREEN POINT", city: "CAPE TOWN", rating: 3.0, priceNightly: "$95.47", image: "https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=800", type: 'CURATED', category: 'Coliving' },
  { id: 104, location: "Indonesia", name: "PERERENAN", city: "BALI", rating: 4.5, priceNightly: "$70.00", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800", type: 'SIGNATURE', category: 'Coliving' },
  { id: 105, location: "Portugal", name: "SAGRES", city: "ALGARVE", rating: 4.4, priceNightly: "$41.54", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800", type: 'SIGNATURE', category: 'Coliving' },
  { id: 106, location: "United Kingdom", name: "CANARY WHARF", city: "LONDON", rating: 2.0, priceNightly: "$226.99", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800", type: 'CURATED', category: 'Coliving' },
  { id: 107, location: "United States", name: "ENCINITAS AVOCADO", city: "SAN DIEGO", rating: 5.0, priceNightly: "$203.50", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800", type: 'SIGNATURE', category: 'Coliving' },
  { id: 108, location: "Costa Rica", name: "PLAYA", city: "SANTA TERESA", rating: 4.8, priceNightly: "$187.00", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800", type: 'SIGNATURE', category: 'Coliving' }
];

const mainProperties: Property[] = [
  { id: 1, location: "Costa Rica", name: "PLAYA", city: "SANTA TERESA", rating: 4.8, priceNightly: "$113", priceMonthly: "$3,450", image: "https://images.unsplash.com/photo-1512918766755-ee7b17104235?q=80&w=800", type: 'SIGNATURE', discount: '10% OFF' },
  { id: 2, location: "Portugal", name: "GUINCHO", city: "CASCAIS", rating: 4.5, priceNightly: "$84", priceMonthly: "$2,012", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800", type: 'SIGNATURE' },
  { id: 3, location: "United States", name: "CHELSEA", city: "NEW YORK", rating: 4.3, priceNightly: "$104", priceMonthly: "$2,324", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800", type: 'SIGNATURE', discount: '30% OFF' },
  { id: 4, location: "United States", name: "ENCINITAS GRANDVIEW", city: "SAN DIEGO", rating: 4.8, priceNightly: "$145", priceMonthly: "$3,300", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800", type: 'SIGNATURE' },
  { id: 5, location: "Sri Lanka", name: "WELIGAMA", city: "SRI LANKA", rating: "New", priceNightly: "$86", priceMonthly: "$2,003", image: "https://images.unsplash.com/photo-1506461883276-5d4a3ef5f073?q=80&w=800", type: 'CURATED', isNew: true }
];

const features = [
  { icon: 'desk', label: 'Work Space + Supplies' },
  { icon: 'bed', label: 'Cozy Bedrooms' },
  { icon: 'wifi', label: 'Solid, Reliable WiFi' },
  { icon: 'chair', label: 'Fully Furnished' },
  { icon: 'restaurant', label: 'Well-equipped Kitchens' },
  { icon: 'layers', label: 'Fresh Towels + Linens' },
  { icon: 'cleaning_services', label: 'Professionally Cleaned' },
  { icon: 'lock', label: 'Safe and Secure' },
  { icon: 'person_pin_circle', label: 'Local Community Manager' },
  { icon: 'support_agent', label: '24/7 Support' },
  { icon: 'groups', label: 'Weekly Community Activities' },
  { icon: 'key', label: 'Contactless Check-in' }
];

interface PlacesToStayProps {
  onPropertyClick: () => void;
  onBecomeMemberClick?: () => void;
}

const PlacesToStay: React.FC<PlacesToStayProps> = ({ onPropertyClick, onBecomeMemberClick }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="fade-in bg-white min-h-screen relative">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-stretch min-h-[85vh] bg-[#F1EFEC]">
        <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-[64px] md:text-[110px] font-serif text-primary leading-[0.9] tracking-tight normal-case">
              Stay with<br/>Outsite
            </h1>
            <p className="text-[18px] md:text-2xl text-gray-700 font-sans font-light leading-relaxed max-w-md">
              Accommodation built for work, life, and everything in between.
            </p>
          </div>
          <button 
            onClick={onBecomeMemberClick}
            className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full text-[13px] font-sans font-bold hover:bg-black transition-all shadow-2xl w-fit"
          >
            Become a Member
          </button>
        </div>
        <div className="flex-1 relative min-h-[500px] lg:min-h-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512918766755-ee7b17104235?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Patio with striped umbrella" 
          />
        </div>
      </section>

      {/* "What makes an Outsite Space" Section */}
      <section className="bg-[#FAF9F6] py-32 px-6 md:px-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                <span className="material-symbols-outlined text-primary text-3xl font-light group-hover:scale-110 transition-transform">{f.icon}</span>
                <p className="text-[10px] md:text-[11px] font-condensed font-black uppercase tracking-widest text-primary/60 leading-tight h-8 flex items-center">{f.label}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-[350px] text-center lg:text-right">
            <span className="text-[11px] font-condensed font-black text-gray-400 tracking-[0.4em] uppercase block mb-4">THE DETAILS</span>
            <h2 className="text-5xl md:text-8xl font-serif italic text-primary leading-[1] tracking-tighter">What makes an Outsite Space</h2>
          </div>
        </div>
      </section>

      {/* "Explore Outsite Locations with Apartments" Section */}
      <section className="bg-white py-32 px-6 md:px-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto space-y-24">
          <div className="space-y-4">
            <h2 className="text-[44px] md:text-[80px] font-serif italic text-primary tracking-tight leading-none">Explore Outsite Locations with Apartments</h2>
            <p className="text-xl text-gray-500 font-sans font-light tracking-wide">A place to call your own. Perfect for couples, friends, or solo travellers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {apartmentProperties.map((prop) => (
              <div key={prop.id} className="group cursor-pointer flex flex-col" onClick={onPropertyClick}>
                <div className="relative aspect-[1.4/1] overflow-hidden rounded-sm mb-6 shadow-sm">
                  <img src={prop.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={prop.name} />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 text-[9px] font-condensed font-black uppercase tracking-widest rounded-sm shadow-md ${prop.type === 'SIGNATURE' ? 'bg-primary text-white' : 'bg-[#BCECE0] text-primary'}`}>
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[15px] font-condensed font-black text-primary uppercase tracking-widest leading-snug pr-4">{prop.city} - {prop.name}</h3>
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                       <span className="material-symbols-outlined text-[14px] text-primary FILL">star</span>
                       <span className="text-[13px] font-black text-primary">{prop.rating}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-sans font-bold uppercase tracking-widest">{prop.location}</p>
                  <div className="flex items-center gap-2 text-primary/40 pt-3">
                    <span className="material-symbols-outlined text-[16px]">{prop.category === 'Hybrid Coliving' ? 'apartment' : 'home'}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{prop.category}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="material-symbols-outlined text-[16px] text-gray-300">groups</span>
                    <span className="text-[11px] font-sans font-medium text-gray-500">Open to Outsite Members and Guests</span>
                  </div>
                  <p className="text-[14px] font-sans font-medium text-primary pt-4">From <span className="font-black">{prop.priceNightly}</span> nightly</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <button className="border border-black px-14 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all shadow-sm flex items-center gap-3">
              Show More <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        </div>
      </section>

      {/* Extended Stays Promo Section */}
      <section className="bg-[#FAF9F6] py-32 px-6 md:px-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-md text-center md:text-left space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif italic text-primary leading-[0.95] tracking-tighter">Save 35% on Extended Stays.</h2>
            <p className="text-lg text-gray-500 font-sans font-light leading-relaxed">
              Make yourself at home with long term discounts. Discounts applied at checkout.
            </p>
            <button className="bg-white border border-black px-12 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all shadow-sm">
              Book a Stay
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             {/* 15% Card */}
             <div className="w-[190px] h-[250px] bg-[#DDE4E6] border border-black/5 flex flex-col rounded-sm overflow-hidden shadow-sm group">
                <div className="flex-1 flex items-center justify-center relative p-4">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                      <div className="w-32 h-32 border border-black rounded-full transform -translate-x-6"></div>
                      <div className="w-32 h-32 border border-black rounded-full transform translate-x-6"></div>
                   </div>
                   <span className="text-3xl font-serif italic text-primary z-10 group-hover:scale-110 transition-transform">15% off</span>
                </div>
                <div className="bg-white/40 backdrop-blur-sm py-6 text-center border-t border-black/5">
                   <span className="text-[11px] font-condensed font-black text-primary/60 uppercase tracking-[0.2em]">7+ nights</span>
                </div>
             </div>
             {/* 30% Card */}
             <div className="w-[190px] h-[250px] bg-[#EAE7DD] border border-black/5 flex flex-col rounded-sm overflow-hidden shadow-sm group">
                <div className="flex-1 flex items-center justify-center relative p-4">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                      <div className="w-32 h-32 border border-black rounded-full transform -translate-x-6"></div>
                      <div className="w-32 h-32 border border-black rounded-full transform translate-x-6"></div>
                   </div>
                   <span className="text-3xl font-serif italic text-primary z-10 group-hover:scale-110 transition-transform">30% off</span>
                </div>
                <div className="bg-white/40 backdrop-blur-sm py-6 text-center border-t border-black/5">
                   <span className="text-[11px] font-condensed font-black text-primary/60 uppercase tracking-[0.2em]">30+ nights</span>
                </div>
             </div>
             {/* 35% Card */}
             <div className="w-[190px] h-[250px] bg-[#D1A65E]/30 border border-black/5 flex flex-col rounded-sm overflow-hidden shadow-sm group">
                <div className="flex-1 flex items-center justify-center relative p-4">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                      <div className="w-32 h-32 border border-black rounded-full transform -translate-x-6"></div>
                      <div className="w-32 h-32 border border-black rounded-full transform translate-x-6"></div>
                   </div>
                   <span className="text-3xl font-serif italic text-primary z-10 group-hover:scale-110 transition-transform">35% off</span>
                </div>
                <div className="bg-white/40 backdrop-blur-sm py-6 text-center border-t border-black/5">
                   <span className="text-[11px] font-condensed font-black text-primary/60 uppercase tracking-[0.2em]">60+ nights</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sustainable Travel Split Section */}
      <section className="flex flex-col lg:flex-row items-stretch bg-[#F2F1ED] border-b border-black/5">
        <div className="flex-1 p-16 md:p-24 lg:p-32 flex flex-col justify-center items-center text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[11px] font-condensed font-black text-primary/40 tracking-[0.4em] uppercase block">A SUSTAINABLE WAY TO</span>
            <h2 className="text-7xl md:text-[110px] font-serif italic text-primary leading-[0.85] tracking-tighter normal-case">travel</h2>
            <p className="text-[16px] md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-sm mx-auto">
              We're creating a more sustainable way to see the world - from the trees planted when you book, to the eco-friendly products in your kitchen.
            </p>
          </div>
          <button className="bg-transparent border border-black/20 px-12 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all shadow-sm">
            Our sustainability principles
          </button>
        </div>
        <div className="flex-1 relative min-h-[500px] lg:min-h-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Sustainable travel paradise" 
          />
          {/* Floating Help Badge from screenshot */}
          <div className="absolute bottom-8 right-8 z-10 hidden md:block">
            <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl">
              <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span> Help
            </button>
          </div>
        </div>
      </section>

      {/* Main Results Section */}
      <section className="pt-24 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-[90px] font-condensed font-black text-primary leading-tight tracking-tighter uppercase italic">
              Anywhere <span className="text-primary/20 font-sans text-2xl md:text-4xl font-medium ml-4 normal-case tracking-normal">({mainProperties.length + apartmentProperties.length} properties)</span>
            </h1>
          </div>
          <button className="flex items-center gap-3 bg-white border border-black/10 px-10 py-4 rounded-full hover:bg-gray-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] font-condensed pt-0.5">Filter Results</span>
          </button>
        </div>

        {!showMap ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {mainProperties.map((prop) => (
              <div key={prop.id} className="group cursor-pointer flex flex-col" onClick={onPropertyClick}>
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-8 shadow-sm">
                  <img src={prop.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={prop.name} />
                  <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1.5 text-[10px] font-condensed font-black uppercase tracking-widest rounded-sm shadow-md ${prop.type === 'SIGNATURE' ? 'bg-primary text-white' : 'bg-[#BCECE0] text-primary'}`}>
                      {prop.type}
                    </span>
                  </div>
                  {prop.discount && (
                    <div className="absolute top-6 right-6 bg-white px-3 py-1.5 rounded-sm shadow-md flex items-center gap-2">
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary leading-none">● {prop.discount}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[28px] md:text-3xl font-condensed font-black text-primary leading-tight uppercase tracking-tight group-hover:italic transition-all">
                        {prop.city} — {prop.name}
                      </h3>
                      <p className="text-[13px] text-gray-400 font-sans font-bold uppercase tracking-widest mt-1">{prop.location}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-black/5 mt-4">
                    <span className="text-lg font-sans font-light text-primary/60">
                      From <span className="font-black text-primary">{prop.priceNightly}</span>/night
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[calc(100vh-160px)] relative bg-[#E5E3DF] animate-in fade-in duration-700">
             <div className="absolute inset-0 grayscale opacity-30 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.17,41.38,2/1200x800?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwMHgyeG84dXYycHBoZ3oifQ.rJcP_RA_94y-uI7Y9yv44A')] bg-cover bg-center" />
             <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-condensed font-black text-4xl uppercase tracking-tighter">Map Interface View</div>
          </div>
        )}
      </section>

      {/* Launches Section Integration */}
      <LaunchesSection />

      {/* Floating Toggle */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[250]">
        <button 
          onClick={() => setShowMap(!showMap)}
          className="bg-black text-white px-12 py-4 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-2xl">
            {showMap ? 'format_list_bulleted' : 'map'}
          </span>
          <span className="font-condensed font-black text-sm uppercase tracking-[0.2em] pt-0.5">
            {showMap ? 'List View' : 'Map View'}
          </span>
        </button>
      </div>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default PlacesToStay;
