const DRP = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header*/}
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Directed Reading Program
          </h1>
          <p className="text-xl font-serif italic text-gray-500">
            Note: We are still looking for someone to run this program. If interested, please email economicsrutgers@gmail.com with the subject line "DRP Leadership Interest".
          </p>
          <div className="w-32 h-2 bg-black mt-12"></div>
        </div>

        {/* Overview*/}
        <div className="mb-32">
          <p className="text-xl md:text-2xl font-serif leading-relaxed  text-gray-800 max-w-5xl">
            Modeled after the Rutgers Math Department Directed Reading Program (DRP), 
            RECONS seeks to launch its own DRP which matches graduate economics students with an undergraduate student interested 
            in a self study of a topic in economics. Participation does not grant credit and is not reflected on a student's transcript.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-40 bg-[#ececec] p-12 md:p-20 border border-black/5">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-500 mb-6">Program Requirements</h2>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-xl font-serif leading-relaxed text-gray-800">
                Each semester, students apply to be matched with a graduate mentor for weekly meetings on a topic 
                mutually decided by the pairing. These sessions are flexible, ranging from informal discussions 
                and small lectures to deep-dives into specific academic papers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Commitment</h4>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    In addition to the weekly meeting, students commit approximately five hours of self-study 
                    per week—typically spent reading a textbook or assigned literature—to ensure meaningful 
                    progression through the topic.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Prerequisites</h4>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    Designed to introduce students to formal research, this program requires the prior 
                    completion of <span className="text-black font-bold italic">Econometrics (01:220:322)</span>. 
                    Applicants should have a clear sense of their specific research interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application */}
        <div className="flex flex-col md:flex-row border-2 border-black mb-24">
          {/* Mentee Side */}
          <div className="md:w-1/2 p-16 border-b-2 md:border-b-0 md:border-r-2 border-black bg-white flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="text-3xl font-serif font-medium uppercase mb-6 ">Mentee Applications</h3>
              <p className="text-gray-500 font-serif leading-relaxed mb-8">
                Join the program as a learner. Gain insights into economic 
                theories and build a relationship with a dedicated mentor.
              </p>
            </div>
            <button 
              disabled 
              className="w-full py-6 bg-gray-100 text-gray-400 border border-gray-200 font-serif uppercase text-sm tracking-[0.4em] cursor-not-allowed transition-all"
            >
              Applications TBA
            </button>
          </div>

          {/* Mentor Side */}
          <div className="md:w-1/2 p-16 bg-white flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="text-3xl font-serif font-medium uppercase mb-6 ">Mentor Applications</h3>
              <p className="text-gray-500 font-serif leading-relaxed mb-8">
                Lead a semester of discovery. Share your expertise with a motivated 
                student and contribute to the academic culture of the department.
              </p>
            </div>
            <button 
              disabled 
              className="w-full py-6 bg-gray-100 text-gray-400 border border-gray-200 font-serif uppercase text-sm tracking-[0.4em] cursor-not-allowed transition-all"
            >
              Applications TBA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DRP;