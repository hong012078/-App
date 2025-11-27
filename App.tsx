import React, { useState } from 'react';
import { TRIP_DATA } from './constants';
import { TripDetails } from './types';
import InfoModal from './components/InfoModal';
import AIChat from './components/AIChat';

function App() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [modalData, setModalData] = useState<{ isOpen: boolean; details?: TripDetails; title: string }>({
    isOpen: false,
    details: undefined,
    title: ''
  });

  const handleOpenModal = (details: TripDetails, title: string) => {
    setModalData({ isOpen: true, details, title });
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-slate-50">
      
      {/* Header / Hero */}
      <header className="relative bg-teal-800 text-white pb-20 pt-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-2 tracking-tight drop-shadow-md">
            {TRIP_DATA.tripName}
          </h1>
          <p className="text-teal-100 text-sm md:text-lg max-w-2xl mx-auto opacity-90">
             Da Nang & Hoi An • 6 Days Trip
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 md:px-4 -mt-12 relative z-20">
        
        {/* Day Selector (Sticky) */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 -mx-3 px-3 md:mx-0 md:px-2 md:rounded-2xl md:border md:shadow-lg md:top-4 md:mb-8 flex overflow-x-auto snap-x scrollbar-hide">
          {TRIP_DATA.days.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`flex-shrink-0 snap-center px-4 py-2 rounded-xl transition-all duration-300 mr-2 min-w-[80px] flex flex-col items-center justify-center border ${
                activeDay === day.day
                  ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                  : 'bg-white border-transparent text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{day.dateName}</span>
              <span className="font-bold whitespace-nowrap text-sm">{day.location.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Itinerary Cards */}
        <div className="space-y-6 pt-4 pb-12">
          {TRIP_DATA.days.map((day) => (
            <div 
              key={day.day}
              className={`transition-all duration-500 ${activeDay === day.day ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'}`}
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-4 md:p-6 text-white flex justify-between items-center">
                   <div>
                       <h2 className="text-xl md:text-2xl font-bold">{day.location}</h2>
                       <p className="opacity-90 font-medium text-xs md:text-base">Itinerary for {day.dateName}</p>
                   </div>
                   <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                       <span className="text-xl">🇻🇳</span>
                   </div>
                </div>

                <div className="p-2 md:p-6 divide-y divide-gray-100">
                  {day.activities.map((activity, idx) => (
                    <div key={idx} className="py-4 md:py-6 px-2 md:px-4 active:bg-gray-50 transition-colors rounded-xl">
                      <div className="flex gap-3 md:gap-4">
                        {/* Time & Icon */}
                        <div className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
                           <span className="text-[10px] md:text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-full mb-2 whitespace-nowrap">
                             {activity.timeLabel}
                           </span>
                           <div className="text-2xl md:text-3xl filter drop-shadow-sm">{activity.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight mb-1">
                            {activity.title}
                            {activity.mapLink && (
                               <a 
                                 href={activity.mapLink} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="inline-block ml-2 text-teal-500 p-1"
                                 title="Open in Maps"
                               >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                               </a>
                            )}
                          </h3>
                          
                          {activity.subtitle && (
                            <p className="text-gray-600 mb-2 font-medium text-sm">{activity.subtitle}</p>
                          )}

                          <div className="flex flex-wrap gap-2 mb-3">
                            {activity.meal && (
                              <span className="text-[10px] md:text-xs flex items-center gap-1 text-gray-500 border border-gray-200 px-2 py-1 rounded bg-gray-50">
                                🍽️ {activity.meal}
                              </span>
                            )}
                            {activity.accommodation && activity.accommodation !== '無' && (
                              <span className="text-[10px] md:text-xs flex items-center gap-1 text-gray-500 border border-gray-200 px-2 py-1 rounded bg-gray-50">
                                🛏️ {activity.accommodation}
                              </span>
                            )}
                          </div>

                          {/* Action Button for Details */}
                          {activity.details && (
                            <button
                              onClick={() => handleOpenModal(activity.details!, activity.title)}
                              className="mt-1 w-full md:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 hover:bg-teal-100 px-4 py-2 rounded-lg transition-colors"
                            >
                              <span>View Details</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            </button>
                          )}

                          {/* Recommendations List */}
                          {activity.recommendations && (
                            <div className="mt-4 grid grid-cols-1 gap-2">
                              {activity.recommendations.map((rec, rIdx) => (
                                <a 
                                  key={rIdx}
                                  href={rec.mapLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group block p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-white hover:border-orange-300 hover:shadow-sm transition-all"
                                >
                                  <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{rec.name}</h4>
                                    <svg className="w-4 h-4 text-gray-300 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1 truncate">{rec.address}</p>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <InfoModal 
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        details={modalData.details}
        title={modalData.title}
      />
      
      <AIChat />
    </div>
  );
}

export default App;