import React, { useState } from "react";
import { links } from "./myLinks";
import { Link } from "react-router-dom";

const NavLinks = ({toggleOpen}) => {
  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group font-semibold hover:text-green-600"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {/* submenu */}
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-4">
                    <div className="w-4 h-4 left-3 absolute mt-2 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3 grid gap-10 mt-3">
                    {link.sublinks.map((sublink) => (
                      <div key={sublink.name}>
                        <Link
                          to={sublink.link}
                          className="hover:text-green-700 font-semibold"
                          onClick={toggleOpen}
                        >
                          {sublink.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile version */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slink) => (
              <div key={slink.name}>
                <div>
                  <Link to={slink.link} className="hover:text-green-700 font-semibold" onClick={toggleOpen}>
                  <h1 className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center hover:text-green-700">{slink.name}</h1></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
