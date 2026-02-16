
import React, { useState } from 'react';

interface LocationsOverlayProps {
  onClose: () => void;
  onCityClick: (city: string) => void;
  onExploreMapClick: () => void;
  isPinned?: boolean;
}

interface CityData {
  name: string;
  type: 's' | 'c';
}

interface CountryData {
  name: string;
  region: string;
  cities: CityData[];
}

const countriesData: CountryData[] = [
  // Europe
  {
    name: "Austria",
    region: "Europe",
    cities: [{ name: "Vienna", type: "c" }]
  },
  {
    name: "Bulgaria",
    region: "Europe",
    cities: [{ name: "Sofia", type: "c" }]
  },
  {
    name: "Denmark",
    region: "Europe",
    cities: [{ name: "Copenhagen", type: "c" }]
  },
  {
    name: "France",
    region: "Europe",
    cities: [
      { name: "Bordeaux", type: "s" },
      { name: "Paris", type: "c" }
    ]
  },
  {
    name: "Netherlands",
    region: "Europe",
    cities: [{ name: "Amsterdam", type: "c" }]
  },
  {
    name: "Portugal",
    region: "Europe",
    cities: [
      { name: "Algarve - Sagres", type: "s" },
      { name: "Algarve - Vilamoura", type: "s" },
      { name: "Cascais - Guincho", type: "s" },
      { name: "Ericeira - Centro", type: "s" },
      { name: "Ericeira - Praia do Sul", type: "s" },
      { name: "Lisbon - Cais do Sodre", type: "s" },
      { name: "Lisbon - Intendente", type: "s" },
      { name: "Madeira - Ponta do Sol", type: "s" },
      { name: "Porto - Mouco", type: "c" }
    ]
  },
  {
    name: "Spain",
    region: "Europe",
    cities: [
      { name: "Barcelona - Gothic Quarter", type: "s" },
      { name: "Ibiza - Es Canar", type: "s" }
    ]
  },
  {
    name: "United Kingdom",
    region: "Europe",
    cities: [
      { name: "London - Shoreditch", type: "c" },
      { name: "London - Canary Wharf", type: "c" }
    ]
  },
  // Latin America
  {
    name: "Colombia",
    region: "Latin America",
    cities: [
      { name: "Medellín - El Poblado", type: "s" },
      { name: "Medellín - Manila", type: "s" }
    ]
  },
  {
    name: "Costa Rica",
    region: "Latin America",
    cities: [
      { name: "Playa Grande", type: "c" },
      { name: "Santa Teresa - Maramar", type: "s" },
      { name: "Santa Teresa - Playa", type: "s" }
    ]
  },
  {
    name: "Mexico",
    region: "Latin America",
    cities: [
      { name: "Los Cabos", type: "s" },
      { name: "Mexico City - Colonia S", type: "s" },
      { name: "Mexico City - Roma Sur", type: "s" },
      { name: "Oaxaca City", type: "s" }
    ]
  },
  {
    name: "Nicaragua",
    region: "Latin America",
    cities: [{ name: "San Juan del Sur", type: "s" }]
  },
  {
    name: "Puerto Rico",
    region: "Latin America",
    cities: [
      { name: "Aguadilla", type: "s" },
      { name: "Ocean Park", type: "s" }
    ]
  },
  // United States
  {
    name: "California",
    region: "United States",
    cities: [
      { name: "Los Angeles - Venice", type: "s" },
      { name: "San Diego - Encinitas", type: "s" },
      { name: "San Diego - Golden Hill", type: "s" },
      { name: "San Francisco - Mission", type: "s" },
      { name: "San Francisco - Pacific Heights", type: "s" }
    ]
  },
  {
    name: "Colorado",
    region: "United States",
    cities: [{ name: "Boulder", type: "s" }]
  },
  {
    name: "New York",
    region: "United States",
    cities: [
      { name: "Chelsea", type: "s" },
      { name: "Manhattan Midtown", type: "s" }
    ]
  },
  {
    name: "Texas",
    region: "United States",
    cities: [{ name: "Austin", type: "s" }]
  },
  // Africa
  {
    name: "Morocco",
    region: "Africa",
    cities: [{ name: "Marrakesh", type: "s" }]
  },
  {
    name: "South Africa",
    region: "Africa",
    cities: [
      { name: "Cape Town - Camps Bay", type: "c" },
      { name: "Cape Town - Green Point", type: "c" }
    ]
  },
  // Asia
  {
    name: "Indonesia",
    region: "Asia",
    cities: [
      { name: "Bali - Pererenan", type: "s" },
      { name: "Bali - Ubud", type: "c" }
    ]
  },
  {
    name: "Singapore",
    region: "Asia",
    cities: [{ name: "Singapore", type: "c" }]
  },
  {
    name: "Sri Lanka",
    region: "Asia",
    cities: [{ name: "Weligama", type: "c" }]
  }
];

