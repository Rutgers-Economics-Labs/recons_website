import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = ({ onClick }) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/initiatives", label: "Initiatives" },
    { to: "/people", label: "People" },
    { to: "/more", label: "More" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick} 
          className={({ isActive }) =>
            `relative text-white font-serif text-lg px-3 py-1 transition-colors
            after:absolute after:-bottom-0.5 after:left-1/2 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:translate-x-[-50%]
            ${isActive ? "after:w-3/4 opacity-100" : "after:w-0 hover:after:w-3/4 opacity-80 hover:opacity-100"}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!isOpen);

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full">
        {/* Desktop links */}
        <div className="hidden md:flex ml-auto space-x-6">
          <NavLinks />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center ml-auto">
          <button 
            onClick={toggleNavbar} 
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-white w-7 h-7" />
            ) : (
              <Menu className="text-white w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div className="flex flex-col items-center w-full md:hidden pt-8 pb-4 space-y-6 bg-black/90 absolute left-0 top-16 z-50 animate-in fade-in slide-in-from-top-4">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Nav;