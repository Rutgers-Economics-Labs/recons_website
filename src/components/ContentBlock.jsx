const ContentBlock = ({ title, columns = [], className = "", bgColor = "transparent" }) => {
  return (
    <section className={`w-full ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Main Title */}
        {title && (
          <h2 className="text-3xl font-serif text-black text-center mb-16 uppercase tracking-widest">
            {title}
          </h2>
        )}

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-16">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`flex-1 flex flex-col items-center text-center ${col.className || ""}`}
            >
              {/* Column Title */}
              {col.title && (
                <h3 className="text-3xl font-serif  mb-6 uppercase tracking-wider">
                  {col.title}
                </h3>
              )}

              {/* Column Text */}
              {col.text && (
                <p className="mb-8 text-lg text-gray-700 leading-relaxed font-serif">
                  {col.text}
                </p>
              )}
              
              {/* Column Button */}
              {col.button && (
                <a
                  href={col.button.link}
                  className="
                    mt-auto inline-block px-10 py-3 
                    text-xs tracking-widest uppercase
                    border-[1px] border-black text-black bg-transparent
                    transition-all duration-300
                    hover:bg-black hover:text-white
                  "
                >
                  {col.button.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;