
import React from 'react';

interface BecomeAMemberProps {
  onApplyClick: () => void;
}

const BecomeAMember: React.FC<BecomeAMemberProps> = ({ onApplyClick }) => {
  const perks = [
    { icon: 'lock', text: 'ACCESS MEMBERS ONLY LOCATIONS' },
    { icon: 'star_outline', text: '1 WEEK FREE IN NEW DESTINATIONS' },
    { icon: 'bolt', text: '50% OFF IN FLASH SALES' },
    { icon: 'account_balance_wallet', text: 'EARN CREDITS WITH EVERY STAY' },
    { icon: 'flight', text: '40% OFF EXTENDED STAYS' },
    { icon: 'calendar_today', text: 'NEW MEMBER MIXER EVERY MONTH' },
    { icon: 'work_outline', text: 'JOB & SUBLETS BOARD' },
    { icon: 'card_giftcard', text: 'EXCLUSIVE LIFESTYLE PERKS' }
  ];

  const profiles = [
    {
      name: 'ADRIAN WEGS',
      desc: 'Adrian is an entrepreneur and long-term nomad from Switzerland.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600'
    },
    {
      name: 'KIMBERLY DEFORS',
      desc: 'Kimberly Defors, a digital nomad specializing in branding and managing skincare and wellness projects.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600'
    },
    {
      name: 'EBONY RICE',
      desc: 'Ebony is a thrift shop owner, freelance model and content creator based in New York.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600'
    }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-6 md:px-24 max-w-[1400px] mx-auto">
        <h1 className="text-[48px] md:text-[80px] font-serif italic text-primary leading-none tracking-tight mb-6">Outsite Membership</h1>
        <p className="text-xl md:text-2xl font-serif font-light text-gray-500 max-w-2xl leading-relaxed italic">
          The membership that connects you to people, not just places.
        </p>
      </header>

      {/* Gallery Section */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 aspect-[21/9]">
          <div className="overflow-hidden rounded-sm relative group">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Member" />
            <div className="absolute bottom-6 left-6">
              <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary shadow-lg">
                <span className="material-symbols-outlined text-sm">grid_view</span> See all photos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" className="w-full h-full object-cover" /></div>
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" className="w-full h-full object-cover" /></div>
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600" className="w-full h-full object-cover" /></div>
            <div className="overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-32 px-6 md:px-24 bg-[#EAE8E4]/30 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 space-y-6">
            <span className="text-[11px] font-condensed font-[900] text-gray-400 tracking-[0.4em] uppercase">COMING WITH? JOIN THE CLUB</span>
            <h2 className="text-[56px] md:text-[88px] font-serif italic text-primary leading-[0.9] tracking-tighter normal-case">For people who live everywhere</h2>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl">
              The only Membership for remote workers around the world, whether you're travelling or in your home city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-24">
             {perks.map((perk, i) => (
               <div key={i} className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-gray-400 text-2xl font-light">{perk.icon}</span>
                  <span className="text-[11px] font-condensed font-[900] text-primary uppercase tracking-[0.2em]">{perk.text}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Yearly Card */}
            <div className="flex-1 bg-white border border-black p-12 flex flex-col justify-between shadow-sm">
               <div className="space-y-8">
                 <div className="flex justify-between items-start">
                    <div className="bg-black text-white p-3 rounded-sm"><span className="material-symbols-outlined text-[24px]">adjust</span></div>
                    <div className="text-right">
                       <p className="text-[12px] font-condensed font-[900] text-primary tracking-widest">YEARLY</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Membership</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-4xl font-condensed font-[900] text-primary">$199</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Per year</p>
                 </div>
                 <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
                   A flexible way to join Outsite. Perfect for trying the lifestyle or planning a year of travel — renew only when you're ready.
                 </p>
               </div>
               <button onClick={onApplyClick} className="w-full bg-black text-white py-4 rounded-full font-condensed font-[900] uppercase tracking-widest text-[12px] hover:bg-gray-800 transition-all mt-12 shadow-md">Apply now</button>
            </div>

            {/* Lifetime Card */}
            <div className="flex-1 bg-white border border-black p-12 flex flex-col justify-between shadow-sm">
               <div className="space-y-8">
                 <div className="flex justify-between items-start">
                    <div className="bg-[#EAE7DD] text-primary p-3 rounded-sm"><span className="material-symbols-outlined text-[24px]">stars</span></div>
                    <div className="text-right">
                       <p className="text-[12px] font-condensed font-[900] text-primary tracking-widest">LIFETIME</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Membership</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-4xl font-condensed font-[900] text-primary">$999</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Billed once</p>
                 </div>
                 <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
                   One payment, forever access. Built for committed remote workers and travelers who want Outsite to always be part of their journey.
                 </p>
               </div>
               <button onClick={onApplyClick} className="w-full bg-black text-white py-4 rounded-full font-condensed font-[900] uppercase tracking-widest text-[12px] hover:bg-gray-800 transition-all mt-12 shadow-md">Apply now</button>
            </div>
          </div>
        </div>
      </section>

      {/* More than a stay Section */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-serif italic text-primary leading-tight mb-4 tracking-tighter">More than a stay</h2>
            <p className="text-xl text-gray-400 font-sans font-light">Get connected before you travel, and make the most of every experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'PERKS', desc: 'Members have discounts on Airalo, ClassPass and more, and get local perks in Outsite locations.', img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600' },
              { title: 'MEMBER HUB', desc: 'Get access to our Member Sublets, Jobs Board and Trip Planning Groups.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600' },
              { title: 'TRIPS', desc: 'One-month journeys designed for people who want to explore the world - without pressing pause on work.', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=600' }
            ].map((item, i) => (
              <div key={i} className="space-y-8 group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={item.title} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-condensed font-[900] text-primary uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrace Image Hero */}
      <section className="w-full h-[80vh] overflow-hidden relative">
         <img src="https://images.unsplash.com/photo-1512918766755-ee7b17104235?q=80&w=2000" className="w-full h-full object-cover" alt="Terrace" />
         <button className="absolute bottom-10 right-10 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl hover:scale-105 transition-transform">
           <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span> Help
         </button>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 md:px-24 bg-[#FAF9F6] border-b border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          <div className="py-12 md:py-0 text-center space-y-4">
            <h3 className="text-6xl md:text-8xl font-condensed font-[900] text-primary tracking-tighter">5000+</h3>
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em]">Members</p>
          </div>
          <div className="py-12 md:py-0 text-center space-y-4">
            <h3 className="text-6xl md:text-8xl font-condensed font-[900] text-primary tracking-tighter">40+</h3>
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em]">Nationalities</p>
          </div>
          <div className="py-12 md:py-0 text-center space-y-4">
            <h3 className="text-6xl md:text-8xl font-condensed font-[900] text-primary tracking-tighter">36</h3>
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em]">Average age</p>
          </div>
        </div>
      </section>

      {/* Meet Outsite Members */}
      <section className="py-40 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32 space-y-6">
            <h2 className="text-5xl md:text-[6rem] font-serif italic text-primary leading-none tracking-tighter">Meet Outsite Members</h2>
            <p className="text-xl text-gray-500 font-sans font-light max-w-2xl mx-auto">
              Outsite Members are from a variety of different professions and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {profiles.map((profile, i) => (
              <div key={i} className="space-y-10 group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                  <img src={profile.img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={profile.name} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-condensed font-[900] text-primary uppercase tracking-tighter">{profile.name}</h4>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed h-20">{profile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-48 px-6 md:px-24 bg-[#FAF9F6] text-center border-t border-black/5">
        <div className="max-w-2xl mx-auto space-y-12">
           <h2 className="text-5xl md:text-8xl font-serif italic text-primary leading-none tracking-tighter normal-case">Got questions?</h2>
           <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">
             If our Membership FAQs are not enough, feel free to book a call with us and we'll be happy to assist you!
           </p>
           <button className="bg-black text-white px-12 py-5 rounded-full font-condensed font-[900] uppercase tracking-widest text-[14px] hover:bg-gray-800 transition-all shadow-2xl">
             Request a Call
           </button>
        </div>
      </section>

      <div className="h-40 bg-white"></div>
    </div>
  );
};

export default BecomeAMember;
