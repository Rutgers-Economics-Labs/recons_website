import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import e_wenz from '../assets/photos/ewenz.jpg';
import n_faruk from '../assets/photos/n_faruk.jpg';
import p_wolfsohn from '../assets/photos/p_wolfsohn.jpg';
import j_rhodes from '../assets/photos/j_rhodes.jpg';
import k_jain from '../assets/photos/k_jain.jpg';
import a_dubey from '../assets/photos/a_dubey.png';
import k_latinovic from '../assets/photos/k_latinovic.jpg';
import s_garud from '../assets/photos/s_garud.jpg';
import s_pundru from '../assets/photos/s_pundru.jpg';
import s_parsa from '../assets/photos/s_parsa.jpg';
import c_dsouza from '../assets/photos/cdsouza.jpg';
import b_abrams from '../assets/photos/babrams.jpg';
import a_hinks from '../assets/photos/a_hinks.jpg';

const PersonCard = ({ name, position, email, linkedin, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[240px]"
    >
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group block bg-white border border-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full"
      >
        <div className="relative aspect-[4/5] overflow-hidden border-b border-black">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
        
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-1">
            {name}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-medium mb-3">
            {position}
          </p>
          <p className="text-[10px] text-black/60 font-light italic truncate w-full px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {email}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

const People = () => {
  const executiveBoard = [
    { name: "Eric Wenz", position: "President", email: "ecw79@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/ericwenz/", image: e_wenz },
    { name: "Nashwa Faruk", position: "Treasurer", email: "nf369@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/nashwa-faruk/", image: n_faruk },
    { name: "Julia Rhodes", position: "Secretary", email: "jr1896@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/julia-o-rhodes/", image: j_rhodes },
    { name: "Peleg Wolfsohn", position: "Competitions Coordinator", email: "pw342@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/peleg-wolfsohn-124b14277/", image: p_wolfsohn },
    { name: "Shruthika Parsa", position: "Director of Marketing", email: "sp2222@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/shruthikaparsa/", image: s_parsa },
    { name: "Benjamin Abrams", position: "Director of Communications", email: "benjamin.abrams@rutgers.edu", linkedin: "https://www.linkedin.com/in/benjamin-abrams-ru/", image: b_abrams},
    { name: "Christopher Dsouza", position: "Website Coordinator", email: "cd1001@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/cdsouza1001/", image: c_dsouza },
  ];

  const initiativeLeaders = [
    { name: "Annabelle Hinks", position: "DRP Coordinator", email: "ajh291@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/annabelle-hinks/", image: a_hinks },
    { name: "Katarina Latinović", position: "Research Journal Editor-In-Chief", email: "kl1232@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/katarina-latinovic-a49028288/", image: k_latinovic },
    { name: "Kushaan Jain", position: <a href="https://www.rutgerseconomics.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">REL President</a>, email: "kj448@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/kushaanjain/", image: k_jain },
    { name: "Akash Dubey", position: <a href="https://www.rutgerseconomics.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">REL Research Director</a>, email: "ad2046@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/akash-dubey-your-boss/", image: a_dubey },
    { name: "Salil Garud", position: "Newsletter Co-Editor-In-Chief", email: "ssg163@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/salilgarud/", image: s_garud },
    { name: "Sanjana Pundru", position: "Newsletter Co-Editor-In-Chief", email: "sp2425@scarletmail.rutgers.edu", linkedin: "https://www.linkedin.com/in/sanjana-pundru/", image: s_pundru},
  ];

  return (
    <div className="bg-white min-h-screen font-serif">
      <PageMeta 
        title="People"
        description="Meet the RECONS Executive Board and Initiative Leaders at Rutgers University, including our President, Treasurer, REL President, and other dedicated team members."
        path="/people"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-black/5 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-medium uppercase tracking-tighter text-black">The Team</h1>
            <div className="w-12 h-[2px] bg-black mt-6"></div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-20 px-8">
        
        {/* Executive Board */}
        <div className="mb-24">
          <h2 className="text-xl uppercase tracking-[0.2em] font-medium border-l-4 border-black pl-4 mb-12">
            Executive Board
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {executiveBoard.map((person, i) => (
              <PersonCard key={`board-${i}`} {...person} index={i} />
            ))}
          </div>
        </div>

        {/* Initiative Leaders */}
        <div>
          <h2 className="text-xl uppercase tracking-[0.2em] font-medium border-l-4 border-black pl-4 mb-12">
            Initiative Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {initiativeLeaders.map((person, i) => (
              <PersonCard key={`lead-${i}`} {...person} index={i} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default People;