const AnimatedGraph = () => {
  return (
    <svg
      viewBox="0 0 1000 400"
      className="absolute bottom-0 w-full h-2/3 opacity-30"
      preserveAspectRatio="none"
    >
      <path
        d="M0 300
           L100 260
           L200 280
           L300 220
           L400 240
           L500 180
           L600 200
           L700 160
           L800 190
           L900 140
           L1000 160"
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="graph-path"
      />
    </svg>
  );
};

export default AnimatedGraph;
