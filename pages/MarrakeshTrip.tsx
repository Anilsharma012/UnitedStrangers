
import React from 'react';

const MarrakeshTrip: React.FC = () => {
  return (
    <div className="fade-in bg-[#F9F7F2] min-h-screen pt-[80px]">
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 md:px-24 max-w-[1400px] mx-auto text-center md:text-left">
        <h1 className="font-display text-5xl md:text-[8rem] text-primary mb-6 tracking-tighter leading-[0.85]">Desert & Design</h1>
        <p className="text-xl md:text-3xl font-display italic text-gray-500 max-w-4xl mb-6 leading-relaxed">
          Desert energy meets design-led calm.
        </p>
        <p className="font-condensed font-black text-[18px] text-gray-400 uppercase tracking-ace-wide">Apr 26 → May 24, 2026</p>
      </section>

      {/* Visual Stories - Using Vibrant Marrakesh Images */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto space-y-32 mb-40">
        {[
          {
            title: "New Experiences",
            img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2000&auto=format&fit=crop",
            caption: "First time in Africa? Marrakesh is the perfect introduction.",
            hasHelp: true
          },
          {
            title: "Desert Exploration",
            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
            caption: "You'll spend your weekends exploring mountains and deserts outside of the city."
          },
          {
            title: "Moroccan Cuisine",
            img: "https://images.unsplash.com/photo-1512100356132-d3220389324a?q=80&w=2000&auto=format&fit=crop",
            caption: "Imagine hearty tagines, mint tea and delicate local sweets."
          },
          {
            title: "Artists Retreat",
            img: "https://images.unsplash.com/photo-1539115806315-e2343b44b8ee?q=80&w=2000&auto=format&fit=crop",
            caption: "See why Yves Saint Laurent and Pierre Bergé adored this destination as creatives."
          }
        ].map((item, idx) => (
          <div key={idx} className="space-y-8">
            <h4 className="label-bold !text-xl tracking-ace-wide">{item.title}</h4>
            <div className="aspect-[16/9] overflow-hidden relative shadow-sm rounded-sm">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt={item.title} />
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

      {/* Trip Details Section */}
      <section className="py-32 px-6 md:px-24 bg-white border-y border-ace-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-display mb-12 tracking-tighter">Trip Details</h2>
          <p className="text-xl md:text-2xl font-display italic text-gray-400 leading-relaxed mb-20">
            Spend four unforgettable weeks surrounded by color, craft, and creativity in Morocco’s most captivating city. Outsite Marrakesh is your base for deep work mornings, rooftop sunsets, and weekend adventures through the Atlas Mountains. Whether you’re joining for focus time or a full reset, this trip blends cultural immersion with Outsite’s signature community feel.
          </p>
          
          <h3 className="label-bold !text-xl mb-12 tracking-ace-wide">What is included</h3>
          <div className="space-y-10">
            {[
              { icon: 'flight', title: 'Airport Transfers', desc: 'Airport transfers to/from Outsite are included' },
              { icon: 'bed', title: 'Accommodation', desc: 'Room with private bathroom in Outsite Marrakesh' },
              { icon: 'wifi', title: 'High-Speed WiFi', desc: 'Fast WiFi and coworking on-site' },
              { icon: 'restaurant', title: 'Weekly Family Dinners', desc: 'Enjoy dinner with new friends in the riad each week' },
              { icon: 'palette', title: 'Art Workshop', desc: 'Enjoy a relaxing afternoon learning a new art method - included in your Trip.' },
              { icon: 'temple_buddhist', title: 'Medina Tour', desc: 'Get a feel for the Medina with our local guide' },
              { icon: 'person_pin_circle', title: 'Local Community Manager', desc: 'On-site local community manager' },
              { icon: 'directions_car', title: 'Agafay Desert Trip', desc: 'Quad bike or camel ride through the desert - available for an additional fee.' },
              { icon: 'spa', title: 'Hammam Treatments', desc: 'Relax in a local spa - available for an additional fee.' },
              { icon: 'explore', title: 'Excursions', desc: 'Curated activities each week (optional add-on)' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="material-symbols-outlined text-3xl text-gray-400 mt-1 shrink-0">{item.icon}</span>
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

      {/* Choose Your Room Section */}
      <section className="py-40 px-6 md:px-24 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-7xl md:text-9xl font-display mb-4 tracking-tighter">Choose Your Room</h2>
          <p className="text-xl md:text-2xl font-display italic text-gray-400">Your home for the month.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-40">
          {[
            {
              name: "Plus",
              desc: "Queen room with ensuite bathroom.",
              price: "€1.850",
              img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop"
            },
            {
              name: "Signature",
              desc: "A large private queen room with ensuite bathroom.",
              price: "€2.000",
              img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop"
            }
          ].map((room, i) => (
            <div key={i} className="space-y-10 group relative">
              <div className="aspect-[4/3] overflow-hidden relative shadow-lg bg-gray-200">
                <img src={room.img} className="w-full h-full object-cover" alt={room.name} />
                <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                  <span className="material-symbols-outlined text-white text-4xl opacity-50">chevron_left</span>
                  <span className="material-symbols-outlined text-white text-4xl opacity-50">chevron_right</span>
                </div>
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
                   {[0,1,2,3,4,5,6].map(dot => <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-white' : 'bg-white/30'}`} />)}
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

      {/* Community Manager Hassan */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto bg-[#D1D8DB]/30 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 rounded-sm border border-ace-border">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shrink-0">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hassan" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <h4 className="label-bold !text-xl tracking-ace-wide">MEET HASSAN <span className="opacity-40 font-bold ml-2">MA</span></h4>
            <h5 className="font-display italic text-2xl md:text-3xl tracking-tight text-primary uppercase">YOUR OUTSITE COMMUNITY MANAGER</h5>
            <div className="h-[1px] bg-gray-300 w-full" />
            <p className="text-[15px] text-gray-500 font-light leading-relaxed">
              Community Managers are here to help during your stay. Originally from Marrakesh, Hassan will happily share his insight to ensure you have a memorable stay.
            </p>
          </div>
        </div>
      </section>

      {/* Marrakesh Highlights */}
      <section className="py-40 px-6 md:px-24 bg-white border-y border-ace-border">
        <h2 className="text-6xl md:text-[8rem] font-display text-center mb-40 tracking-tighter">Marrakesh Highlights</h2>
        <div className="max-w-4xl mx-auto space-y-40">
           {[
             { title: "THE MEDINA", desc: "A month of touring the city through food, discovering the Medina and desert nights." },
             { title: "HAMMAM TREATMENTS", desc: "Discover the ritual of steam bathing, exfoliation and massage in a local spa." },
             { title: "AGAFAY DESERT DAY TRIP", desc: "Rent out an ATV (or hop on a camel) to see the golden dunes of the Agafay. Watch the sunset and enjoy a traditional Moroccan dinner." },
             { title: "STARGAZING IN THE ATLAS MOUNTAINS", desc: "Trade city lights for starlight on a trip to the Atlas Mountains; hike, dine then watch the stars spread through the sky." }
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

      {/* Booking Form - Fixed Fonts to match original beige design */}
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
                <option>Desert & Design - Marrakesh</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Select Room Tier(s)*</label>
              <select className="w-full bg-[#F3F2EE] border-none py-5 px-6 appearance-none focus:ring-1 focus:ring-primary text-gray-400">
                <option>Select...</option>
                <option>Plus</option>
                <option>Signature</option>
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

export default MarrakeshTrip;
