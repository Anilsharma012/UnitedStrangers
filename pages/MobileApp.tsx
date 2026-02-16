
import React, { useState } from 'react';

const MobileApp: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inclusions = [
    { icon: 'location_on', text: 'EXPLORE WORLDWIDE LOCATIONS' },
    { icon: 'calendar_today', text: 'MANAGE BOOKINGS ON THE GO' },
    { icon: 'groups', text: 'CONNECT WITH HOUSEMATES' },
    { icon: 'chat_bubble_outline', text: 'IN-APP COMMUNITY CHAT' },
    { icon: 'key', text: 'ACCESS SELF CHECK-IN DETAILS' },
    { icon: 'notifications_active', text: 'REAL-TIME TRIP UPDATES' }
  ];

  const benefits = [
    { title: 'SEAMLESS BOOKING', text: 'Find and book your next stay in seconds with our streamlined mobile interface.' },
    { title: 'HOUSEMATES LIST', text: 'See who else is staying at your location and reach out before you even arrive.' },
    { title: 'LOCAL GUIDES', text: 'Access curated neighborhood tips and member-exclusive deals directly from your pocket.' }
  ];

  const faqs = [
    { q: "Is the Outsite App available on all devices?", a: "Yes, the Outsite App is available for both iOS (App Store) and Android (Google Play Store) devices." },
    { q: "Do I need to be a member to use the app?", a: "While anyone can browse locations, the community features, housemate lists, and check-in details are exclusive to Outsite Members." },
    { q: "Can I manage my subscription in the app?", a: "Yes, you can upgrade your membership, update payment methods, and manage all your trip details within the app." }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">WORK ANYWHERE</span>
          <h1 className="text-[56px] md:text-[90px] font-serif italic text-primary leading-none tracking-tight mt-2">Mobile App</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Explore new locations, plan your next trip, find your check-in details and meet your housemates with the United Strangers App.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-sm flex items-center gap-3 hover:opacity-80 transition-all shadow-xl">
            <span className="material-symbols-outlined text-2xl">apple</span>
            <div className="text-left leading-none uppercase">
              <div className="text-[7px] font-bold opacity-60">Download on the</div>
              <div className="text-[12px] font-bold">App Store</div>
            </div>
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-sm flex items-center gap-3 hover:opacity-80 transition-all shadow-xl">
            <span className="material-symbols-outlined text-2xl">play_arrow</span>
            <div className="text-left leading-none uppercase">
              <div className="text-[7px] font-bold opacity-60">Get it on</div>
              <div className="text-[12px] font-bold">Google Play</div>
            </div>
          </button>
        </div>
      </section>

      {/* Hero Visual Section */}
      <section className="px-6 md:px-24 mb-32 relative flex justify-center">
         <div className="relative w-72 md:w-80 h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-primary overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs" className="w-full h-full object-cover" />
         </div>
      </section>

      {/* What Makes the App Special? */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-b border-black/5">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-tight tracking-tight max-w-xl">
          Your journey in your pocket.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
           <div className="space-y-12">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                   <span className="material-symbols-outlined text-primary text-2xl font-light shrink-0">{item.icon}</span>
                   <span className="text-[11px] md:text-[13px] font-condensed font-black text-primary/70 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{item.text}</span>
                </div>
              ))}
           </div>
           <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative bg-[#BCECE0] flex items-center justify-center p-12">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k" className="h-full object-contain shadow-2xl rounded-sm" />
              </div>
           </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-40 px-6 md:px-24 bg-white text-center">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-none tracking-tight">App-Exclusive Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
           {benefits.map((benefit, i) => (
             <div key={i} className="flex flex-col items-center space-y-10 group px-4">
                <div className="w-[100px] h-[100px] border border-black/10 flex items-center justify-center relative overflow-hidden bg-[#FAF9F6]">
                   <span className="material-symbols-outlined text-primary text-4xl font-light z-10">smartphone</span>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-black/10 group-hover:bg-primary/5 transition-all"></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-[16px] font-condensed font-black uppercase tracking-widest text-primary">{benefit.title}</h3>
                  <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">{benefit.text}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-black/10" style={{ left: `${(i + 1) * 33.3}%` }}></div>}
             </div>
           ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-32 px-6 md:px-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-20 leading-none tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full py-10 flex items-center justify-between text-left group-hover:bg-[#FAF9F6] transition-all px-4"
                >
                  <span className="text-[16px] font-sans font-medium text-primary leading-snug">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0 ml-4 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[18px]">{openFaq === i ? 'remove' : 'add'}</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed max-w-2xl">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-40 bg-white"></div>
    </div>
  );
};

export default MobileApp;
