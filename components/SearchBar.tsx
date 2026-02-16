
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white shadow-[0_12px_40px_rgb(0,0,0,0.15)] rounded-full p-1.5 flex flex-col md:flex-row items-center w-full max-w-[980px] border border-gray-100 backdrop-blur-sm bg-white/95">
      <div className="flex flex-col md:flex-row items-center w-full divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* Location Section */}
        <div className="px-10 py-3 w-full md:w-[30%] text-left group cursor-pointer hover:bg-gray-50/80 transition-colors rounded-l-full">
          <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">Location</label>
          <input 
            className="w-full bg-transparent border-none p-0 text-[13px] text-gray-400 focus:ring-0 placeholder-gray-400 font-medium" 
            placeholder="Anywhere" 
            type="text"
          />
        </div>

        {/* Check-in Section */}
        <div className="px-10 py-3 w-full md:w-[22%] text-left group cursor-pointer hover:bg-gray-50/80 transition-colors">
          <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">Check-in</label>
          <p className="text-[13px] text-gray-300 font-medium">Add dates</p>
        </div>
        
        {/* Check-out Section */}
        <div className="px-10 py-3 w-full md:w-[22%] text-left group cursor-pointer hover:bg-gray-50/80 transition-colors">
          <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">Check-out</label>
          <p className="text-[13px] text-gray-300 font-medium">Add dates</p>
        </div>

        {/* Guests Section */}
        <div className="px-10 py-3 w-full md:w-[26%] text-left group cursor-pointer hover:bg-gray-50/80 transition-colors rounded-r-full md:rounded-r-none">
          <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">Guests</label>
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-gray-500 font-medium">One guest</p>
            <span className="material-symbols-outlined text-gray-400 text-lg">expand_more</span>
          </div>
        </div>

        {/* Search Action */}
        <div className="p-1 w-full md:w-auto shrink-0 pr-2">
          <button className="bg-[#1A1A1A] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:bg-black transition-all shadow-md group">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">search</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
