
import React from 'react';

const TripDetail: React.FC = () => {
  return (
    <div className="fade-in bg-[#F9F7F2] min-h-screen pt-[80px]">
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 md:px-24 max-w-[1400px] mx-auto text-center md:text-left">
        <h1 className="font-display text-5xl md:text-[8rem] text-primary mb-6 tracking-tighter leading-[0.85]">The Coastal Retreat</h1>
        <p className="text-xl md:text-3xl font-display italic text-gray-500 max-w-4xl mb-6 leading-relaxed">
          Go off the beaten path and connect with nature in the Algarve.
        </p>
        <p className="font-condensed font-black text-[18px] text-gray-400 uppercase tracking-ace-wide">Mar 29 → Apr 26, 2026</p>
      </section>

      {/* Visual Stories - Full Color */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto space-y-32 mb-40">
        {[
          {
            title: "Surf Culture",
            img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2000&auto=format&fit=crop",
            caption: "Sagres is a favorite with surfers - get your toes wet with a few lessons when you're here.",
            hasHelp: true
          },
          {
            title: "Local Trails",
            img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2000&auto=format&fit=crop",
            caption: "This destination is ideal for hikers, trail runners and nature lovers."
          },
          {
            title: "Coastal Feel",
            img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2000&auto=format&fit=crop",
            caption: "Just 5 minutes from the nearest beach and seafood fresh from the sea."
          },
          {
            title: "Time to Focus",
            img: "https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=2000&auto=format&fit=crop",
            caption: "Lock into work or a new project in an inspiring setting."
          }
        ].map((item, idx) => (
          <div key={idx} className="space-y-8">
            <h4 className="label-bold !text-xl tracking-ace-wide">{item.title}</h4>
            <div className="aspect-[16/9] overflow-hidden relative shadow-sm">
              <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              {item.hasHelp && (
                <button className="absolute top-6 right-6 bg-primary text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-xl">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span> Help
                </button>
              )}
            </div>
            <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl">
              {item.caption}
            </p>
          </div>
        ))}
      </section>

      {/* Trip Details */}
      <section className="py-32 px-6 md:px-24 bg-white border-y border-ace-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-display mb-12 tracking-tighter">Trip Details</h2>
          <p className="text-xl md:text-2xl font-display italic text-gray-400 leading-relaxed mb-20">
            Spend a month on Portugal’s wild western edge — a place where rugged cliffs, Atlantic swells, and golden sunsets set the rhythm for slow, intentional living. Outsite Sagres is your space to disconnect from noise, reconnect with nature, and get inspired with a creative community.
          </p>
          
          <h3 className="label-bold !text-xl mb-12 tracking-ace-wide">What is included</h3>
          <div className="space-y-10">
            {[
              { icon: 'bed', title: 'Accommodation', desc: 'Private room with en-suite or shared bathroom' },
              { icon: 'flight', title: 'Airport Transfers', desc: 'Airport transfers to/from Faro Airport are included.' },
              { icon: 'wifi', title: 'High-Speed WiFi', desc: 'Fast WiFi and coworking spaces on-site' },
              { icon: 'person_pin_circle', title: 'Local Community Manager', desc: 'Dedicated local community manager' },
              { icon: 'self_improvement', title: 'Weekly Yoga', desc: 'Weekly classes included in your Trip' },
              { icon: 'beach_access', title: 'Arrifana Sunset Trip', desc: 'Roadtrip Arrifana National Park and beaches, included in your Trip.' },
              { icon: 'restaurant', title: 'Welcome & Farewell Dinners', desc: 'Outsite-hosted dinners to meet and greet the crew' },
              { icon: 'set_meal', title: 'Seafood Lunch', desc: 'Enjoy a locally caught seafood lunch included in your Trip.' },
              { icon: 'map', title: 'Lagos Day Trip', desc: 'Explore the nearby town of Lagos (additional fee).' },
              { icon: 'surfing', title: 'Surf Lessons', desc: 'Lessons organized for an additional fee' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="material-symbols-outlined text-3xl text-gray-400 mt-1">{item.icon}</span>
                <div>
                  <h5 className="text-[16px] font-bold text-primary mb-1">{item.title}</h5>
                  <p className="text-[15px] text-gray-500 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-[14px] text-gray-400 italic">
            <span className="font-bold not-italic">Not included:</span> Some excursions are not included in the price but can be booked locally.
          </p>
        </div>
      </section>

      {/* Choose Your Room */}
      <section className="py-40 px-6 md:px-24 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-7xl md:text-9xl font-display mb-4 tracking-tighter">Choose Your Room</h2>
          <p className="text-xl md:text-2xl font-display italic text-gray-400">Your home for the month.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-40">
          {[
            {
              name: "Essential",
              desc: "A private room with a double bed and shared bathroom. Some essential rooms are ocean view.",
              price: "€1.800",
              img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000&auto=format&fit=crop"
            },
            {
              name: "Plus",
              desc: "A private queen or king with ocean or garden view.",
              price: "€2.100",
              img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2000&auto=format&fit=crop"
            },
            {
              name: "Signature",
              desc: "A private king room with ensuite bathroom, balcony and ocean views.",
              price: "€2.350",
              img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop",
              soldOut: true
            }
          ].map((room, i) => (
            <div key={i} className="space-y-10 group relative">
              <div className="aspect-[4/3] overflow-hidden relative shadow-lg">
                <img src={room.img} className="w-full h-full object-cover" alt={room.name} />
                {room.soldOut && (
                  <div className="absolute top-0 left-0 w-full bg-black/70 text-white text-center py-4 font-condensed font-black tracking-ace-ultra text-xs">SOLD OUT</div>
                )}
                <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                  <span className="material-symbols-outlined text-white text-4xl opacity-50">chevron_left</span>
                  <span className="material-symbols-outlined text-white text-4xl opacity-50">chevron_right</span>
                </div>
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
                   {[0,1,2,3,4].map(dot => <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-white' : 'bg-white/30'}`} />)}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="label-bold !text-2xl tracking-ace-wide">{room.name}</h4>
                <p className="text-lg text-gray-500 font-sans font-light leading-relaxed max-w-xl">{room.desc}</p>
                <p className="text-2xl font-sans font-black text-primary">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Paulo Card */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto bg-[#D1D8DB]/30 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 rounded-sm border border-ace-border">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shrink-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Paulo" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h4 className="label-bold !text-xl tracking-ace-wide">MEET PAULO <span className="opacity-40 font-bold ml-2">PT</span></h4>
            <h5 className="font-display italic text-2xl md:text-3xl tracking-tight text-primary">YOUR OUTSITE COMMUNITY MANAGER</h5>
            <div className="h-[1px] bg-gray-300 w-full" />
            <p className="text-[15px] text-gray-500 font-light">Community Managers are here to help during your stay.</p>
          </div>
        </div>
      </section>

      {/* Sagres Highlights */}
      <section className="py-40 px-6 md:px-24 bg-white border-y border-ace-border">
        <h2 className="text-6xl md:text-[8rem] font-display text-center mb-40 tracking-tighter">Sagres Highlights</h2>
        <div className="max-w-4xl mx-auto space-y-40">
           {[
             { title: "ROAD TRIPS", desc: "The Algarve is best discovered by car; think hole-in-the-wall restaurants, vast landscapes and vivid sunsets." },
             { title: "SURF & ROOFTOP YOGA", desc: "Break your routine with weekly yoga in our rooftop or diving into the ocean for some surf lessons." },
             { title: "RUNNERS PARADISE", desc: "Quiet, calm mornings and plenty of trails to explore near home." }
           ].map((item, i) => (
             <div key={i} className="space-y-6">
               <h4 className="label-bold !text-[18px] tracking-ace-ultra">{item.title}</h4>
               <p className="text-xl md:text-2xl text-gray-500 font-sans font-light leading-relaxed">
                 {item.desc}
               </p>
             </div>
           ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-48 px-6 md:px-24 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-display tracking-tighter italic">Ready to book? Get in touch</h2>
            <p className="text-xl md:text-2xl font-display italic text-gray-400">Need more info? Fill out the form below of schedule a call with us.</p>
            <button className="bg-black text-white px-10 py-4 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[13px] hover:scale-105 transition-transform">
              Schedule a call
            </button>
          </div>

          <form className="text-left space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Name*</label>
                <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 focus:ring-1 focus:ring-primary" />
              </div>
              <div className="space-y-3">
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Email*</label>
                <input type="email" className="w-full bg-[#F3F2EE] border-none py-5 px-6 focus:ring-1 focus:ring-primary" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Select Trip(s)*</label>
              <select className="w-full bg-[#F3F2EE] border-none py-5 px-6 appearance-none focus:ring-1 focus:ring-primary text-gray-400">
                <option>Select...</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Select Room Tier(s)*</label>
              <select className="w-full bg-[#F3F2EE] border-none py-5 px-6 appearance-none focus:ring-1 focus:ring-primary text-gray-400">
                <option>Select...</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Promo Code</label>
              <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 focus:ring-1 focus:ring-primary" />
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Where are you based?*</label>
              <input type="text" className="w-full bg-[#F3F2EE] border-none py-5 px-6 focus:ring-1 focus:ring-primary" />
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">What do you do for work, and what is your work schedule like?*</label>
              <textarea className="w-full bg-[#F3F2EE] border-none py-5 px-6 h-40 focus:ring-1 focus:ring-primary resize-none"></textarea>
            </div>

            <div className="space-y-8">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest block">How do you like to connect with new people when you travel?*</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Shared meals', 'Outdoor activities', 'Casual hangouts', 'Creative collaboration', 'Coworking'].map((opt) => (
                  <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                    <input type="checkbox" className="w-6 h-6 border-2 border-gray-200 text-primary focus:ring-0 rounded-sm" />
                    <span className="text-[15px] font-medium text-gray-500 group-hover:text-primary transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">What's your favorite way to contribute to a group or community?*</label>
              <textarea className="w-full bg-[#F3F2EE] border-none py-5 px-6 h-40 focus:ring-1 focus:ring-primary resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-primary text-white py-6 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[16px] hover:bg-black transition-colors shadow-2xl">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Final Branding Footer Area */}
      <section className="py-40 bg-primary text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 opacity-30">
          <h2 className="text-6xl md:text-[10rem] font-display tracking-tighter italic">LIVING DIFFERENTLY</h2>
          <div className="flex justify-center gap-16">
            <span className="material-symbols-outlined text-5xl">surfing</span>
            <span className="material-symbols-outlined text-5xl">landscape</span>
            <span className="material-symbols-outlined text-5xl">laptop_mac</span>
          </div>
        </div>
      </section>

      <div className="h-40 bg-primary"></div>
    </div>
  );
};

export default TripDetail;
