import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className=" min-h-screen w-full flex flex-col justify-between p-6 text-white bg-[url('/images/desktop-image-hero-1.jpg')] bg-contain bg-no-repeat bg-Black">
      {/* Mobile Navbar */}
      <div className="flex justify-start items-center">
        <div className="">
          <img src={isMenuOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="" onClick={toggleMenu} className={isMenuOpen ? "bg-white" : "bg-black"}/>
        </div>
        <div className="ml-auto">
          <img src="/images/logo.svg" alt="" />
        </div>
      </div>
      {/* Desktop Navbar */}
      <div></div>
    </header>
  );
};
export default Navbar;
