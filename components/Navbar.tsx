
import React, { useState, useRef, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  onLocationsClick: (pinned: boolean) => void;
  onLocationsHover: (isOpen: boolean) => void;
  onTripsClick: () => void;
  onDealsClick: () => void;
  onWhatIsOutsiteClick: () => void;
  onAboutUsClick: () => void;
  onCoworkCafeClick: () => void;
  onGiftCardsClick: () => void;
  onMobileAppClick: () => void;
  onBusinessClick: () => void;
  onTeamRetreatsClick: () => void;
  onRealEstatePartnersClick: () => void;
  onMembershipClick: () => void;
  onSignatureLocationsClick: () => void;
  onCuratedLocationsClick: () => void;
  onPlacesToStayClick: () => void;
  onHomeClick: () => void;
  isHome: boolean;
}

const BOOKING_CITIES = [
  'Athens', 'Barcelona', 'Lisbon', 'London', 'Madrid', 'Mexico City', 'New York', 'Paris', 'Rome'
];

const CalendarDropdown = ({ 
  selectedDay, 
  onSelect 
}: { 
  selectedDay: number; 
  onSelect: (day: number) => void 
}) => {
  const daysInMonth = 28;
  return (
    <div 
      className="absolute top-full left-0 right-0 md:left-[-1px] md:w-[calc(100%+2px)] bg-white border border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-[#222] text-white px-6 py-4 flex items-center justify-between border-b border-black">
        <div className="flex-1 text-center">
          <span className="font-condensed font-black text-2xl tracking-tighter uppercase">February 2026</span>
        </div>
        <span className="material-symbols-outlined text-[20px] cursor-pointer hover:opacity-70">chevron_right</span>
      </div>
      <div className="grid grid-cols-7 text-center pt-6 pb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <span key={d} className="font-condensed font-black text-base uppercase tracking-widest text-black">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 p-2 mb-4">
        {[31, 1].map((d, i) => (
          <div key={`prev-${i}`} className="h-12 flex items-center justify-center text-gray-200 font-sans text-lg">{i === 0 ? 31 : i}</div>
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const isSelected = day === selectedDay;
          return (
            <button
              key={day}
              onClick={() => onSelect(day)}
              className={`h-12 w-full flex items-center justify-center font-sans text-lg transition-colors
                ${isSelected ? 'bg-[#222] text-white font-bold' : 'text-black hover:bg-gray-100'}
              `}
            >
              {day}
            </button>
          );
        })}
        {[...Array(5)].map((_, i) => (
          <div key={`next-${i}`} className="h-12 flex items-center justify-center text-gray-200 font-sans text-lg">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ 
  onLocationsClick, onLocationsHover, onTripsClick, onDealsClick, onWhatIsOutsiteClick,
  onAboutUsClick, onCoworkCafeClick, onGiftCardsClick, onMobileAppClick,
  onMembershipClick, onSignatureLocationsClick, onCuratedLocationsClick,
  onPlacesToStayClick, onHomeClick, onBusinessClick, isHome,
  onRealEstatePartnersClick, onTeamRetreatsClick
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [checkInDay, setCheckInDay] = useState(7);
  const [checkOutDay, setCheckOutDay] = useState(8);
  
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);
  const [isBusinessPinned, setIsBusinessPinned] = useState(false);
  const [isWhatIsHovered, setIsWhatIsHovered] = useState(false);
  const [isWhatIsPinned, setIsWhatIsPinned] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsBusinessPinned(false);
        setIsWhatIsPinned(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => setActiveDropdown(activeDropdown === name ? null : name);

  const LogoBox = ({ color = "black", size = "normal" }: { color?: string, size?: "normal" | "large" }) => (
    <div className={`border-[2px] border-${color} p-1 inline-block shrink-0`}>
      <h2 className={`font-condensed font-black ${size === 'large' ? 'text-lg' : 'text-base'} leading-none text-center tracking-tighter text-${color} uppercase`}>UNITED<br/>STRANGERS</h2>
    </div>
  );

  const showBusinessDropdown = isBusinessHovered || isBusinessPinned;
  const showWhatIsDropdown = isWhatIsHovered || isWhatIsPinned;

  return (
    <nav className="sticky top-0 w-full z-[200] bg-white border-b border-black text-black" ref={navRef}>
      <div className="bg-[#BCECE0] text-primary text-[10px] font-condensed font-black py-2.5 text-center uppercase tracking-wider flex items-center justify-center gap-2 md:hidden">
        <span className="material-symbols-outlined text-[14px]">local_offer</span>
        10% OFF • FEBRUARY LAST MINUTE DEALS <span className="underline ml-1 cursor-pointer">Learn More</span>
      </div>

      <div className="flex h-[60px] md:h-[76px] items-stretch border-b border-black">
        <div onClick={onHomeClick} className="w-[120px] md:w-[160px] shrink-0 border-r border-black flex items-center justify-center cursor-pointer p-2">
          <LogoBox />
        </div>

        <div className="hidden lg:flex flex-1 items-stretch">
          <div className="flex items-center px-8 gap-10 border-r border-black">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group" 
              onClick={() => onLocationsClick(true)}
              onMouseEnter={() => onLocationsHover(true)}
              onMouseLeave={() => onLocationsHover(false)}
            >
              <span className="material-symbols-outlined text-[18px] font-black group-hover:translate-y-0.5 transition-transform">expand_more</span>
              <span className="font-condensed font-black text-[24px] uppercase tracking-tighter">Locations</span>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-[12px] font-black font-condensed uppercase tracking-widest">EN</span>
              <span className="material-symbols-outlined text-[16px] font-black">expand_more</span>
            </div>
          </div>

          <div className="flex-1 flex items-stretch divide-x divide-black bg-[#EAE8E4]/50">
            <div onClick={() => toggleDropdown('booking-location')} className={`flex-1 px-6 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'booking-location' ? 'bg-white' : ''}`}>
              <span className="booking-label">Location</span>
              <div className="flex items-center justify-between">
                 <span className="booking-value truncate font-sans font-bold">{selectedLocation || 'CHOOSE LOCATION *'}</span>
                 <span className="material-symbols-outlined text-[18px] font-black">expand_more</span>
              </div>
              {activeDropdown === 'booking-location' && (
                <div className="absolute top-full left-[-1px] w-[calc(100%+2px)] bg-white border border-black shadow-2xl z-[150]">
                  {BOOKING_CITIES.map((city) => (
                    <button key={city} onClick={(e) => { e.stopPropagation(); setSelectedLocation(city); setActiveDropdown(null); }}
                      className="w-full px-6 py-4 text-left text-[14px] font-condensed font-black hover:bg-gray-50 border-b border-gray-100 uppercase tracking-widest">
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div onClick={() => toggleDropdown('check-in')} className={`flex-1 px-6 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'check-in' ? 'bg-white' : ''}`}>
              <span className="booking-label">Check In</span>
              <span className="booking-value font-sans font-bold">Feb {checkInDay}, 2026</span>
              {activeDropdown === 'check-in' && <CalendarDropdown selectedDay={checkInDay} onSelect={(day) => { setCheckInDay(day); setActiveDropdown(null); }} />}
            </div>

            <div onClick={() => toggleDropdown('check-out')} className={`flex-1 px-6 flex flex-col justify-center cursor-pointer transition-colors relative hover:bg-white ${activeDropdown === 'check-out' ? 'bg-white' : ''}`}>
              <span className="booking-label">Check Out</span>
              <span className="booking-value font-sans font-bold">Feb {checkOutDay}, 2026</span>
              {activeDropdown === 'check-out' && <CalendarDropdown selectedDay={checkOutDay} onSelect={(day) => { setCheckOutDay(day); setActiveDropdown(null); }} />}
            </div>

            <div className="flex-1 px-6 flex flex-col justify-center cursor-pointer hover:bg-white">
              <span className="booking-label">Guests</span>
              <span className="booking-value font-sans font-bold">1 Adult, 0 Child</span>
            </div>

            <button className="bg-ace-orange px-10 flex items-center justify-center hover:bg-orange-500 transition-colors shrink-0">
              <span className="font-condensed font-black text-xl uppercase tracking-tighter text-black leading-tight">BOOK<br/>NOW</span>
            </button>
          </div>
        </div>

        <div className="lg:hidden flex-1 flex items-center justify-end px-6 gap-4">
          <button onClick={() => setIsMobileMenuOpen(true)} className="flex items-center gap-2 bg-white border border-gray-300 rounded-full pl-3 pr-4 py-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[20px] text-gray-600">person</span>
            <span className="material-symbols-outlined text-[20px] text-gray-600">menu</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex bg-white h-[52px] items-center px-10 gap-10 border-b border-black">
        <button 
          onClick={() => onLocationsClick(true)} 
          onMouseEnter={() => onLocationsHover(true)}
          onMouseLeave={() => onLocationsHover(false)}
          className="text-[11px] font-condensed font-black tracking-ace-wide uppercase flex items-center gap-2 hover:opacity-60 transition-opacity"
        >
          LOCATIONS <span className="material-symbols-outlined text-[18px] font-black">expand_more</span>
        </button>
        <button onClick={onTripsClick} className="text-[11px] font-condensed font-black tracking-ace-wide uppercase hover:opacity-60 transition-opacity">TRIPS</button>
        <button onClick={onDealsClick} className="text-[11px] font-condensed font-black tracking-ace-wide uppercase hover:opacity-60 transition-opacity">DEALS</button>
        
        {/* WHAT IS UNITED STRANGERS Dropdown */}
        <div className="relative h-full flex items-center">
          <button 
            onMouseEnter={() => setIsWhatIsHovered(true)}
            onMouseLeave={() => setIsWhatIsHovered(false)}
            onClick={() => setIsWhatIsPinned(!isWhatIsPinned)}
            className={`text-[11px] font-condensed font-black tracking-ace-wide uppercase flex items-center gap-2 hover:opacity-60 transition-opacity h-full ${showWhatIsDropdown ? 'text-blue-600' : ''}`}
          >
            WHAT IS UNITED STRANGERS <span className="material-symbols-outlined text-[18px] font-black">expand_more</span>
          </button>

          {showWhatIsDropdown && (
            <div 
              onMouseEnter={() => setIsWhatIsHovered(true)}
              onMouseLeave={() => setIsWhatIsHovered(false)}
              className="absolute top-[calc(100%+1px)] left-0 min-w-[240px] bg-[#FAF9F6] border border-black shadow-[0_15px_60px_rgba(0,0,0,0.1)] py-3 z-[200] animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex flex-col">
                <button onClick={() => { onSignatureLocationsClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Signature Locations</span>
                </button>
                <button onClick={() => { onCuratedLocationsClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Curated Locations</span>
                </button>
                <button onClick={() => { onPlacesToStayClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Places to Stay</span>
                </button>
                <button onClick={() => { onMembershipClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Membership</span>
                </button>
                <button onClick={() => { onAboutUsClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">About Us</span>
                </button>
                <button onClick={() => { onCoworkCafeClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Cowork Cafe</span>
                </button>
                <button onClick={() => { onGiftCardsClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Gift Cards</span>
                </button>
                <button onClick={() => { onMobileAppClick(); setIsWhatIsPinned(false); }} className="px-8 py-2.5 text-left hover:bg-black/5 transition-colors group">
                  <span className="text-[16px] font-sans font-medium text-primary tracking-tight">Mobile App</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* FOR BUSINESS Dropdown */}
        <div className="relative h-full flex items-center">
          <button 
            onMouseEnter={() => setIsBusinessHovered(true)}
            onMouseLeave={() => setIsBusinessHovered(false)}
            onClick={() => setIsBusinessPinned(!isBusinessPinned)}
            className={`text-[11px] font-condensed font-black tracking-ace-wide uppercase flex items-center gap-2 hover:opacity-60 transition-opacity h-full ${showBusinessDropdown ? 'text-blue-600' : ''}`}
          >
            FOR BUSINESS <span className="material-symbols-outlined text-[18px] font-black">expand_more</span>
          </button>

          {showBusinessDropdown && (
            <div 
              onMouseEnter={() => setIsBusinessHovered(true)}
              onMouseLeave={() => setIsBusinessHovered(false)}
              className="absolute top-[calc(100%+1px)] left-0 min-w-[240px] bg-white border border-black shadow-[0_15px_60px_rgba(0,0,0,0.15)] py-4 z-[200] animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex flex-col">
                <button 
                  onClick={() => { onTeamRetreatsClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[15px] font-sans font-medium text-primary tracking-tight">Team Retreats</span>
                </button>
                <button 
                  onClick={() => { onBusinessClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[15px] font-sans font-medium text-primary tracking-tight">Business Memberships</span>
                </button>
                <button 
                  onClick={() => { onRealEstatePartnersClick(); setIsBusinessPinned(false); }}
                  className="px-8 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[15px] font-sans font-medium text-primary tracking-tight">Real Estate Partners</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button onClick={onMembershipClick} className="text-[11px] font-condensed font-black tracking-ace-wide uppercase border-b-2 border-black pb-0.5 ml-auto">BECOME A MEMBER</button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[500] bg-white flex flex-col animate-in slide-in-from-right duration-300">
           <div className="flex h-[60px] items-center justify-between px-6 border-b border-black">
              <div onClick={() => { onHomeClick(); setIsMobileMenuOpen(false); }}>
                <LogoBox size="normal" />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
           </div>
           <div className="flex-1 overflow-y-auto p-8 space-y-10">
              <div className="space-y-6">
                <button onClick={() => { onLocationsClick(true); setIsMobileMenuOpen(false); }} className="block w-full text-left text-3xl font-display uppercase tracking-tight">Locations</button>
                <button onClick={() => { onTripsClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-3xl font-display uppercase tracking-tight">Trips</button>
                <button onClick={() => { onDealsClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-3xl font-display uppercase tracking-tight">Deals</button>
                <button onClick={() => { onMembershipClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-3xl font-display uppercase tracking-tight">Membership</button>
              </div>
              <div className="h-px bg-black/10 w-full" />
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">More</p>
                <button onClick={() => { onAboutUsClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-sans font-medium">About Us</button>
                <button onClick={() => { onCoworkCafeClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-sans font-medium">Cowork Cafe</button>
                <button onClick={() => { onTeamRetreatsClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-sans font-medium">Team Retreats</button>
                <button onClick={() => { onBusinessClick(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-sans font-medium">For Business</button>
              </div>
           </div>
           <div className="p-8 border-t border-black/5 bg-[#FAF9F6]">
              <button onClick={() => { onMembershipClick(); setIsMobileMenuOpen(false); }} className="w-full bg-black text-white py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[14px] shadow-xl">
                 Become a member
              </button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
