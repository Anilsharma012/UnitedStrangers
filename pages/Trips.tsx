
import React, { useState, useRef } from 'react';
import WaitlistModal from '../components/WaitlistModal';

interface TripsProps {
  onTripDetailClick?: (location: string) => void;
  onStoryClick?: () => void;
}

const Trips: React.FC<TripsProps> = ({ onTripDetailClick, onStoryClick }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  // Refs for navigation
  const calendarRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const tripCalendar = [
    {
      id: 1,
      title: "THE COASTAL RETREAT",
      location: "SAGRES",
      desc: "Go off the beaten path and connect with nature in the Algarve.",
      dates: "Mar 29 → Apr 26, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 2,
      title: "DESERT & DESIGN",
      location: "MARRAKESH",
      desc: "Desert energy meets design-led calm.",
      dates: "Apr 26 → May 24, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 3,
      title: "SAN JUAN",
      location: "SAN JUAN",
      desc: "Sun, salsa, surf, soul. Explore the colorful streets of the oldest city in the US.",
      dates: "May 31 → Jun 14, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    },
    {
      id: 4,
      title: "SURF CAMP",
      location: "AGUADILLA",
      desc: "Surf. Sun. Slow mornings by the sea. The ultimate tropical productivity boost.",
      dates: "Jun 14 → Jun 28, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    }
  ];

  const features = [
    {
      title: "TRAVEL TOGETHER",
      desc: "Join the same crew for four weeks. Work, live, and explore together.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600"
    },
    {
      title: "CURATED LOCAL ACTIVITIES",
      desc: "Downtime sorted - local experiences, insider tips, and recommendations.",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600"
    },
    {
      title: "ROUTINE REIMAGINED",
      desc: "Keep your routine, change your view. Bring your job and explore the world.",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600"
    },
    {
      title: "WORK FROM ANYWHERE",
      desc: "Every Trip includes fast WIFI, work-ready spaces, and focus time built in.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600"
    }
  ];

  const faqs = [
    "Do I need to have a remote job to join?",
    "How reliable is the WiFi?",
    "Do I have to be a Member to join a Trip?",
    "Who's going?",
    "What's included?",
    "What's not included?",
    "Can I pick my room?",
    "Do I need travel insurance?"
  ];

  const handleButtonClick = (trip: any) => {
    if (trip.buttonText === "Join waitlist") {
      setIsWaitlistOpen(true);
    } else {
      onTripDetailClick?.(trip.location);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-surfing-the-waves-5627/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-white editorial-heading mb-6 leading-none !text-[12vw] md:!text-[9rem]">United Strangers Trips</h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl opacity-90 leading-relaxed font-display italic">
            Curated one-month journeys for remote professionals who work and live - anywhere.
          </p>
        </div>
      </section>

      {/* What are United Strangers Trips? */}
      <section className="py-24 px-6 md:px-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 tracking-tight normal-case">What are United Strangers Trips?</h2>
            <p className="text-[15px] md:text-lg text-gray-500 font-sans font-light max-w-2xl">
              United Strangers Trips are curated one-month experiences designed for people who want to explore the world - without pressing pause on work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-sm bg-gray-200">
                  <img src={f.img} className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" alt={f.title} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[12px] font-condensed font-black text-primary uppercase tracking-widest leading-tight">{f.title}</h4>
                  <p className="text-[13px] text-gray-500 font-sans font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Block (Lane) */}
      <section className="py-24 bg-[#FAF9F6] flex flex-col items-center">
         <div className="max-w-4xl px-6">
            <div className="bg-white border border-gray-100 p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center shadow-xl relative z-10">
               <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden bg-gray-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lane" />
               </div>
               <div className="space-y-6 text-center md:text-left">
                  <p className="text-gray-600 text-lg md:text-xl font-serif italic leading-relaxed">
                    "I booked a month in Lisbon with United Strangers because I was tired of being alone — and somehow found the opposite of loneliness. I went from working in silence to sharing dinners, boat rides, and spontaneous beach days with people from all over the world. United Strangers didn't just give me a place to stay — it reminded me how good it feels to make community wherever you are."
                  </p>
                  <div>
                    <h5 className="text-[14px] font-condensed font-black text-primary uppercase tracking-widest">LANE</h5>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">Head of Content, Zapier</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FULL WIDTH GROUP PHOTO */}
      <section className="w-full h-[60vh] md:h-[80vh] overflow-hidden -mt-32 pb-24 relative">
         <img 
          src="https://images.unsplash.com/photo-1539115806315-e2343b44b8ee?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover brightness-95" 
          alt="Group on beach" 
         />
      </section>

      {/* 2026 Trips Calendar */}
      <section ref={calendarRef} className="py-32 px-6 md:px-24 bg-white border-t border-gray-100 scroll-mt-24">
        <h2 className="text-6xl md:text-8xl font-display mb-24 tracking-tighter italic text-black">2026 Trips Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 max-w-[1400px] mx-auto">
          {tripCalendar.map((trip) => (
            <div key={trip.id} className="group cursor-pointer" onClick={() => handleButtonClick(trip)}>
              <div className="aspect-[1.4/1] overflow-hidden mb-8 relative bg-gray-200 shadow-lg rounded-sm">
                <img src={trip.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={trip.title}/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-white font-condensed font-black text-7xl md:text-9xl tracking-tighter opacity-80 group-hover:opacity-100 transition-all drop-shadow-2xl">{trip.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="label-bold !text-xl tracking-widest text-black">{trip.title}</h3>
                <p className="text-gray-500 font-sans font-light text-[15px] leading-relaxed max-w-lg">{trip.desc}</p>
                <div className="flex flex-col text-[14px] font-condensed font-black text-gray-400">
                  <span>{trip.dates}</span>
                  <span>{trip.nights}</span>
                </div>
                <div className="pt-4">
                  <button className={`w-full py-4 font-condensed font-black uppercase tracking-[0.2em] text-[11px] transition-all rounded-full ${trip.buttonType === 'solid' ? 'bg-primary text-white hover:bg-black' : 'border-2 border-gray-100 text-black hover:bg-gray-50'}`}>{trip.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the people... (Jakob) */}
      <section className="py-40 px-6 md:px-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-[5.5rem] font-serif italic text-primary leading-none tracking-tight normal-case">Meet the people who made the world their office.</h2>
        </div>

        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
           <div className="w-full md:w-[45%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Jakob surfing" 
              />
           </div>
           <div className="w-full md:w-[55%] space-y-10">
              <div className="space-y-2">
                 <h4 className="text-[18px] font-condensed font-black text-primary uppercase tracking-widest">JAKOB</h4>
                 <p className="text-[12px] text-gray-400 font-sans font-bold uppercase tracking-widest">Quantitative Trader from London</p>
              </div>
              <div className="h-px bg-black/10 w-full" />
              <div className="space-y-8">
                 <h3 className="text-3xl md:text-5xl font-serif italic text-primary leading-tight lowercase">
                   "I started working remotely in 2017 - the work I do can be done anywhere"
                 </h3>
                 <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                   I started working remotely in 2017 when I decided to escape the London corporate life that was slowly draining my soul. I realized the kind of work I do can be done from anywhere with an internet connection. Initially, I relocated to Bali and later Australia, but over time I've returned closer to Europe and developed a bit of a migration pattern approach to nomading.
                 </p>
                 <button onClick={onStoryClick} className="bg-white border border-black px-10 py-3.5 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] text-black hover:bg-black hover:text-white transition-all shadow-sm">
                   Read full story
                 </button>
              </div>
              
              <div className="flex items-center gap-6 pt-12">
                 <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-all text-black">
                   <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                 </button>
                 <span className="text-[12px] font-condensed font-black text-gray-300">01 / 03</span>
                 <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-all text-black">
                   <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* How To Book */}
      <section className="py-40 px-6 md:px-24 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-[5.5rem] font-serif italic text-primary mb-24 leading-none tracking-tight normal-case">How To Book</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            <div className="py-12 md:py-0 md:px-12 space-y-8 first:pl-0">
               <span className="material-symbols-outlined text-4xl text-primary font-light">public</span>
               <div className="space-y-4">
                  <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">STEP 1</h4>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                    Check out our Trips and fill out the form - we'll be in touch with more details!
                  </p>
               </div>
            </div>
            <div className="py-12 md:py-0 md:px-12 space-y-8">
               <span className="material-symbols-outlined text-4xl text-primary font-light">calendar_today</span>
               <div className="space-y-4">
                  <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">STEP 2</h4>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                    Schedule a call with our Head of Community, and secure your place on the trip.
                  </p>
               </div>
            </div>
            <div className="py-12 md:py-0 md:px-12 space-y-8 last:pr-0">
               <span className="material-symbols-outlined text-4xl text-primary font-light">flight_takeoff</span>
               <div className="space-y-4">
                  <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">STEP 3</h4>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">
                    That's it - book your flights!
                  </p>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-24">
             <button 
                onClick={() => scrollToSection(calendarRef)}
                className="bg-black text-white px-12 py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] hover:bg-zinc-800 transition-all shadow-xl active:scale-95"
             >
                View Trips
             </button>
             <button 
                onClick={() => scrollToSection(formRef)}
                className="bg-white border border-black px-12 py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] text-black hover:bg-black hover:text-white transition-all active:scale-95"
             >
                Go to Form
             </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-24 px-6 md:px-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="group border-b border-black/10 py-5 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-all px-4">
              <span className="text-[15px] md:text-[17px] font-sans font-medium text-primary/80">{faq}</span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">add_circle</span>
            </div>
          ))}
          <div className="pt-12 text-center">
            <button className="bg-black text-white px-10 py-3 rounded-full font-condensed font-black uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all shadow-lg">Show more</button>
          </div>
        </div>
      </section>

      {/* Get in Touch Form */}
      <section ref={formRef} className="py-32 px-6 md:px-24 bg-[#FAF9F6] scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-[6rem] font-serif italic text-primary leading-none tracking-tighter normal-case">Get in Touch</h2>
            <p className="text-lg text-gray-500 font-sans font-light max-w-xl mx-auto">
              Need more info? Fill out the form below or schedule a call with us.
            </p>
            <button className="bg-black text-white px-10 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-xl">Schedule a Call</button>
          </div>

          <form className="text-left space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Name*</label>
                <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm focus:ring-1 focus:ring-primary text-primary" placeholder="First Last" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Email*</label>
                <input type="email" className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm focus:ring-1 focus:ring-primary text-primary" placeholder="name@email.com" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Select Trip(s)*</label>
              <select className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm appearance-none focus:ring-1 focus:ring-primary text-primary/60 font-sans">
                <option>Select...</option>
                <option>THE COASTAL RETREAT - SAGRES</option>
                <option>DESERT & DESIGN - MARRAKESH</option>
                <option>SAN JUAN - PUERTO RICO</option>
                <option>SURF CAMP - AGUADILLA</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Select Room Tier(s)*</label>
              <select className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm appearance-none focus:ring-1 focus:ring-primary text-primary/60 font-sans">
                <option>Select...</option>
                <option>Essential</option>
                <option>Plus</option>
                <option>Signature</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Promo Code</label>
              <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm focus:ring-1 focus:ring-primary text-primary" />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">Where are you based?*</label>
              <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm focus:ring-1 focus:ring-primary text-primary" placeholder="City, Country" />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">What do you do for work, and what is your work schedule like?*</label>
              <textarea className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm h-40 focus:ring-1 focus:ring-primary resize-none text-primary font-sans"></textarea>
            </div>

            <div className="space-y-10">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest block">How do you like to connect with new people when you travel?*</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {['Shared meals', 'Outdoor activities', 'Casual hangouts', 'Creative collaboration', 'Coworking'].map((opt) => (
                  <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 border-2 border-gray-200 text-primary focus:ring-0 rounded-sm" />
                    <span className="text-[14px] font-sans font-medium text-gray-500 group-hover:text-primary transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-condensed font-black text-gray-400 uppercase tracking-widest">What's your favorite way to contribute to a group or community?*</label>
              <textarea className="w-full bg-[#F3F2EE] border-none py-5 px-6 rounded-sm h-40 focus:ring-1 focus:ring-primary resize-none text-primary font-sans"></textarea>
            </div>

            <button type="button" className="w-full bg-primary text-white py-6 rounded-full font-condensed font-black uppercase tracking-widest text-[16px] hover:bg-black transition-all shadow-2xl active:scale-[0.98]">
              Send
            </button>
          </form>
        </div>
      </section>

      <div className="h-48 bg-[#FAF9F6]"></div>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default Trips;
