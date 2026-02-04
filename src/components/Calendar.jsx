import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { CLUB_EVENTS } from '../data/events';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Set default state to the first day of the current month
  const [viewDate, setViewDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  useEffect(() => {
    if (selectedDate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedDate]);

 // Logic
  const monthName = viewDate.toLocaleString('default', { month: 'long' });
  const monthIdx = viewDate.getMonth();
  const year = viewDate.getFullYear();
  const now = new Date();
  
  const isCurrentMonth = now.getMonth() === monthIdx && now.getFullYear() === year;
  const todayDate = now.getDate();

  // Jan to May navigation only
  const nextMonth = () => { if (monthIdx < 4) setViewDate(new Date(year, monthIdx + 1, 1)); };
  const prevMonth = () => { if (monthIdx > 0) setViewDate(new Date(year, monthIdx - 1, 1)); };

  const firstDayOfMonth = new Date(year, monthIdx, 1).getDay();
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <>
      <section className="relative z-10 py-20 px-8 bg-white font-serif">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tighter text-black/90">Calendar</h2>
              <div className="w-16 h-[2px] bg-black mt-4"></div>
            </motion.div>

            <div className="flex items-center gap-6 border-b border-black pb-2">
              <button 
                onClick={prevMonth} 
                disabled={monthIdx === 0} 
                className={`transition-opacity ${monthIdx === 0 ? 'opacity-10' : 'hover:opacity-50'}`}
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <span className="text-lg uppercase tracking-[0.3em] font-light min-w-[220px] text-center">
                {monthName} {year}
              </span>
              <button 
                onClick={nextMonth} 
                disabled={monthIdx === 4} 
                className={`transition-opacity ${monthIdx === 4 ? 'opacity-10' : 'hover:opacity-50'}`}
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-7 w-full border-t border-l border-black">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="border-r border-b border-black p-3 text-[9px] uppercase tracking-[0.3em] text-black font-bold bg-gray-50 text-center">
                {d}
              </div>
            ))}
            
            {blanks.map(i => (
              <div key={`blank-${i}`} className="h-20 md:h-24 border-r border-b border-black bg-[#fafafa]" />
            ))}
            
            {days.map(day => {
              const dateStr = `${year}-${(monthIdx + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              const event = CLUB_EVENTS[dateStr];
              const isToday = isCurrentMonth && day === todayDate;

              return (
                <div 
                  key={day}
                  onClick={() => event && setSelectedDate({ day, monthName, ...event })}
                  className={`h-20 md:h-24 border-r border-b border-black p-3 relative group transition-all duration-300
                    ${event ? 'cursor-pointer hover:bg-black' : ''}
                    ${isToday ? 'bg-gray-100' : ''}`}
                >
                  <span className={`text-xs font-medium ${event ? 'group-hover:text-white' : 'text-black/40'} ${isToday ? 'text-black font-bold underline' : ''}`}>
                    {day}
                  </span>
                  {event && (
                    <div className="absolute inset-x-2 bottom-3">
                      <div className="hidden md:block text-[8px] uppercase tracking-tighter leading-tight text-black group-hover:text-white line-clamp-1 italic">
                        {event.title}
                      </div>
                      <div className="md:hidden w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedDate && (
          <div className="fixed inset-0 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md" style={{ zIndex: 9999 }}>
            <div className="absolute inset-0" onClick={() => setSelectedDate(null)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white border border-black p-12 md:p-16 shadow-2xl text-center z-10"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 block mb-8">Event Details</span>
              <h3 className="text-4xl font-medium uppercase tracking-tighter mb-8 leading-tight">{selectedDate.title}</h3>
              
              <div className="grid grid-cols-3 gap-6 mb-10 text-[10px] uppercase tracking-widest border-y border-black/10 py-6 text-black">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400">Date</span>
                  <span className="font-bold">{selectedDate.monthName} {selectedDate.day}</span>
                </div>
                <div className="flex flex-col gap-2 border-x border-black/10 px-2">
                  <span className="text-gray-400">Time</span>
                  <span className="font-bold">{selectedDate.time}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400">Location</span>
                  <span className="font-bold">{selectedDate.location}</span>
                </div>
              </div>

              <p className="text-gray-600 italic leading-relaxed text-lg mb-12 px-6">{selectedDate.desc}</p>
              
              <button 
                onClick={() => setSelectedDate(null)}
                className="w-full py-5 bg-black text-white text-[11px] tracking-[0.5em] uppercase hover:bg-gray-800 transition-colors"
              >
                Return to Calendar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Calendar;