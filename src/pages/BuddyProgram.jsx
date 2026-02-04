import React from 'react';

const BuddyProgram = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Buddy Program
          </h1>
          
          <div className="w-32 h-2 bg-black mt-12"></div>
        </div>

        {/* Expanded Overview Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-800">
                Connecting underclassmen with an experienced upperclassman,
                 the Buddy Program helps students navigate the economics major and sets them up
                  for success in job hunting and expanding their network.
              </p>
              <p className="mt-8 text-lg text-gray-600 font-serif leading-relaxed">
                Designed to build strong, lasting relationships between mentors
                 and mentees within the economics community, the program focuses
                  on holistic development. Participants become part of a close-knit network
                   of students who support one another academically and personally.
                    By sharing experiences and lessons learned, mentors help incoming undergraduates feel connected, informed, and supported.
              </p>
            </div>
            
            
          </div>
        </div>

       

        {/* Requirements */}
        <div className="mb-48">
          <div className="max-w-4xl mx-auto">
            {/* Header & Subheading */}
            <div className="mb-20 text-center">
              <h3 className="text-2xl md:text-4xl font-serif font-medium uppercase tracking-tighter mb-6">
                What makes a strong mentor?
              </h3>
              <p className="text-xl font-serif italic text-gray-500 leading-relaxed max-w-2xl mx-auto">
                We seek mentors who are not just high-achievers, but empathetic guides committed to the success of their peers.
              </p>
            </div>
            
            {/* List Section */}
            <div className="space-y-0">
              {[
                { 
                  label: "Academic Standing", 
                  text: "At least a third-year undergraduate student with a strong cumulative GPA." 
                },
                { 
                  label: "Curriculum Mastery", 
                  text: "Successful completion of the Economics Major Core: Intro/Intermediate Macro and Micro, and Econometrics." 
                },
                { 
                  label: "Campus Presence", 
                  text: "Active involvement on campus, with a strong preference for leaders in Economics-related organizations or research groups." 
                },
                { 
                  label: "Professional Experience", 
                  text: "Previous internship or work experience to give insight to mentees on navigating career paths." 
                },
                { 
                  label: "Program Commitment", 
                  text: "A dedication to regular 1-on-1 meetings with mentees and attendance at mandatory Buddy Program community events." 
                }
              ].map((item, idx) => (
                <div key={idx} className="group border-t border-black py-12 flex flex-col md:flex-row gap-8 transition-colors hover:bg-black/5">
                  <div className="md:w-16 text-5xl font-serif italic text-gray-200 group-hover:text-black transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-gray-400 group-hover:text-black transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-2xl font-serif text-gray-700 leading-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-black w-full"></div>
            </div>
          </div>
        </div>

        

        {/* Application Section */}
        <div className="max-w-3xl mx-auto border-2 border-black mb-24 transition-all hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-12 md:p-16 bg-white flex flex-col items-center text-center">
            <h3 className="text-3xl font-serif font-medium uppercase mb-6 ">
              Join the Buddy Program
            </h3>
            <p className="text-gray-500 font-serif leading-relaxed mb-10 max-w-lg">
              Whether you are looking to share your experiences as a mentor or seeking 
              guidance as a mentee, our application process is the first step toward 
              building a stronger academic community. Please complete the form below to 
              be considered for the upcoming semester's cohort.
            </p>
            
            <a 
              href="https://forms.gle/TytcTJeWBmR1Jt3y9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-md group"
            >
              <button className="w-full py-6 bg-black text-white border border-black font-serif uppercase text-sm tracking-[0.4em] transition-all group-hover:bg-white group-hover:text-black">
                Open Application Form
              </button>
            </a>
            
            <span className="mt-4 text-[10px] uppercase tracking-widest text-gray-400">
              External Link: Google Forms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddyProgram;