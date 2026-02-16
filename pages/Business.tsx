
import React, { useRef } from 'react';

const Business: React.FC = () => {
  const quoteFormRef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    if (quoteFormRef.current) {
      quoteFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fade-in bg-white min-h-screen pt-[95px]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-auto md:h-[600px] border-b border-gray-200">
        <div className="flex-1 bg-[#F2EFE6] p-12 md:p-24 flex flex-col justify-center border-r border-gray-200">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-8xl font-display text-primary mb-8 leading-tight tracking-tight">
              Business Memberships
            </h1>
            <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-12">
              An employee perk for the remote work era. Give everyone at your company Outsite Membership, at a discounted price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-12 py-4 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-white/50 transition-all">
                Book a Call
              </button>
              <button 
                onClick={scrollToQuote}
                className="px-12 py-4 bg-black text-white rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale" 
            alt="Person working" 
          />
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 px-6 md:px-24 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-primary mb-6 tracking-tight uppercase">Open the world up to your team.</h2>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl">
              Whether you're a remote-first company or hybrid team, Business Memberships make it easy for your employees to stay comfortable and productive while traveling and working remotely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-3xl text-gray-400">public</span>
              <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">WORLDWIDE LOCATIONS</h4>
              <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
                With 40+ spaces on 4 continents, employees can choose where to work based on time zone or personal preference.
              </p>
            </div>
            <div className="space-y-6">
              <span className="material-symbols-outlined text-3xl text-gray-400">home</span>
              <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">COMFORTABLE HOMES, BUILT FOR WORK</h4>
              <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
                Ensure team members stay focused and productive with lightning fast wifi and comfortable workspaces.
              </p>
            </div>
            <div className="space-y-6">
              <span className="material-symbols-outlined text-3xl text-gray-400">groups</span>
              <h4 className="text-[13px] font-condensed font-black text-primary uppercase tracking-widest">REMOTE COMMUNITY</h4>
              <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
                Help employees network with other work-focused professionals to stay happy and connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Membership Features - Graphic Block */}
      <section className="flex flex-col md:flex-row min-h-[600px] border-b border-gray-100 items-stretch">
        <div className="flex-1 bg-[#D1D8DB] p-12 md:p-24 flex items-center justify-center relative overflow-hidden">
           {/* Decorative Ovals from Screenshot */}
           <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <div className="w-[140%] h-[120%] border border-black rounded-[100%] transform -translate-x-1/4"></div>
              <div className="w-[140%] h-[120%] border border-black rounded-[100%] absolute transform translate-x-1/4"></div>
           </div>
           <p className="text-xl md:text-3xl font-serif text-primary text-center max-w-sm relative z-10 font-normal leading-relaxed italic">
            The more Annual Memberships you purchase, the more discounts and benefits you receive.
           </p>
        </div>
        <div className="flex-1 bg-[#FAF9F6] p-12 md:p-24 flex flex-col justify-center">
          <div className="max-w-md">
            <h3 className="text-4xl md:text-5xl font-display text-primary mb-12 leading-tight uppercase">
              Business Membership Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Discounted Membership Rates",
                "Gift Outsite Credit",
                "Dedicated Account Manager",
                "Deals & Rewards"
              ].map(feature => (
                <div key={feature} className="border border-black p-4 flex items-center justify-center text-center bg-white shadow-sm">
                  <span className="text-[11px] font-condensed font-black uppercase tracking-widest text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Set Your Team Up - Pricing Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-16 tracking-tight lowercase">Set Your Team Up</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 5-19 */}
            <div className="bg-[#DDE4E6] border border-black p-10 flex flex-col justify-between group">
              <div className="space-y-8">
                <div>
                  <h4 className="text-4xl font-display mb-1">5-19</h4>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Memberships</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> 10% off Annual Memberships
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> Purchase Outsite Credits
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> Dedicated Account Manager
                  </li>
                </ul>
              </div>
              <button onClick={scrollToQuote} className="w-full mt-12 py-3 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Request a Quote
              </button>
            </div>

            {/* 20-50 */}
            <div className="bg-[#EAE7DD] border border-black p-10 flex flex-col justify-between group">
              <div className="space-y-8">
                <div>
                  <h4 className="text-4xl font-display mb-1">20-50</h4>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Memberships</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> 20% off Annual Memberships
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> 5% off Outsite Credits
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> Dedicated Account Manager
                  </li>
                </ul>
              </div>
              <button onClick={scrollToQuote} className="w-full mt-12 py-3 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Request a Quote
              </button>
            </div>

            {/* 50+ */}
            <div className="bg-[#D1D8DB] border border-black p-10 flex flex-col justify-between group">
              <div className="space-y-8">
                <div>
                  <h4 className="text-4xl font-display mb-1">50+</h4>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Memberships</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> 30% off Annual Memberships
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> 10% off Outsite Credits
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-medium text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">check</span> Dedicated Account Manager
                  </li>
                </ul>
              </div>
              <button onClick={scrollToQuote} className="w-full mt-12 py-3 border border-black rounded-full text-[11px] font-condensed font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 md:px-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display text-center mb-24 leading-tight italic tracking-tight uppercase">
            A new team solution for the<br/>remote work era
          </h2>
          
          <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm bg-white overflow-hidden">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-5xl text-primary/10 mb-8 font-light italic leading-none">format_quote</span>
                <p className="text-[15px] text-gray-600 leading-relaxed font-sans font-light mb-6">
                  As a remote company, we had a super fun and productive time at Outsite Biarritz! We loved the flexibility and we actually want to do a multi-company workation next time with other fellow companies from Y Combinator.
                </p>
                <p className="text-[15px] text-gray-600 leading-relaxed font-sans font-light mb-10">
                  I discovered Outsite individually as I spent a month at Outsite Santa Teresa. I immediately shared the concept to the team. Also as a CEO I wanted to make sure the team could also access the right spaces and the relevant community when they work remotely. We can keep organizing 'company workations', or now that they have a membership, they can also plan trips organically as they wish.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" alt="Anh-Tho" />
                </div>
                <div>
                  <p className="font-bold text-[14px] text-primary">Anh-Tho Chuong</p>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Co-founder & CEO of Get Lago</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-[#F2EFE6] relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1200&auto=format&fit=crop" 
                 className="w-full h-full object-cover" 
                 alt="Group at dinner"
               />
               <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined">chevron_right</span></button>
               </div>
            </div>
          </div>
          
          <div className="bg-[#EAE7DD] border-x border-b border-gray-200 py-6 px-12 flex items-center justify-center gap-4">
            <div className="border-2 border-primary px-2 py-0.5"><span className="font-condensed font-black text-sm tracking-tighter uppercase">Logo</span></div>
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
              Open Source Billing API for product-led SaaS, backed by Y Combinator.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section ref={quoteFormRef} className="py-32 px-6 md:px-24 bg-[#FAF9F6] scroll-mt-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-[6rem] font-display italic tracking-tighter leading-none uppercase">Get a Business Quote</h2>
            <p className="text-xl text-gray-500 font-sans font-light max-w-2xl mx-auto">
              Looking to scale your team's remote work setup? Fill in the form below and we'll get back to you within two business days.
            </p>
          </div>

          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">First Name*</label>
                <input type="text" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Last Name*</label>
                <input type="text" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Work Email*</label>
                <input type="email" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Phone Number*</label>
                <input type="tel" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Company Name*</label>
                <input type="text" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Estimated Team Size*</label>
                <input type="number" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans shadow-sm" />
              </div>
            </div>

            <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">How can we help your team?*</label>
                <textarea className="w-full bg-white border border-gray-200 py-5 px-6 h-40 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans resize-none shadow-sm"></textarea>
            </div>

            <div className="text-center pt-8">
              <button type="button" className="bg-black text-white w-full py-6 rounded-full font-condensed font-black uppercase tracking-[0.2em] text-[16px] hover:bg-gray-800 transition-all shadow-2xl">Send Request</button>
            </div>
          </form>
        </div>
      </section>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default Business;
