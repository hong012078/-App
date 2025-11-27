import React, { useEffect, useRef } from 'react';
import { TripDetails } from '../types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: TripDetails | undefined;
  title: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, details, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-slide-up"
      >
        <div className="bg-teal-600 p-4 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg truncate pr-4">{title}</h3>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1 w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          {details.flightNumber && (
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Flight</span>
              <p className="text-lg font-mono font-bold text-gray-800">{details.flightNumber}</p>
            </div>
          )}
          
          {(details.hotelName || details.address) && (
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Accommodation</span>
              <p className="text-md font-bold text-gray-800">{details.hotelName}</p>
              <p className="text-sm text-gray-600">{details.address}</p>
            </div>
          )}

          {details.showTime && (
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Show Time</span>
              <p className="text-lg font-bold text-purple-600">{details.showTime}</p>
            </div>
          )}

          {details.modalContent && (
            <div className="mt-4 border-t pt-4">
               <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Details / Ticket</span>
               <div className="mt-2 bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-line font-mono">
                 {details.modalContent}
               </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;