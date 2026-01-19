import React from "react";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoLogoFigma } from "react-icons/io5";

function SideBar() {
  return (
    <div className="fixed top-0 flex flex-col  items-center w-5 sm:w-20  h-screen">
      <div className="border-l-2 border-[#9299a5]  h-50 "></div>
      <div className="icon text-[#9299a5] text-[20px] py-3 flex flex-col gap-4 ">
        <a href="https://github.com/Teebeeleo">
          <FaGithub />
        </a>
        <TfiWorld />
        <a href="https://www.figma.com/files/team/1562755442123981128/user/1562755439840495198?fuid=1562755439840495198">
          <IoLogoFigma />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
