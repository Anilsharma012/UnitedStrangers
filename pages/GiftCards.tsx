
import React, { useState } from 'react';

const GiftCards: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const giftCards = [
    { value: '$50', color: 'bg-[#E8E6E1]' },
    { value: '$150', color: 'bg-[#95C2B9]' },
    { value: '$250', color: 'bg-[#F2D96F]' },
    { value: '$500', color: 'bg-[#D1A65E]' },
  ];

  const inclusions = [
    { icon: 'card_giftcard', text: 'REDEEMABLE FOR ALL LOCATIONS' },
    { icon: 'lock', text: 'VALID FOR MEMBERSHIP FEES' },
    { icon: 'bolt', text: 'INSTANT DIGITAL DELIVERY' },
    { icon: 'verified', text: 'NO EXPIRATION DATES' },
    { icon: 'edit', text: 'CUSTOMIZABLE MESSAGE' },
    { icon: 'group', text: 'GIVE THE GIFT OF COMMUNITY' }
  ];

  const faqs = [
    { q: "Are Outsite Gift Cards physical or digital?", a: "Outsite gift cards are primarily digital and delivered instantly via email. You can purchase them directly through our website and send them to your chosen recipient with a custom message." },
    { q: "How can I redeem an Outsite Gift Card?", a: "Redemption is easy. Simply enter the unique gift code in the 'Promo Code' or 'Gift Credit' field during checkout for any booking or membership payment." },
    { q: "What can gift cards be used for?", a: "They are valid for accommodation bookings at any Signature or Curated location, as well as Outsite Yearly or Lifetime Membership fees." }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">GIVE THE GIFT OF TRAVEL</span>
          <h1 className="text-[56px] md:text-[90px] font-serif italic text-primary leading-none tracking-tight mt-2">Gift Cards</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Buy now, stay later. Outsite Gift Cards are redeemable for any booking at Outsite, or Outsite Membership.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl">Buy Gift Card</button>
        </div>
      </section>

      {/* Hero Cards Grid */}
      <section className="px-6 md:px-24 max-w-[1200px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {giftCards.map((card, i) => (
             <div key={i} className={`${card.color} aspect-[1.8/1] rounded-sm flex overflow-hidden border border-black/5 shadow-sm group cursor-pointer hover:shadow-md transition-shadow`}>
               <div className="w-12 h-full border-r border-black/10 flex items-center justify-center">
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 rotate-180 [writing-mode:vertical-lr]">OUTSITE</span>
               </div>
               <div className="flex-1 relative flex flex-col items-center justify-center">
                 <div className="absolute top-0 right-0 bg-primary/10 px-4 py-1.5 text-[10px] font-bold text-primary">{card.value}</div>
                 <div className="text-center">
                   <h3 className="text-6xl font-display text-primary/80 leading-none mb-1">gift</h3>
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60">CARD</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Why Give a Gift Card? */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-b border-black/5">
        <h2 className="text-[44px] md:text-[68px] font-serif italic text-primary mb-24 leading-tight tracking-tight max-w-xl">
          The perfect gift for the nomad in your life.
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
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200" className="w-full h-full object-cover" />
              </div>
           </div>
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

export default GiftCards;
