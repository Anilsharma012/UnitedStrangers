
import React, { useRef } from 'react';

interface DealDetailProps {
  onBookNowClick?: () => void;
}

const DealDetail: React.FC<DealDetailProps> = ({ onBookNowClick }) => {
  const bookingGridRef = useRef<HTMLElement>(null);

  const scrollToBooking = () => {
    if (bookingGridRef.current) {
      bookingGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Editorial Header Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Deal Banner" 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[11px] font-condensed font-black text-white uppercase tracking-[0.3em] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-sm mb-6 inline-block">10% OFF</span>
          <h1 className="text-5xl md:text-[6.5rem] font-display text-white leading-[0.9] tracking-tighter mb-8 italic">
            Last Minute Deals • February 2026
          </h1>
          <div className="h-[2px] w-24 bg-white/60 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-white font-sans font-medium uppercase tracking-widest">
            10% Off • February Last Minute Deals
          </p>
        </div>
      </section>

      {/* Content Section: Detailed Specs and Image */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-24 py-24 flex flex-col lg:flex-row gap-20">
        <div className="flex-[1.2] space-y-12">
          {/* Promo Terms */}
          <div className="space-y-4">
             <div className="flex gap-4">
                <span className="font-sans font-medium text-gray-500 min-w-[140px]">Promo code :</span>
                <span className="font-sans font-bold text-primary">LMFEB26</span>
             </div>
             <div className="flex gap-4">
                <span className="font-sans font-medium text-gray-500 min-w-[140px]">Book by:</span>
                <span className="font-sans font-bold text-primary">Feb 20, 2026 midnight PST</span>
             </div>
             <div className="flex gap-4">
                <span className="font-sans font-medium text-gray-500 min-w-[140px]">Stay dates:</span>
                <span className="font-sans font-bold text-primary">Feb 01, 2026 - Feb 28, 2026</span>
             </div>
             <div className="flex gap-4">
                <span className="font-sans font-medium text-gray-500 min-w-[140px]">Min stay:</span>
                <span className="font-sans font-bold text-primary">7 days</span>
             </div>
             <div className="flex gap-4">
                <span className="font-sans font-medium text-gray-500 min-w-[140px]">Cancellation policy:</span>
                <span className="font-sans font-bold text-primary">Non-Refundable</span>
             </div>
          </div>

          {/* Valid Properties List */}
          <div className="space-y-6">
            <h3 className="text-[14px] font-sans font-medium text-gray-500 uppercase tracking-widest">Valid on the following properties:</h3>
            <ul className="space-y-4 list-disc pl-5 text-[15px] font-sans font-medium text-primary/80 leading-relaxed">
              <li>Ibiza - Es Canar : Double Room Ensuite with Balcony and Sea View, Large Double Room Ensuite with Terrace and Sea View, Master Room with Terrace and Sea View, Double Room Ensuite, Double Room Ensuite with Sea View</li>
              <li>Marrakesh : Queen Room Ensuite</li>
              <li>Cascais - Guincho : Queen Room with Shared Bathroom and Balcony, Queen Room with Private Bathroom, Large Queen Room with Private Bathroom, Queen Room with Shared Bathroom</li>
              <li>New York - Chelsea : Double Room with Shared Bathroom, Single Room with Shared Bathroom</li>
              <li>Bali - Pererenan : Duplex Apartment, King Room Ensuite, King Room Ensuite by the River, Master Room, Mezzanine Room with Private Bathroom, Premium Corner Room Ensuite, Premium King Room</li>
              <li>Mexico City - Roma Sur : Studio, Small Apartment, Double Room Ensuite, Medium Apartment, Double Room with Private External Bathroom</li>
              <li>Medellín - Manila : Private Queen Interior with Private Bathroom, Private Queen with Private Bathroom</li>
              <li>New York - Manhattan Midtown : Small Double Room with Shared Bathroom, Plaza, King Room Ensuite, Empire</li>
            </ul>
          </div>

          <button 
            onClick={scrollToBooking}
            className="bg-black text-white px-12 py-5 rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg"
          >
            Get deal
          </button>
        </div>

        {/* Feature Image Area */}
        <div className="flex-1">
           <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Laughing woman" 
              />
           </div>
        </div>
      </section>

      {/* Grid: Time to book your stay */}
      <section ref={bookingGridRef} className="py-24 px-6 md:px-24 border-t border-gray-100 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-16 tracking-tight italic">Time to book your stay</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Card 1: Ibiza */}
           <div className="space-y-6 flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm cursor-pointer" onClick={onBookNowClick}>
                 <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ibiza" />
              </div>
              <div className="flex-1 space-y-4">
                 <div>
                    <h3 className="text-[13px] font-condensed font-black text-primary uppercase tracking-[0.15em]">IBIZA - ES CANAR</h3>
                    <p className="text-[14px] text-gray-500 font-sans font-medium uppercase tracking-widest">Spain</p>
                 </div>
                 <p className="text-[15px] text-gray-400 font-sans font-light leading-relaxed">Art Deco Beach House • Relaxed Balearic Vibes</p>
                 <div className="flex items-center gap-2 text-primary/40">
                    <span className="material-symbols-outlined text-[18px]">apartment</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Hybrid Coliving</span>
                 </div>
              </div>
              <button onClick={onBookNowClick} className="w-full py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all">
                Book now
              </button>
           </div>

           {/* Card 2: Marrakesh */}
           <div className="space-y-6 flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm cursor-pointer" onClick={onBookNowClick}>
                 <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Marrakesh" />
              </div>
              <div className="flex-1 space-y-4">
                 <div>
                    <h3 className="text-[13px] font-condensed font-black text-primary uppercase tracking-[0.15em]">MARRAKESH</h3>
                    <p className="text-[14px] text-gray-500 font-sans font-medium uppercase tracking-widest">Morocco</p>
                 </div>
                 <p className="text-[15px] text-gray-400 font-sans font-light leading-relaxed">Traditional Tiled Riad • Heart of the Red City</p>
                 <div className="flex items-center gap-2 text-primary/40">
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Coliving</span>
                 </div>
              </div>
              <button onClick={onBookNowClick} className="w-full py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all">
                Book now
              </button>
           </div>

           {/* Card 3: Cascais */}
           <div className="space-y-6 flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm cursor-pointer" onClick={onBookNowClick}>
                 <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cascais" />
              </div>
              <div className="flex-1 space-y-4">
                 <div>
                    <h3 className="text-[13px] font-condensed font-black text-primary uppercase tracking-[0.15em]">CASCAIS - GUINCHO</h3>
                    <p className="text-[14px] text-gray-500 font-sans font-medium uppercase tracking-widest">Portugal</p>
                 </div>
                 <p className="text-[15px] text-gray-400 font-sans font-light leading-relaxed">Lush Coastal Retreat • Local Surf Spot</p>
                 <div className="flex items-center gap-2 text-primary/40">
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Coliving</span>
                 </div>
              </div>
              <button onClick={onBookNowClick} className="w-full py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all">
                Book now
              </button>
           </div>

           {/* Card 4: New York */}
           <div className="space-y-6 flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm cursor-pointer" onClick={onBookNowClick}>
                 <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="New York" />
              </div>
              <div className="flex-1 space-y-4">
                 <div>
                    <h3 className="text-[13px] font-condensed font-black text-primary uppercase tracking-[0.15em]">NEW YORK - CHELSEA</h3>
                    <p className="text-[14px] text-gray-500 font-sans font-medium uppercase tracking-widest">United States</p>
                 </div>
                 <p className="text-[15px] text-gray-400 font-sans font-light leading-relaxed">Charming Brownstone • Manhattan Art Hub</p>
                 <div className="flex items-center gap-2 text-primary/40">
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">Coliving</span>
                 </div>
              </div>
              <button onClick={onBookNowClick} className="w-full py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all">
                Book now
              </button>
           </div>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
};

export default DealDetail;
