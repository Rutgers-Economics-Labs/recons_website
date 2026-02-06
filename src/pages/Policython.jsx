import { ExternalLink } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const DetailItem = ({ label, value }) => (
  <div className="border-b border-black/10 py-4 flex justify-between items-center">
    <span className="text-xs font-serif uppercase tracking-widest text-gray-400">{label}</span>
    <span className="text-lg font-serif text-black">{value}</span>
  </div>
);

const Policython = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen text-black">
      <PageMeta 
        title="Policython"
        description="The first interdisciplinary, data-driven policy competition at Rutgers, bringing students together to address challenges facing New Jersey residents."
        path="/policython"
      />
      <div className="max-w-6xl mx-auto pt-20 pb-12 px-8">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-medium uppercase tracking-tighter mb-6">
            Policython
          </h1>
          <div className="w-24 h-1.5 bg-black mb-10"></div>
        </div>

        {/* Overview & Key Details */}
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="md:w-2/3 flex flex-col justify-between items-start">
            <p className="text-2xl font-serif leading-relaxed italic text-gray-800 mb-12">
              The first of its kind at Rutgers, the Policython is a student-led initiative designed to offer an interdisciplinary, data-driven policy competition that brings students together to address challenges facing New Jersey residents through research, collaboration, and innovation.
            </p>
            
            <div className="px-12 py-5 bg-gray-100 text-gray-400 border border-gray-200 font-serif uppercase text-[10px] tracking-[0.5em] cursor-default">
              Sign ups coming soon
            </div>
          </div>

          <div className="md:w-1/3 bg-white border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] self-start">
            <h3 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-400 mb-6">Key Details</h3>
            <DetailItem label="Date" value="Mid April" />
            <DetailItem label="Team Size" value="Up to 5 Students" />
            <DetailItem label="Location" value="TBA" />
          </div>
        </div>
      </div>

      {/* Why Participate*/}
      <section className="bg-[#f2f2f2] py-24 px-8 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-4xl md:text-5xl uppercase tracking-tighter font-serif">
              Why Participate?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Authentic Data", desc: "Work on real policy challenges using authentic data sets from partnering organizations." },
              { title: "Practical Skills", desc: "Master high-demand skills in data visualization, economic forecasting, and technical policy writing." },
              { title: "Diverse Teams", desc: "Collaborate with peers pursuing different majors like Economics, Statistics, Public Policy, and Computer Science." },
              { title: "High Visibility", desc: "Showcase your analytical talent directly to professors and field experts." },
              { title: "Recognition", desc: "Compete for honors across multiple specialized categories." },
              { title: "Professionalism", desc: "Refine your executive presence through public speaking and presentations through multiple mediums." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-black p-10 flex flex-col h-full"
              >
                <h4 className="text-xl font-serif font-bold uppercase mb-4 tracking-tight">
                  {item.title}
                </h4>
                <div className="w-8 h-[1px] bg-black/20 mb-6"></div>
                <p className="text-gray-600 font-serif text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-24 px-8">
        <div className="flex flex-col md:flex-row border-2 border-black">
          
          {/* Inspiration */}
          <div className="md:w-1/2 p-12 border-b-2 md:border-b-0 md:border-r-2 border-black bg-white">
            <h3 className="text-3xl font-serif font-medium uppercase mb-10">Inspiration</h3>
            <div className="space-y-8">
              {[
                { name: "College Fed Challenge", url: "https://www.newyorkfed.org/education/fedchallenge_college" },
                { name: "NYU Policy Case Comp", url: "https://www.politicsatnyu.org/policy-case-competition/" },
                { name: "Pace EconHacks", url: "https://econhacks-website.vercel.app/" }
              ].map((link, i) => (
                <div key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-end border-b border-black/10 pb-4">
                    <span className="text-xl font-serif">{link.name}</span>
                    <ExternalLink size={20} className="text-gray-400" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="md:w-1/2 p-12 bg-white flex flex-col">
            <h3 className="text-3xl font-serif font-medium uppercase mb-10">Resources</h3>
            <div className="space-y-8">
              {[
                { name: "Advanced Excel for Policy Analysis", url: "https://www.youtube.com/watch?v=pCJ15nGFgVg" },
                { name: "Visualizing Data with Tableau", url: "https://help.tableau.com/current/guides/get-started-tutorial/en-us/get-started-tutorial-home.htm" }
              ].map((link, i) => (
                <div key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-end border-b border-black/10 pb-4">
                    <span className="text-xl font-serif">{link.name}</span>
                    <ExternalLink size={20} className="text-gray-400" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Policython;