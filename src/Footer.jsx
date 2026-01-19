import React, { Component } from "react";
import Logo from "./assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoLogoFigma } from "react-icons/io5";

export class Footer extends Component {
  render() {
    return (
      <div className="border-t-2 border-[#898f9a] ">
        <footer className="sm:mx-30 mt-5 mx-7">
          <div className="sm:flex justify-between">
            <div>
              <div className="flex gap-6">
                <div className="flex gap-2">
                  <img src={Logo} alt="" className="w-5 h-5 " />
                  <h2 className="text-[17px]">Tee~Bee</h2>
                </div>
                <div>
                  <p className="text-[#9299a5] lg:text-[16px] sm:text-[18px]">
                    adesoyetoyeeb01@gmail.com
                  </p>
                </div>
              </div>
              <p className="pt-5">Full-stack developer</p>
            </div>
            <div className=" max-sm:flex gap-40">
              <h1 className="text-[25px]">media</h1>
              <span className="icon text-[#9299a5] text-[23px] py-3 flex  gap-4 ">
                <a href="https://github.com/Teebeeleo">
                  <FaGithub />
                </a>
                <a href="https://www.figma.com/files/team/1562755442123981128/user/1562755439840495198?fuid=1562755439840495198">
                  <IoLogoFigma />
                </a>
                <a href="https://x.com/Teebeeleo">
                  <FaXTwitter />
                </a>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center my-10 text-[#9299a5]">
            <span>
              <AiOutlineCopyrightCircle />
            </span>
            <p className=" lg:text-[16px] sm:text-[20px]">
              copy right 2025. Made by Tee~Bee
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
