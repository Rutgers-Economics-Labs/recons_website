import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Calendar from '../components/Calendar';
import FAQ from '../components/FAQ';
import { CLUB_EVENTS } from '../data/events';

const MailingList = () => {
  return (
    <section className="py-32 px-8 bg-[#f2f2f2] border-t border-black/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="mb-16 text-center">
          <h3 className="text-4xl md:text-5xl uppercase tracking-tighter font-serif">
            Join our mailing list
          </h3>
          <div className="w-16 h-[2px] bg-black mt-8 mx-auto"></div>
        </div>

        {/* Container */}
        <div className="w-full max-w-3xl">
          <form 
            action="https://weebly.us15.list-manage.com/subscribe/post?u=e7911be6e88b1072020be10f5&id=c3d7ea720f&f_id=006176e0f0" 
            method="post" 
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="space-y-12"
          >
            {/* Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2 text-center md:text-left">
                <label htmlFor="mce-FNAME" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 block">First Name *</label>
                <input 
                  type="text" name="FNAME" id="mce-FNAME" required 
                  className="w-full py-4 border-b border-black/20 bg-transparent focus:border-black transition-all outline-none font-serif text-lg text-center md:text-left"
                  placeholder="First"
                />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <label htmlFor="mce-LNAME" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 block">Last Name *</label>
                <input 
                  type="text" name="LNAME" id="mce-LNAME" required
                  className="w-full py-4 border-b border-black/20 bg-transparent focus:border-black transition-all outline-none font-serif text-lg text-center md:text-left"
                  placeholder="Last"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2 text-center md:text-left">
              <label htmlFor="mce-EMAIL" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 block">Email Address *</label>
              <input 
                type="email" name="EMAIL" id="mce-EMAIL" required 
                className="w-full py-4 border-b border-black/20 bg-transparent focus:border-black transition-all outline-none font-serif text-lg text-center md:text-left"
                placeholder="first.last@email.com"
              />
            </div>

            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_e7911be6e88b1072020be10f5_c3d7ea720f" tabIndex="-1" value="" readOnly />
            </div>

            {/* Submit*/}
            <div className="pt-4 flex justify-center">
              <button 
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="px-12 py-5 border border-black text-[10px] tracking-[0.5em] uppercase hover:bg-black hover:text-white transition-all duration-300 bg-transparent text-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const getNextEvent = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedDates = Object.keys(CLUB_EVENTS).sort();
    const nextDateStr = sortedDates.find(dateStr => {
      const eventDate = new Date(dateStr + "T00:00:00");
      return eventDate >= today;
    });

    return nextDateStr ? { dateStr: nextDateStr, ...CLUB_EVENTS[nextDateStr] } : null;
  };

  const nextEvent = getNextEvent();

  const formatTitle = (title) => {
    const parts = title.split(' ');
    if (parts.length <= 1) return title;
    return <>{parts[0]}<br />{parts.slice(1).join(' ')}</>;
  };

  return (
    <div className="bg-[#fafafa] font-serif relative">
      <Hero />

      {/* Mission */}
      <section className="relative z-10 py-32 px-8 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tighter text-black/90">
                Our Mission
              </h2>
              <div className="w-16 h-[2px] bg-black mt-6"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light mb-12">
                We aim to act as a resource for economics students by hosting a variety of events and initiatives
                to provide them with the knowledge and tools to 
                navigate the recruiting process successfully.
              </p>

              <Link to="/about">
                <button className="px-12 py-5 border border-black text-[10px] tracking-[0.5em] uppercase hover:bg-black hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="relative z-10 py-32 px-8 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-end text-right"
          >
            <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tighter text-black/90">
              Upcoming
            </h2>
            <div className="w-16 h-[2px] bg-black mt-6"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-end mb-20"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light text-right max-w-3xl">
              See the details for the club's next event. These are distinct from any 
              meetings specific club initiatives may hold.
            </p>
          </motion.div>

          {nextEvent ? (
            <div className="w-full bg-white border border-black p-10 md:p-16 flex flex-col md:flex-row justify-between gap-12 relative shadow-sm self-end">
              <div className="relative z-10 flex-1 text-left text-black">
                <h4 className="text-4xl md:text-5xl font-medium uppercase tracking-tighter leading-[0.9] mb-6">
                  {formatTitle(nextEvent.title)}
                </h4>
                <p className="text-gray-500 font-light max-w-sm italic">
                  {nextEvent.desc}
                </p>
              </div>

              <div className="relative z-10 flex flex-col justify-center space-y-4 min-w-[240px] pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-black/10 md:pl-12 text-left text-black">
                <div className="flex items-center gap-4">
                  <CalendarIcon size={18} strokeWidth={1.5} className="text-gray-400" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">
                    {new Date(nextEvent.dateStr + "T00:00:00").toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock size={18} strokeWidth={1.5} className="text-gray-400" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">{nextEvent.time} EST</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={18} strokeWidth={1.5} className="text-gray-400" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">{nextEvent.location}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white border border-black p-10 text-center italic text-gray-400 uppercase tracking-widest self-end">
              Check back soon for upcoming events
            </div>
          )}
        </div>
      </section>

      <Calendar />
      <MailingList />
      <FAQ />
      
    </div>
  );
};

export default Home;