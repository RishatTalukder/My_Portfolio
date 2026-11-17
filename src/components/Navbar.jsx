import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, SetActive] = useState(""); // for mobile menu

  const [toggle, SetToggle] = useState(false); // for mobile menu

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 bg-transparent absolute top-0 left-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Md. Rishat Talukder &nbsp;
            <span className="sm:block hidden">|&nbsp; ITVAYA</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-2 rounded-xl border border-white/10 bg-[#050816]/40 px-3 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => SetActive(link.title)}
                className={`block rounded-lg px-4 py-2 text-[16px] font-medium transition-colors duration-200 ${
                  active === link.title
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => SetToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    SetActive(link.title);
                    SetToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
