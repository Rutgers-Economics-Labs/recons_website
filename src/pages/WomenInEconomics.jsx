import React from "react";
import PageMeta from "../components/PageMeta";

const WiE = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">
      <PageMeta
        title="Women in Economics"
        description="Women in Economics is a RECONS initiative focused on community, mentorship, and professional development for women interested in economics."
        path="/wie"
      />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Women in Economics
          </h1>

          <p className="text-xl font-serif italic text-gray-500">
            Community. Mentorship. Professional Development.
          </p>

          <div className="w-32 h-2 bg-black mt-12"></div>
        </div>


        {/* Overview */}
        <div className="mb-32">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-800 max-w-5xl">
            Women in Economics is a student-led organization built around
            community, mentorship, and professional development for women
            interested in economics.
          </p>

          <p className="mt-8 text-lg text-gray-600 font-serif leading-relaxed max-w-4xl">
            Our goal is to bring more women into the Economics major and help
            students understand the opportunities available after graduation,
            whether that means industry, research, or academia. By creating a
            space centered specifically on women in economics, we connect
            students with mentors, career opportunities, and one another so
            that the field feels more accessible and supportive.
          </p>
        </div>


        {/* Mission */}
        <div className="mb-32 bg-[#ececec] p-12 md:p-20 border border-black/5">
          <div className="flex flex-col md:flex-row gap-16">

            <div className="md:w-1/3">
              <h2 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-500 mb-6">
                Our Mission
              </h2>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>

            <div className="md:w-2/3">
              <p className="text-xl font-serif leading-relaxed text-gray-800">
                We aim to make economics more approachable by building a
                supportive community where students can learn from one another,
                develop professionally, and explore the many paths an economics
                education can lead to.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pt-10 border-t border-black/10">

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
                    Community
                  </h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    Connect with other students interested in economics and
                    build meaningful relationships.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
                    Mentorship
                  </h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    Learn from peers and mentors who can provide guidance
                    throughout your academic and professional journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
                    Development
                  </h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed">
                    Explore opportunities across industry, research, and
                    academia while developing skills for what comes next.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Connect */}
        <div className="max-w-3xl mx-auto border-2 border-black mb-24 transition-all hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-12 md:p-16 bg-white flex flex-col items-center text-center">

            <h3 className="text-3xl font-serif font-medium uppercase mb-6">
              Stay Connected
            </h3>

            <p className="text-gray-500 font-serif leading-relaxed mb-10 max-w-lg">
              Follow Women in Economics for updates on events, opportunities,
              and ways to get involved.
            </p>

            <a
              href="https://www.instagram.com/rutgerswie/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md group"
            >
              <button className="w-full py-6 bg-black text-white border border-black font-serif uppercase text-sm tracking-[0.3em] transition-all group-hover:bg-white group-hover:text-black">
                @rutgerswie
              </button>
            </a>

            <span className="mt-4 text-[10px] uppercase tracking-widest text-gray-400">
              Instagram
            </span>

          </div>
        </div>


      </div>
    </div>
  );
};

export default WiE;