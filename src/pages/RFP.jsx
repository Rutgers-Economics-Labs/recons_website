import React from 'react';
import PageMeta from '../components/PageMeta';

const RFP = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">
      <PageMeta 
        title="Research Fellowship Program"
        description="Join a cohort of undergraduates co-authoring an academic research paper in economics at Rutgers University."
        path="/rfp"
      />
      <div className="max-w-6xl mx-auto">
        
        {/* Header*/}
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Research Fellowship Program
          </h1>
          <p className="text-xl font-serif italic text-gray-500">
            Note: The next cycle for this program begins in Fall 2026. If you are interested in leading, please email economicsrutgers@gmail.com with the subject line "RFP Leadership Interest".
          </p>
          <div className="w-32 h-2 bg-black mt-12"></div>
        </div>

        {/* Overview*/}
        <div className="mb-32">
          <p className="text-xl md:text-2xl font-serif leading-relaxed  text-gray-800 max-w-5xl">
            The Research Fellowship Program (RFP) consists of a select cohort of approximately 
            three undergraduate students led by a Managing Fellow. Together, the cohort 
            collaborates on co-authoring an original academic research paper, bridging the gap 
            between classroom theory and professional economic publication.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-40 bg-[#ececec] p-12 md:p-20 border border-black/5">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-500 mb-6">Program Structure</h2>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-xl font-serif leading-relaxed text-gray-800">
                Running over the course of one semester, cohort members study econometric 
                methods and apply them to a specific research question. The team works under the 
                guidance of a faculty advisor, holding weekly meetings to refine their data, 
                methodology, and formal writing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Academic Prerequisite</h4>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    A prerequisite for the program is having completed <span className="text-black font-bold italic">Econometrics (01:220:322)</span>. 
                    While this is the standard requirement, exceptions may be made for students demonstrating 
                    equivalent quantitative proficiency.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Application Process</h4>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    The selection process is rigorous. Applicants are typically required to 
                    submit a professional resume and may be asked to provide additional written 
                    responses or participate in an interview with the Managing Fellow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentee Application*/}
        <div className="max-w-3xl mx-auto border-2 border-black mb-24">
          <div className="p-16 bg-white flex flex-col items-center text-center min-h-[400px] justify-center">
            <h3 className="text-3xl font-serif font-medium uppercase mb-6">Fellowship Applications</h3>
            <p className="text-gray-500 font-serif leading-relaxed mb-10 max-w-md">
              Apply to join the next research cohort.
            </p>
            <button 
              disabled 
              className="w-full max-w-sm py-6 bg-gray-100 text-gray-400 border border-gray-200 font-serif uppercase text-sm tracking-[0.4em] cursor-not-allowed"
            >
              TBA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RFP;