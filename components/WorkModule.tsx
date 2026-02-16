
import React from 'react';

interface WorkModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkModule: React.FC<WorkModuleProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-end pointer-events-none">
      <div 
        className="fixed inset-0 bg-black/5 pointer-events-auto" 
        onClick={onClose}
      />
      <div className="w-full max-w-md h-full bg-white/95 backdrop-blur-xl shadow-[-20px_0_50px_rgba(0,0,0,0.1)] p-12 pointer-events-auto animate-in slide-in-from-right duration-500 border-l border-ace-border">
        <div className="flex justify-between items-center mb-16">
          <span className="label-bold !text-xl">PRODUCTIVITY HUB</span>
          <button onClick={onClose} className="p-2 hover:bg-ace-gray rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-4xl font-display mb-8">Current Environment</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ace-gray p-6 rounded-lg">
                <span className="material-symbols-outlined text-ace-orange mb-3">wifi</span>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Network</p>
                <p className="text-xl font-bold">480 Mbps</p>
              </div>
              <div className="bg-ace-gray p-6 rounded-lg">
                <span className="material-symbols-outlined text-ace-orange mb-3">desk</span>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Desks Open</p>
                <p className="text-xl font-bold">12 Free</p>
              </div>
            </div>
          </div>

          <div className="border-t border-ace-border pt-12">
            <h3 className="text-2xl font-display mb-6">Notebook & Tasks</h3>
            <div className="space-y-4">
              {['Design review at 2 PM', 'Surfing group lesson', 'Member dinner RSVP'].map((task, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-ace-border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-ace-orange" />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-primary">{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <button className="w-full py-6 bg-primary text-white label-bold !text-xl hover:bg-primary/90 transition-all">
              OPEN COMMUNITY SLACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModule;
