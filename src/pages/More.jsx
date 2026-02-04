import React from 'react';

const ResourceBox = ({ title, desc, link }) => (
  <div className="group relative bg-white border border-black p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
    <h4 className="text-xl font-serif font-medium uppercase tracking-tight mb-3">{title}</h4>
    <p className="text-gray-600 font-serif leading-relaxed mb-6 flex-grow">{desc}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest font-bold group-hover:gap-4 transition-all"
    >
      See More <span className="text-lg">→</span>
    </a>
  </div>
);

const More = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Additional Resources */}
      <section className="bg-[#fafafa] py-24 px-8 border-b border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-serif font-medium uppercase tracking-tight mb-4 text-black">Additional Resources</h1>
            <p className="text-xl text-gray-600 font-serif max-w-2xl">Check out these resources to acquaint yourself with concepts from the introductory economics courses you may take at Rutgers. We have also provided data sources for your exploration.</p>
          </div>

          {/* Introductory Courses */}
          <div className="mb-24">
            <h3 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-400 mb-10">Introductory Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <ResourceBox 
                title="Intro Macroeconomics" 
                desc="Learn about economic indicators, price determination, stabilization, and international trade."
                link="https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics"
              />
              <ResourceBox 
                title="Intro Microeconomics" 
                desc="Explore perfect and imperfect competition, factor markets, and the role of governments in the economy."
                link="https://www.khanacademy.org/economics-finance-domain/ap-microeconomics"
              />
              <ResourceBox 
                title="Econometrics" 
                desc="Take a deep dive into implementing statistical methods, economic models, and hypothesis testing."
                link="https://sites.google.com/site/econometricsacademy/"
              />
            </div>
          </div>

          {/* Data */}
          <div>
            <h3 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-400 mb-10">Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <ResourceBox 
                title="FRED Archive" 
                desc="Access thousands of economic time series and regional data from the St. Louis Fed."
                link="https://fred.stlouisfed.org"
              />
              <ResourceBox 
                title="NYSE" 
                desc="Real-time market data and historical trends from the world's largest stock exchange."
                link="https://www.nyse.com/index"
              />
              <ResourceBox 
                title="World Bank Data" 
                desc="Global development indicators covering demographics, finance, and climate across 200+ countries."
                link="https://data.worldbank.org"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Alumni Newsletter */}
      <section className="bg-[#f2f2f2] py-24 px-8 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-0">
          
          {/*Form */}
          <div className="flex-1 md:pr-16">
            <h2 className="text-3xl font-serif font-medium uppercase tracking-tight mb-8">
              Alumni Newsletter
            </h2>
            <p className="text-gray-600 font-serif mb-8 leading-relaxed">
              Stay connected with the community. Join our alumni network to receive updates on exclusive events and organizational milestones.
            </p>
            
            <form 
              action="https://weebly.us15.list-manage.com/subscribe/post?u=e7911be6e88b1072020be10f5&id=e90230afad&f_id=006076e0f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              target="_blank"
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  type="text" 
                  name="FNAME" 
                  id="mce-FNAME"
                  placeholder="First Name" 
                  required
                  className="flex-1 bg-transparent border-b border-black py-2 focus:outline-none font-serif text-sm placeholder:text-gray-400"
                />
                <input 
                  type="text" 
                  name="LNAME" 
                  id="mce-LNAME"
                  placeholder="Last Name" 
                  className="flex-1 bg-transparent border-b border-black py-2 focus:outline-none font-serif text-sm placeholder:text-gray-400"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <input 
                  type="email" 
                  name="EMAIL" 
                  id="mce-EMAIL"
                  placeholder="Email Address" 
                  required
                  className="flex-[2] bg-transparent border-b border-black py-2 focus:outline-none font-serif text-sm w-full placeholder:text-gray-400"
                />
                
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_e7911be6e88b1072020be10f5_e90230afad" tabIndex="-1" value="" readOnly />
                </div>

                <button 
                  type="submit" 
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full md:w-auto px-10 py-3 bg-black text-white border border-black font-serif uppercase text-xs tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block w-[1px] bg-black/20 mx-12"></div>

          {/* Apply*/}
          <div className="flex-1 md:pl-4">
            <h2 className="text-3xl font-serif font-medium uppercase tracking-tight mb-8">Apply</h2>
            <p className="text-gray-600 font-serif mb-8 leading-relaxed">
              Interested in joining our team? Click below to see current opportunities. We look forward to learning more about your talents and experience!
            </p>
            <div className="w-full md:w-max px-10 py-4 bg-gray-100 text-gray-400 border border-gray-200 font-serif uppercase text-[10px] tracking-[0.5em] cursor-default text-center">
              View Openings
            </div>
          </div>
        </div>
      </section>

      {/*Contact*/}
      <section className="bg-[#fafafa] py-32 px-8 flex items-center min-h-[700px]">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-serif font-medium uppercase tracking-tight mb-20 text-center md:text-left">
            Contact Us
          </h2>
          
          <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 space-y-12">
              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-400 mb-6">Location</h4>
                <p className="text-xl font-serif leading-relaxed text-black">
                  401 NJ Hall<br />
                  75 Hamilton Street<br />
                  New Brunswick, NJ 08901-1248<br />
                  United States of America
                </p>
              </div>

              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.4em] text-gray-400 mb-6">Information</h4>
                <div className="space-y-4">
                  <p className="text-lg font-serif text-black">
                    <span className="font-bold mr-3 text-xs uppercase tracking-widest">E:</span>
                    economicsrutgers@gmail.com
                  </p>
                  <p className="text-lg font-serif text-black">
                    <span className="font-bold mr-3 text-xs uppercase tracking-widest">P:</span>
                    (848) 932-7363
                  </p>
                  <p className="text-lg font-serif text-black">
                    <span className="font-bold mr-3 text-xs uppercase tracking-widest">F:</span>
                    (732) 932-7416
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full md:w-1/2 h-[500px] border border-black overflow-hidden bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.425330836511!2d-74.44855792343468!3d40.49903965094206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c65651557993%3A0xc3f7a77d1217e29!2s75%20Hamilton%20St%2C%20New%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default More;