
import React from 'react';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const amenities = [
    { icon: 'work', text: 'Dedicated Workspaces' },
    { icon: 'groups', text: 'Community Events' },
    { icon: 'bed', text: 'Bedroom linens' },
    { icon: 'air', text: 'Hairdryers' },
    { icon: 'wifi', text: 'High-speed WiFi' },
    { icon: 'cleaning_services', text: 'Weekly housekeeping' },
    { icon: 'wb_sunny', text: 'Outdoor space' },
    { icon: 'tv', text: 'Smart TV' },
    { icon: 'door_front', text: 'Secure building entry' },
    { icon: 'check_circle', text: 'Self check in' },
    { icon: 'ac_unit', text: 'A/C in rooms' },
    { icon: 'layers', text: 'Towels' },
    { icon: 'lock', text: 'Room door locks' },
    { icon: 'desk', text: 'Desks in all rooms' },
    { icon: 'local_laundry_service', text: 'Laundry on-site' },
    { icon: 'print', text: 'Printer' },
    { icon: 'soap', text: 'Soaps and shampoos' },
  ];

  return (
    <div 
      className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#F9F9F8] w-full max-w-[700px] rounded-xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-10 pt-10 pb-8">
          <h2 className="text-3xl font-sans font-semibold text-[#1A1A1A]">Property Amenities</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl font-light">close</span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="px-10 pb-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {amenities.map((item, i) => (
            <div key={i} className="flex items-center gap-5 group">
              <span className="material-symbols-outlined text-[#1A1A1A] text-2xl font-light shrink-0">
                {item.icon}
              </span>
              <span className="text-[15px] font-sans font-normal text-[#1A1A1A]/80">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
