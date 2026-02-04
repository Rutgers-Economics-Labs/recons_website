import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DualPane = ({ 
  title, 
  slides, 
  bgColor = "bg-[#fafafa]", 
  reverse = false 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const activeSlide = slides[currentSlide];

  return (
    <section className={`w-full ${bgColor} border-b border-black/10`}>
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row min-h-[500px] ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Title Pane */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-black uppercase text-center max-w-xs">
            {title}
          </h2>
        </div>

        {/* Info Pane */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 relative">
          <div className="w-full flex flex-col min-h-[250px]">
            
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-800">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {activeSlide.link && (
                <a 
                  href={activeSlide.link}
                  className="w-max border-b border-black pb-1 text-[11px] font-serif uppercase tracking-[0.2em] hover:text-gray-500 hover:border-gray-500 transition-all"
                >
                  {activeSlide.buttonLabel || "Learn More"}
                </a>
              )}

              {slides.length > 1 && (
                <div className="flex items-center gap-4">
                  <button onClick={prevSlide} className="text-lg hover:opacity-50 transition-opacity">←</button>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400">
                    0{currentSlide + 1} / 0{slides.length}
                  </span>
                  <button onClick={nextSlide} className="text-lg hover:opacity-50 transition-opacity">→</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPane;