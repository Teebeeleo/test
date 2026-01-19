import React, { useState } from "react";
import Logo from "./assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const NavItems = ["home", "works", "about-me", "contact", "EN"];
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="">
      <nav className="flex relative sm:flex justify-between mx-6 md:mx-20 lg:mx-30 mt-5  ">
        <div className="flex gap-3">
          <img src={Logo} alt="" className="w-5 h-5 " />
          <h2 className="text-[17px] md:text-[20px] lg:text-[17px] ">
            Tee~Bee
          </h2>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 sm:relative sm:flex gap-5 md:text-[20px] lg:text-[16px] `}
        >
          {NavItems.map((item, index) => (
            <li key={index} className="text-[#9299a5] ">
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
        <div className="block sm:hidden" onClick={() => setIsopen(!isOpen)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
