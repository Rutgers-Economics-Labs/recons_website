import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const InitiativeRow = ({ title, description, links = [] }) => {
  return (
    <div className="group border-t border-black py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">

        {/* Title */}
        <div className="md:col-span-4 md:self-center">
          <h3 className="text-2xl md:text-3xl font-serif font-medium uppercase tracking-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-5 md:self-center">
          <p className="text-gray-600 font-serif leading-relaxed">
            {description}
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-2 md:text-right md:self-center">
          <div className="flex md:flex-col gap-4 md:items-end">
            {links.map((link, index) => {
              if (!link.url) {
                return (
                  <span
                    key={index}
                    className="text-[10px] font-serif uppercase tracking-[0.2em] font-bold text-gray-400"
                  >
                    {link.text}
                  </span>
                );
              }

              const isExternal = link.url.startsWith('http');

              return isExternal ? (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-serif uppercase tracking-[0.2em] font-bold hover:text-gray-500 transition-colors"
                >
                  {link.text}
                  <ArrowRight size={13} />
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.url}
                  className="inline-flex items-center gap-2 text-[10px] font-serif uppercase tracking-[0.2em] font-bold hover:text-gray-500 transition-colors"
                >
                  {link.text}
                  <ArrowRight size={13} />
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};


const Initiatives = () => {
  const mainInitiatives = [
    {
      number: "01",
      title: "Buddy Program",
      description:
        "Connecting underclassmen with experienced upperclassmen mentors to navigate the economics major and career paths.",
      links: [
        { text: "Coming Fall 2026", url: "" }
      ]
    },
    {
      number: "02",
      title: "Competitions",
      description:
        "Providing students the opportunity to showcase their talents and apply their knowledge.",
      links: [
        { text: "Policython", url: "/policython" }
      ]
    },
    {
      number: "03",
      title: "Women in Economics",
      description:
        "A new initiative supporting students through mentorship, professional development, and opportunities within economics.",
      links: [
        { text: "Coming Fall 2026", url: "" }
      ]
    },
    {
      number: "04",
      title: "RECONS Review",
      description:
        "Covering diverse topics in economics and finance with student-written op-eds and market analysis.",
      links: [
        { text: "Read", url: "https://rutgersecon.substack.com/" }
      ]
    }
  ];

  const researchBranches = [
    {
      number: "1",
      title: "Research Fellowship",
      description:
        "Cohort of undergraduates co-authoring an academic research paper.",
      link: "/rfp",
      linkText: "Learn More"
    },
    {
      number: "2",
      title: "Review Journal",
      description:
        "Yearly academic publication of undergraduate research in economics.",
      link: "/rj",
      linkText: "Learn More"
    },
    {
      number: "3",
      title: "Rutgers Economics Labs",
      description:
        "Student teams producing data-driven insights for partner organizations.",
      link: "https://www.rutgerseconomics.org/",
      linkText: "Learn More"
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen py-24 px-8 text-black">

      <PageMeta
        title="Initiatives"
        description="Explore RECONS initiatives including the Buddy Program, competitions, Women in Economics, Research Fellowship, Review Journal, and Rutgers Economics Labs."
        path="/initiatives"
      />

      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-20 border-l-4 border-black pl-8">
          <h1 className="text-5xl md:text-6xl font-serif font-medium uppercase tracking-tighter mb-4">
            Our Initiatives
          </h1>

          <p className="text-xl text-gray-500 font-serif max-w-2xl italic">
            Expanding the horizons of economic education through peer mentorship,
            active research, and professional development.
          </p>
        </div>


        {/* Main Initiatives */}
        <div className="border-b border-black mb-32">
          {mainInitiatives.map((item) => (
            <InitiativeRow
              key={item.number}
              {...item}
            />
          ))}
        </div>


        {/* Research */}
        <div className="border border-black bg-white p-8 md:p-12 relative overflow-hidden">

          <div className="relative z-10">

            <h2 className="text-4xl font-serif font-medium uppercase tracking-tight mb-8">
              Research
            </h2>

            <p className="max-w-2xl text-gray-600 font-serif mb-12 italic leading-relaxed">
              Our research initiative is split into three branches.
              Applications are not synchronized, so check frequently for updates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-12">

              {researchBranches.map((branch) => {
                const isExternal = branch.link.startsWith('http');

                return (
                  <div
                    key={branch.number}
                    className="space-y-4 flex flex-col h-full"
                  >
                    <h4 className="font-serif font-bold uppercase text-sm tracking-widest">
                      {branch.number}. {branch.title}
                    </h4>

                    <p className="text-sm text-gray-500 font-serif flex-grow leading-relaxed">
                      {branch.description}
                    </p>

                    {isExternal ? (
                      <a
                        href={branch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[10px] uppercase tracking-widest font-bold hover:underline transition-all"
                      >
                        {branch.linkText} →
                      </a>
                    ) : (
                      <Link
                        to={branch.link}
                        className="block text-[10px] uppercase tracking-widest font-bold hover:underline transition-all"
                      >
                        {branch.linkText} →
                      </Link>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Initiatives;