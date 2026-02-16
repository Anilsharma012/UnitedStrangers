
import React from 'react';

interface CoworkCafeProps {
  onViewDetails?: () => void;
}

const CoworkCafe: React.FC<CoworkCafeProps> = ({ onViewDetails }) => {
  const events = [
    { 
      day: '20', 
      month: 'FEB', 
      recurrence: 'FRIDAYS 7-10PM', 
      title: 'Social Hour Lisboa', 
      location: 'Lisbon - Cais do Sodre', 
      start: '06:30 PM', 
      img: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1200' 
    },
    { 
      day: '27', 
      month: 'FEB', 
      recurrence: 'FRIDAYS 7-10PM', 
      title: 'Social Hour Lisboa', 
      location: 'Lisbon - Cais do Sodre', 
      start: '06:30 PM', 
      img: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1200' 
    },
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Cafe Hero" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[11px] font-condensed font-black tracking-[0.3em] uppercase mb-4 block">DESIGNED FOR REMOTE WORKERS</span>
          <h1 className="text-6xl md:text-[5.5rem] font-serif italic mb-8 normal-case leading-none tracking-tighter">Outsite Cowork Cafe</h1>
          <div className="h-[1px] w-24 bg-white/60 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Spaces designed for locals and travelers to caffeinate, cowork and collaborate - together.
          </p>
        </div>
      </section>

      {/* Our Spaces */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto text-center space-y-16">
          <h2 className="text-6xl md:text-7xl font-serif italic text-primary tracking-tighter">Our Spaces</h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                alt="Cafe Interior" 
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-condensed font-black tracking-widest uppercase text-primary">CAIS DO SODRE</h3>
              <p className="text-lg text-gray-500 font-sans font-light max-w-2xl mx-auto leading-relaxed">
                A central workspace in Lisbon with plenty of desks, fast Wifi and coffee and food menu available. Daily, weekly, monthly and flexi passes are available to purchase.
              </p>
              <button 
                onClick={onViewDetails}
                className="bg-black text-white px-10 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] hover:bg-primary transition-all shadow-lg active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Events Section */}
      <section className="py-40 px-6 md:px-24 bg-[#EAE8E4]/30 border-y border-black/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div>
               <span className="text-[11px] font-condensed font-black text-primary/40 tracking-[0.4em] uppercase mb-4 block">HAPPENING SOON</span>
               <h2 className="text-6xl md:text-[6rem] font-serif italic text-primary leading-none tracking-tighter text-black">Events</h2>
             </div>
             <p className="text-lg text-gray-400 font-sans font-light max-w-sm mb-2">Join our community for weekly mixers, workshops, and networking sessions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event, i) => (
              <div key={i} className="bg-[#EAE8E4] rounded-sm overflow-hidden flex flex-col group shadow-2xl">
                <div className="relative aspect-[1.1/1] overflow-hidden">
                   <img src={event.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt={event.title} />
                   <div className="absolute top-0 left-0 bg-black text-white p-6 min-w-[110px] text-center">
                      <div className="text-[11px] font-sans font-black uppercase tracking-[0.2em] border-b border-white/10 pb-2 mb-2">{event.month}</div>
                      <div className="text-5xl font-condensed font-black leading-none">{event.day}</div>
                   </div>
                   <div className="absolute left-0 bottom-12 px-6">
                      <div className="text-[10px] font-sans font-black text-white uppercase tracking-[0.1em] [writing-mode:vertical-lr] rotate-180 opacity-80">
                        {event.recurrence}
                      </div>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                      <h3 className="text-white font-condensed font-black text-6xl md:text-7xl leading-[0.8] uppercase tracking-tighter text-center opacity-90 group-hover:scale-110 transition-transform duration-[3s]">
                        SOCIAL<br/>HOUR<br/>
                        <span className="text-[#4CAF50] group-hover:text-white transition-colors">LISBOA</span>
                      </h3>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white/40 font-sans font-bold text-[8px] uppercase tracking-[0.4em] [writing-mode:vertical-lr]">
                        MUSIC • WINE • PEOPLE
                      </div>
                   </div>
                </div>

                <div className="p-10 md:p-14 flex-1 flex flex-col space-y-10">
                   <div className="space-y-6">
                      <span className="text-[11px] font-condensed font-black text-primary/30 uppercase tracking-[0.3em]">OPEN TO THE PUBLIC</span>
                      <h4 className="text-[38px] md:text-[46px] font-serif italic text-primary leading-none tracking-tight text-black">{event.title}</h4>
                      <div className="flex flex-wrap gap-3">
                        <div className="bg-black/5 rounded-full px-5 py-2.5 flex items-center gap-3 text-black">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                          <span className="text-[13px] font-sans font-bold tracking-tight">{event.start}</span>
                        </div>
                        <div className="bg-black/5 rounded-full px-5 py-2.5 flex items-center gap-3 text-black">
                          <span className="material-symbols-outlined text-[18px]">location_on</span>
                          <span className="text-[13px] font-sans font-bold tracking-tight">{event.location}</span>
                        </div>
                      </div>
                   </div>
                   <button className="w-full py-5 border border-black/10 rounded-full text-[12px] font-condensed font-black uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white hover:border-black transition-all mt-auto shadow-sm active:scale-[0.98]">
                      Buy Ticket
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-48 px-6 md:px-24 bg-white border-t border-black/5">
        <div className="max-w-xl mx-auto space-y-12 text-center">
          <div className="space-y-6">
            <span className="text-[11px] font-condensed font-black text-gray-400 tracking-[0.4em] uppercase">WORK REMOTELY?</span>
            <h2 className="text-5xl md:text-8xl font-serif italic leading-none tracking-tighter text-primary">Stay in the loop.</h2>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed max-w-sm mx-auto">
              Sign up to receive the latest updates on new location openings, community events, and member-only deals.
            </p>
          </div>
          <form className="space-y-6 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
             <input type="email" placeholder="Enter your email" className="w-full bg-[#FAF9F6] border border-black/5 py-5 px-8 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-primary placeholder:text-gray-300" />
             <button className="w-full bg-black text-white px-12 py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] hover:bg-primary transition-all shadow-2xl active:scale-95">
                Sign me up
             </button>
          </form>
        </div>
      </section>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default CoworkCafe;
