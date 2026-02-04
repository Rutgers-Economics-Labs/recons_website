import { NavLink } from "react-router-dom";

const TextLogo = ({ text = "RECONS." }) => {
  return (
    <NavLink 
      to="/" 
      className="group relative inline-block z-[20]"
    >
      <span
        className="
          inline-block
          text-white text-3xl font-bold tracking-wide
          transition-all duration-300 ease-out
          md:group-hover:scale-[1.15] 
          origin-left
          cursor-pointer
        "
      >
        {text}
      </span>
    </NavLink>
  );
};

export default TextLogo;