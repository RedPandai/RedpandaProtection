import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DonationBtn from "./DonationBtn";
import NavLinks from "./NavLinks";
import logo from "/Logo.jpg";

const Navbar = () => {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  //scroll nav
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      console.log(window.scrollY);
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) return;
      if (prevScrollPos > currentScrollPos) {
        headerElement.classList.add("translate-y-0");
        //can use style.transform here as well
      } else {
        headerElement.classList.add("-translate-y-full");
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window.scrollY);
  return (
    <nav
      className="bg-white transform inset-0 transition-all sticky"
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
          <div className="text-3xl md:hidden mx-3" onClick={toggleOpen}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden gap-8 items-center font-semibold m-3">
          <li>
            <Link
              to="/"
              className="inline-block py-7 px-3 hover:text-green-600"
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
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link
              to="/"
              className="py-7 px-3 inline-block font-semibold hover:text-green-600"
              onClick={toggleOpen}
            >
              Home
            </Link>
          </li>

          <NavLinks toggleOpen={toggleOpen} />
          <div className="py-5">
            <Link to="/donation">
              <DonationBtn />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