const LocationsOverlay: React.FC<LocationsOverlayProps> = ({ onClose, onCityClick, onExploreMapClick, isPinned }) => {
  const [activeRegion, setActiveRegion] = useState('All');
  const regions = ["All", "Europe", "Latin America", "United States", "Africa", "Asia"];

  const filteredCountries = activeRegion === 'All' 
    ? countriesData.sort((a, b) => a.name.localeCompare(b.name)) 
    : countriesData.filter(c => c.region === activeRegion).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div 
      className={`fixed inset-0 z-[500] bg-black/40 backdrop-blur-[2px] flex justify-center items-start pt-24 px-4 overflow-hidden animate-in fade-in duration-200 ${isPinned ? 'pointer-events-auto' : 'pointer-events-none'}`} 
      onClick={onClose}
    >
      <div 
        className="bg-white shadow-2xl w-full max-w-[1400px] flex overflow-hidden h-[85vh] animate-in slide-in-from-top-4 duration-300 rounded-sm pointer-events-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-[210] bg-[#121212] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-black transition-all shadow-lg active:scale-90"
        >
          <span className="material-symbols-outlined text-[15px]">close</span>
        </button>

        {/* Left Sidebar */}
        <div className="w-[280px] bg-white p-10 flex flex-col shrink-0 border-r border-gray-100">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              {regions.map((region) => (
                <button 
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`block text-[16px] font-sans transition-all text-left ${activeRegion === region ? 'text-primary font-bold border-b-2 border-primary w-fit pb-0.5' : 'text-primary/60 hover:text-primary'}`}
                >
                  {region}
                </button>
              ))}
            </div>
            
            <button 
              onClick={onExploreMapClick}
              className="mt-10 bg-[#121212] text-white rounded-full px-8 py-3.5 text-[14px] font-bold tracking-tight hover:bg-black transition-all shadow-md active:scale-95"
            >
              Explore on map
            </button>
          </div>

          {/* Legend Section */}
          <div className="pt-8 space-y-5 border-t border-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#E6B48F] flex items-center justify-center shrink-0">
                <span className="text-white text-[9px] font-bold font-sans">s</span>
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-bold text-primary font-sans">Signature</p>
                <p className="text-[12px] text-gray-400 font-sans font-light">Operated by Outsite</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#BCECE0] flex items-center justify-center shrink-0">
                <span className="text-primary text-[10px] font-bold font-sans">c</span>
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-bold text-primary font-sans">Curated</p>
                <p className="text-[12px] text-gray-400 font-sans font-light">Operated by trusted partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="flex-1 bg-white p-10 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCountries.map((country) => (
              <div key={country.name} className="bg-[#FAF9F6] rounded-sm p-7 border border-gray-100/30 flex flex-col">
                <h4 className="text-[18px] font-bold text-primary mb-5 font-sans tracking-tight">{country.name}</h4>
                <div className="space-y-3">
                  {country.cities.map((city) => (
                    <div 
                      key={city.name} 
                      onClick={() => { onCityClick(city.name); onClose(); }}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[14px] text-primary/70 group-hover:text-primary transition-colors font-medium font-sans">
                        {city.name}
                      </span>
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 ${city.type === 's' ? 'bg-[#E6B48F]' : 'bg-[#BCECE0]'}`}>
                        <span className={`text-[8px] font-bold font-sans ${city.type === 's' ? 'text-white' : 'text-primary'}`}>
                          {city.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default LocationsOverlay;
