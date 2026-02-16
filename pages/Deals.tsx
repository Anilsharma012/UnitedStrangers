
import React from 'react';

interface DealsProps {
  onBecomeMemberClick: () => void;
  onViewDealClick?: () => void;
  onBookAStayClick?: () => void;
}

const Deals: React.FC<DealsProps> = ({ onBecomeMemberClick, onViewDealClick, onBookAStayClick }) => {
  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen pt-[70px] md:pt-[95px]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row border-b border-gray-100 bg-white">
        <div className="flex-[1.2] bg-[#FAF9F6] p-8 md:p-24 flex flex-col justify-center border-r border-gray-100">
          <div className="max-w-md">
            <p className="font-condensed font-black text-[10px] md:text-[12px] tracking-[0.2em] text-primary/40 uppercase mb-4">TRAVEL MORE WITH</p>
            <h1 className="text-5xl md:text-[5.5rem] font-display text-primary leading-[0.9] tracking-tighter mb-8 italic">United Strangers deals</h1>
            <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed mb-12 text-black">
              Find Last Minute and Long-Term Deals for up to 40% Off Outsite Locations. Deals are updated monthly, and are only available to Outsite Members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBecomeMemberClick}
                className="px-12 py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg"
              >
                Become a member
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[300px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero background" 
          />
        </div>
      </section>

      {/* Our Deals Section */}
      <section className="py-16 md:py-24 px-6 md:px-24 bg-[#FAF9F6] flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic mb-4 normal-case tracking-normal text-black">Our Deals</h2>
          <p className="text-[14px] text-gray-500 font-sans font-light">Exclusive offers for Outsite Members, updated monthly.</p>
        </div>

        <div className="max-w-[800px] w-full group cursor-pointer" onClick={onViewDealClick}>
          {/* Main Card */}
          <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-sm bg-gray-100 shadow-sm mb-8 md:mb-10">
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Featured Deal" 
            />
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-[#BCECE0] px-3 py-1.5 flex items-center gap-1.5 rounded-sm shadow-md">
               <div className="w-1.5 h-1.5 rounded-full bg-primary" />
               <span className="text-[10px] font-condensed font-black uppercase tracking-widest text-primary leading-none">10% OFF</span>
            </div>
          </div>

          <div className="text-left space-y-4 px-2">
            <div className="space-y-1">
              <h3 className="text-[13px] font-condensed font-black text-primary uppercase tracking-[0.15em] leading-tight text-black">LAST MINUTE DEALS - FEBRUARY 2026</h3>
              <p className="text-[14px] font-sans text-gray-500 font-medium">10% Off • February Last Minute Deals</p>
            </div>
            <p className="text-[12px] text-gray-400 font-sans italic font-light">Book by Feb 20, 2026</p>
            
            <div className="pt-6">
              <button 
                className="w-full py-4 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all"
              >
                View deal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stay in the Loop Section */}
      <section className="py-24 md:py-40 px-6 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <span className="text-[10px] font-condensed font-black text-gray-400 tracking-[0.3em] uppercase">WANT TO LEARN MORE?</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary italic leading-none lowercase tracking-tighter text-black">Stay in the loop</h2>
            <p className="text-[14px] text-gray-500 font-sans font-light tracking-tight">Stay updated with our latest launches and deals</p>
          </div>

          <form className="w-full max-w-[400px] space-y-8">
            <div className="space-y-2">
              <label className="text-[12px] font-sans font-medium text-black">First Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F9F7F2] border border-gray-300 py-3.5 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm shadow-sm text-black" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-sans font-medium text-black">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#F9F7F2] border border-gray-300 py-3.5 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm shadow-sm text-black" 
              />
            </div>
            <div className="pt-4">
              <button 
                type="button" 
                className="w-full py-4 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all shadow-md"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* JOIN US SECTION - SPLIT CTA */}
      <section className="bg-[#FAF9F6] border-t border-black/5">
        <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px] items-stretch">
          <div className="flex-1 relative overflow-hidden min-h-[350px] md:min-h-0">
             <img 
               src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover" 
               alt="Aerial view of pool" 
             />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-8 md:p-24 bg-[#EAE8E4]">
             <div className="max-w-md space-y-6 md:space-y-8">
                <h4 className="text-xl md:text-3xl font-serif text-primary mb-2 italic">The world is your office.</h4>
                <h2 className="text-6xl md:text-[6.5rem] font-serif text-primary leading-none tracking-tight">Join us.</h2>
                <p className="text-[15px] md:text-lg text-gray-500 font-sans font-light leading-relaxed mb-8 md:mb-12">
                   Get access to a global network of work-friendly coliving spaces equipped with everything you need to be comfortable and productive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8 w-full sm:w-auto">
                   <button 
                     onClick={onBookAStayClick}
                     className="w-full sm:w-auto px-12 py-4 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all"
                   >
                     Book a Stay
                   </button>
                   <button 
                     onClick={onBecomeMemberClick}
                     className="w-full sm:w-auto px-12 py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl"
                   >
                     Become a Member
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="h-10 md:h-20 bg-white"></div>
    </div>
  );
};

export default Deals;
