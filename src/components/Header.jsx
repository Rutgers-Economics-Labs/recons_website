import TextLogo from "./TextLogo";
import Nav from "./Navlinks";

const Header = () => {
  return (
    <header className="bg-[oklch(14.5%_0_0)] sticky top-0 z-[50] border-b border-gray-500 py-6 px-">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <TextLogo text="RECONS." />
        <Nav />
      </div>
    </header>
  );
};

export default Header;