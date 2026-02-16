
import React from 'react';

const Footer: React.FC = () => {
  const LogoBox = () => (
    <div className="border-[2px] border-white p-1 inline-block bg-transparent mb-10">
      <h2 className="font-condensed font-black text-xl leading-none text-center tracking-tighter text-white uppercase">
        UNITED<br/>STRANGERS
      </h2>
    </div>
  );

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 md:px-20 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Top Logo and Tagline Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <LogoBox />
          <p className="text-[18px] md:text-[24px] font-light text-gray-300 tracking-tight leading-relaxed max-w-2xl mx-auto">
            Coliving spaces, community, and perks designed for remote<br className="hidden md:block" /> workers and creatives.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/5 mb-20"></div>

        {/* Links Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mb-24">
          <div className="space-y-8">
            <h4 className="text-[14px] font-black uppercase tracking-[0.2em] text-white">PRODUCT</h4>
            <ul className="space-y-4">
              {['Locations', 'Spaces', 'Community', 'Benefits'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[14px] font-black uppercase tracking-[0.2em] text-white">COMPANY</h4>
            <ul className="space-y-4">
              {['About Us', 'Values', 'Press', 'Sustainability'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[14px] font-black uppercase tracking-[0.2em] text-white">SUPPORT</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Ultimate Guides', 'FAQ / Help Center'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL - Real Logos inside Colored Boxes as per screenshot */}
          <div className="space-y-8">
            <h4 className="text-[14px] font-black uppercase tracking-[0.2em] text-white">SOCIAL</h4>
            <div className="flex gap-3">
              {/* Facebook - Gold Square */}
              <a href="#" className="w-10 h-10 bg-[#F8D249] flex items-center justify-center rounded-sm hover:scale-105 transition-all shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-6 h-6" alt="FB" />
              </a>
              {/* Twitter - Orange Square */}
              <a href="#" className="w-10 h-10 bg-[#EF5823] flex items-center justify-center rounded-sm hover:scale-105 transition-all shadow-lg">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              {/* Instagram - Teal Square */}
              <a href="#" className="w-10 h-10 bg-[#2195A2] flex items-center justify-center rounded-sm hover:scale-105 transition-all shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-6 h-6" alt="Insta" />
              </a>
              {/* LinkedIn - Dark Orange Square */}
              <a href="#" className="w-10 h-10 bg-[#D36D26] flex items-center justify-center rounded-sm hover:scale-105 transition-all shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-6 h-6" alt="LinkedIn" />
              </a>
              {/* YouTube - Cyan Square */}
              <a href="#" className="w-10 h-10 bg-[#00E0FE] flex items-center justify-center rounded-sm hover:scale-105 transition-all shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" className="w-6 h-6" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-12 border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity">
           <button className="flex items-center gap-2 text-white bg-transparent border border-white/10 px-5 py-2.5 rounded-full shadow-lg transition-all">
             <span className="material-symbols-outlined text-[18px] text-white font-light">chat_bubble_outline</span>
             <span className="text-[13px] font-medium tracking-tight">Help</span>
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
