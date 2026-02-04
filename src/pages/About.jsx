import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutBg from '../assets/hc_aerial.jpeg'; 

const About = () => {
  const offerings = [
    { title: "Competitions", text: "Test your analytical skills in our upcoming Policython." },
    { title: "Guest Speakers", text: "Hear from academics, professionals, and policymakers." },
    { title: "Internship Panels", text: "Learn from peers who have secured roles at top-tier firms." },
    { title: "Professional Development", text: "Master the skills necessary to succeed in your career." },
    { title: "Recruiting Events", text: "Participate in networking sessions with firms actively seeking talent." },
    { title: "Skills Workshops", text: "Develop your abilities utilizing  Python, R, and more." }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="bg-white font-serif overflow-x-hidden text-black">
      
      {/* Hero */}
      <section className="relative w-full h-[55vh] flex items-center justify-center px-8 overflow-hidden bg-black">
        <img 
          src={aboutBg} 
          alt="Campus" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-5xl font-medium uppercase tracking-[0.3em] text-white">
              Who We Are
            </h1>
            <div className="w-16 h-[1px] bg-white/40 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight text-black/90">
                Our Philosophy
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                RECONS believes there is great talent in our economics students. Many of them double major in other liberal arts or business majors, allowing them to tailor their own education to their unique interests, which builds a diversified pool of professionals. 
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                A wide range of industries heavily seek these students out, creating several different career paths for economics students. Therefore, we endeavor to act as a resource by hosting a wide variety of events to provide them with the knowledge and tools to navigate the recruiting process.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                We want to create a strong sense of community for economics students to connect with their peers, form relationships, and learn from each other. 
                Though we focus on opportunities targeted towards economics students, we welcome all majors to join our organization and take advantage of our resources.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* What We Offer */}
      <section className="py-32 px-8 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-widest text-black/80">What We Offer</h2>
            <div className="w-10 h-[1px] bg-black/20 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, index) => (
              <motion.div 
                key={index}
                {...fadeUp}
                className="bg-white p-12 border border-black/5 flex flex-col min-h-[280px] shadow-sm"
              >
                <h4 className="text-lg font-bold uppercase  mb-6 text-black/90">
                  {item.title}
                </h4>
                <div className="w-8 h-[2px] bg-black/10 mb-6" />
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to Initiatives */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-6">
              Explore Our Initiatives
            </h2>
            <p className="text-gray-500 font-light mb-10 leading-relaxed italic text-lg">
              Interested in seeing more of what we do? Explore our specialized projects and student-led initiatives.
            </p>
            <Link to="/initiatives">
              <button className="px-12 py-5 border border-black text-[10px] tracking-[0.5em] uppercase hover:bg-black hover:text-white transition-all duration-300">
                View Initiatives
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;