import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

import k_latinovic from '../assets/photos/k_latinovic.jpg';
import n_karthikeyan from '../assets/photos/n_karthikeyan.jpg';
import b_horner from '../assets/photos/b_horner.jpg';
import p_shashidhar from '../assets/photos/p_shashidhar.jpg';
import s_mittal from '../assets/photos/s_mittal.jpg';

const PersonCard = ({ name, position, email, linkedin, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="w-full sm:w-[280px]"
    >
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group block bg-white border border-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full"
      >
        <div className="relative aspect-[4/5] overflow-hidden border-b border-black bg-gray-50">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
        </div>
        
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-1">
            {name}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-medium mb-3">
            {position}
          </p>
          <div className="relative h-4 w-full flex justify-center items-center">
            {/* Hover email */}
            <p className="absolute text-[10px] text-black font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 break-all px-2">
              {email}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const ReviewJournal = () => {
  const editors = [
    { 
      name: "Katarina Latinović", 
      role: "Editor in Chief", 
      img: k_latinovic, 
      email: "kl1232@scarletmail.rutgers.edu",
      link: "https://www.linkedin.com/in/katarina-latinovic-a49028288/" 
    },
    { 
      name: "Naren Karthikeyan", 
      role: "Managing Editor", 
      img: n_karthikeyan, 
      email: "nnk29@scarletmail.rutgers.edu",
      link: "https://www.linkedin.com/in/naren-karthikeyan/" 
    },
    { 
      name: "Ben Horner", 
      role: "Editor", 
      img: b_horner, 
      email: "bsh75@scarletmail.rutgers.edu",
      link: "https://www.linkedin.com/in/benjamin-horner-b8a686247/" 
    },
    { 
      name: "Prachi Shashidhar", 
      role: "Editor", 
      img: p_shashidhar, 
      email: "ps1232@scarletmail.rutgers.edu",
      link: "https://www.linkedin.com/in/prachi-shashidhar-37a895259/" 
    },
    { 
      name: "Sia Mittal", 
      role: "Editor", 
      img: s_mittal, 
      email: "sm3269@scarletmail.rutgers.edu",
      link: "https://www.linkedin.com/in/sia-mittal-9291a2264/" 
    }
  ];

  return (
    <div className="bg-white min-h-screen text-black font-serif">
      {/* Hero*/}
      <section className="pt-24 pb-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <h1 className="text-6xl md:text-7xl font-medium uppercase tracking-tighter mb-6 text-center md:text-left">
              RECONS Journal
            </h1>
            <div className="w-24 h-1.5 bg-black mb-10 mx-auto md:mx-0"></div>
            
            <p className="text-2xl leading-relaxed italic text-gray-800 mb-12 text-center md:text-left max-w-6xl">
              As the RECONS Journal, we transform undergraduate economics research papers into accessible, engaging articles for a wider audience.
            </p>
            
            <div className="space-y-6 max-w-6xl">
              <p className="text-xl md:text-2xl leading-relaxed text-black/80">
                We are looking for submissions for our inaugural issue at the end of this fall semester. If you have completed an honors thesis, a significant term paper, or independent research in economics, we invite you to submit your work.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 italic">
                We consider work from current undergraduates, as well as the Class of 2024 and 2025. Accepted papers will be edited to meet our standards for an undergraduate audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission*/}
      <section className="pb-32 px-8">
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-[#f2f2f2] border border-black p-10 md:p-16 flex flex-col shadow-sm text-center">
            <h3 className="text-3xl font-bold uppercase mb-4 tracking-tight">Spring '26 Edition</h3>
            <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
              The application deadline will be announced shortly. Start preparing your manuscript today.
            </p>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuynoU3DLPV6bf9_LD3b0r5JpMNRLeMo6jznkcpkL6ZIFKZQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-black text-white py-6 px-10 transition-all hover:bg-white hover:text-black border border-black w-full max-w-md mx-auto"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-center">
                Submit Your Paper
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="bg-white py-24 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl uppercase tracking-tight">Editorial Team</h2>
            <div className="w-12 h-[1px] bg-black/20 mt-4 mx-auto"></div>
          </div>
          
          <div className="flex flex-col gap-12 items-center">
            
            <div className="flex flex-wrap justify-center gap-12 w-full">
              {editors.slice(0, 2).map((editor, idx) => (
                <PersonCard 
                  key={editor.name}
                  index={idx}
                  name={editor.name}
                  position={editor.role}
                  image={editor.img}
                  linkedin={editor.link}
                  email={editor.email}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-12 w-full">
              {editors.slice(2).map((editor, idx) => (
                <PersonCard 
                  key={editor.name}
                  index={idx + 2}
                  name={editor.name}
                  position={editor.role}
                  image={editor.img}
                  linkedin={editor.link}
                  email={editor.email}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="italic text-lg opacity-80 text-center md:text-left">Questions regarding the journal?</p>
          <a href="mailto:economicsrutgers@gmail.com" className="flex items-center gap-3 uppercase tracking-widest text-[10px] font-bold border-b border-white/30 pb-1 hover:border-white transition-all">
            <Mail size={14} /> Contact Editorial Staff
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReviewJournal;