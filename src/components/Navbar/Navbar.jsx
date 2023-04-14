import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DonationBtn from "./DonationBtn";
import NavLinks from "./NavLinks";
import logo from "/Logo.jpg";

const Navbar = () => {
  const headerRef = useRef(null);
  const prevScrollPos = useRef(0);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  //scroll nav
  useEffect(() => {
    //debug：pageYOffset not working
    //window ref is not working
    //set usestate scrollY is not working
    //body css setting not working
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos.current > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        //can use style.transform here as well
        //classList.add not working with tailwind
      } else {
        headerElement.style.transform = "translateY(-130px)";
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //hide the scroll bar when the mobile nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav
      className={`bg-neutral-700 text-white duration-500 transition-all z-50 fixed w-full p-2`}
      ref={headerRef}
    >
      <div className="flex gap-8 items-center justify-between mx-auto">
        <div className="md:w-auto w-full flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <img src={logo} alt="logo" className="h-14 md:cursor-pointer" />
            <p className="leading-4 font-black text-center line-3 px-4">
              Red Panda Protection
            </p>
          </Link>
          <div
            className="text-3xl md:hidden mx-3 z-50 cursor-pointer"
            onClick={toggleOpen}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden gap-8 items-center font-semibold m-3">
          <li>
            <Link
              to="/"
              className="inline-block py-7 px-3 hover:text-orange-700"
            >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Link to="/donation">
            <DonationBtn />
          </Link>
        </div>
        {/* mobile version */}
        <ul
          className={`md:hidden bg-neutral-700 fixed h-screen w-full overflow-y-auto top-0 bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link
              to="/"
              className="py-7 px-3 inline-block font-semibold hover:text-orange-700 cursor-pointer"
              onClick={toggleOpen}
            >
              Home
            </Link>
          </li>

          <NavLinks toggleOpen={toggleOpen} />
          <div className="py-5">
            <Link to="/donation">
              <DonationBtn toggleOpen={toggleOpen} />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
