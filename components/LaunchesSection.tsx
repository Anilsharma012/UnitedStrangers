
import React from 'react';

const LaunchesSection: React.FC = () => {
  return (
    <section className="bg-[#F1EFEC] overflow-hidden border-t border-black/5">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Content */}
        <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <span className="text-[11px] font-condensed font-black text-primary/60 tracking-[0.4em] uppercase block">WORK REMOTELY?</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-primary leading-[1.1] tracking-tight normal-case">
              Sign up for Outsite Launches.
            </h2>
            <p className="text-[16px] md:text-lg text-gray-500 font-sans font-light leading-relaxed max-w-md">
              Outsite is a platform of spaces, services and community for remote workers and creatives. Sign up to our newsletter to find out more.
            </p>
          </div>

          <form className="space-y-6 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border border-black/20 rounded-full py-5 px-10 text-[15px] font-sans focus:ring-1 focus:ring-primary focus:border-primary outline-none placeholder:text-gray-400 transition-all shadow-inner" 
            />
            <button className="bg-black text-white px-12 py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[13px] hover:bg-zinc-800 transition-all shadow-2xl active:scale-95">
              Sign me up
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-h-[400px] lg:min-h-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Outsite Community Working" 
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
