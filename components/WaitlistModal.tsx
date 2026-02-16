
import React from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-[540px] rounded-2xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="w-full h-48 md:h-64 relative">
           <img 
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Outsite Lifestyle"
          />
          <div className="absolute inset-0 bg-black/20" />
           {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors bg-black/20 backdrop-blur-md rounded-full p-1.5"
          >
            <span className="material-symbols-outlined text-2xl font-light">close</span>
          </button>
        </div>

        <div className="p-10 md:p-14 text-center">
          {/* Content */}
          <div className="space-y-4 mb-10">
            <h2 className="text-[44px] md:text-[56px] font-display text-primary leading-none tracking-tight">
              Outsite Trips
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-sans font-light tracking-tight italic">
              Be the first to know when 2026 spots open up.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="name@email.com"
              className="w-full h-14 px-6 rounded-md border border-gray-200 text-lg focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-300 font-sans outline-none transition-all"
            />
            <button 
              className="w-full h-14 bg-[#1A1A1A] text-white rounded-full text-[15px] font-sans font-bold hover:bg-black transition-all shadow-xl active:scale-[0.98] tracking-tight uppercase"
            >
              Join the waitlist
            </button>
          </form>
          
          <p className="mt-8 text-[11px] text-gray-400 font-medium uppercase tracking-widest">
            Privacy Guaranteed • 1-Click Unsubscribe
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
