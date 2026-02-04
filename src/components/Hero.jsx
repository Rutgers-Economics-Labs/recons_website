import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import img1 from '../assets/carousel/brooklyn_bridge.jpeg';
import img2 from '../assets/carousel/chicago_riverwalk.jpeg';
import img3 from '../assets/carousel/hong_kong.jpeg';
import img4 from '../assets/carousel/london_aerial.jpeg';
import img5 from '../assets/carousel/singapore_skyline.jpeg';
import img6 from '../assets/carousel/tokyo_skyline.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Transition every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 20000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden font-serif">
      {/* Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }} 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[index]})` }}
          >
            <motion.div 
              animate={{ scale: 1.15 }}
              transition={{ duration: 20, ease: "linear" }}
              className="absolute inset-0 bg-inherit"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent opacity-90 z-10" />
      </div>

      {/* Typography */}
      <div className="relative z-10 h-full w-full">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-8 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              <h1 className="text-[14vw] md:text-[clamp(5rem,8vw,7.5rem)] leading-[0.85] tracking-tighter uppercase text-white font-medium">
                Rutgers <br />
                <span 
                  className="italic text-transparent" 
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}
                >
                  Economics
                </span> <br />
                Society
              </h1>
              <div className="absolute -left-8 top-0 w-[2px] h-full bg-white/40 hidden md:block" />
            </div>

            <div className="mt-12 max-w-xl">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed italic mb-12">
                A professional organization run by driven and successful economics students at Rutgers University.
              </p>

              {/* GetInvolved */}
              <a 
                href="https://rutgers.campuslabs.com/engage/organization/recons" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-10 px-10 py-5 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-700"
              >
                <span className="uppercase text-[10px] tracking-[0.6em] font-bold">Join</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 z-10 w-full">
        <div className="max-w-6xl mx-auto px-8 md:px-12 flex justify-end">
          <div className="flex gap-2">
            {images.map((_, i) => (
              <div 
                key={i}
                className={`h-[2px] transition-all duration-1000 ${i === index ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;