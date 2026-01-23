import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./assets/Image.png";
import Outline1 from "./assets/Outline1.png";
import Dots from "./assets/Dots.png";
import { VscQuote } from "react-icons/vsc";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Layout>
        <div className="relative z-10">
          <div className="lg:flex mt-30 md:mx-20 lg:mx-30 gap-17 mx-8 relative">
            <div className="flex-1">
              <h1 className="flex text-[17px] md:text-[28px] lg:text-[30px]  font-bold gap-3">
                I'm a{" "}
                <span className="text-[#b36ec7]">
                  <Typewriter
                    options={{
                      strings: ["full-stack web developer"],
                      autoStart: true,
                      loop: true,
                      delay: 70,
                      deleteSpeed: 50,
                      cursor: "|",
                    }}
                  />
                </span>
              </h1>
              <p className="lg:w-130 pt-5 md:pt-10 text-[#9299a5] lg:text-[16px] md:text-[20px] lg:leading-8 md:leading-9 sm:w-150 w-85 leading-7 ">
                I design and develop high-performance, user-friendly web
                applications using React, Tailwind CSS, PHP, Laravel, MySQL, and
                Docker. I build scalable, secure full-stack solutions with
                modern best practices, including TypeScript, RESTful APIs,
                CI/CD, server-side rendering, and real-time features.
              </p>
              <button className="border md:border-2 py-2 px-3 mt-10 border-[#b36ec7] hover:bg-[rgba(199,120,221,0.15)] absolute top-147 md:top-200 lg:text-[16px] md:text-[20px] lg:static ">
                <a href="https://wa.me/2349037140948">Contact me!!</a>
              </button>
            </div>
            <div className=" relative left-5 lg:left-0 sm:left-20">
              <div>
                <img
                  src={Image}
                  alt=""
                  className="w-70 h-70 sm:w-120 sm:h-120 lg:w-100 lg:h-100 relative z-5 "
                />
              </div>
              <div className=" absolute lg:top-20 lg:-left-8 md:top-35 md:-left-4 top-22   left-1 ">
                <img src={Outline1} alt="" className="w-20 lg:w-40 sm:w-40" />
              </div>
              <div className="absolute lg:top-60 lg:right-0 md:top-70 md:right-30 top-35 right-7  z-7 max-sm:max-w-16 ">
                <img src={Dots} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="border w-85 flex items-center p-2 ml-8 lg:ml-200 mt-30 lg:mt-1 gap-2">
            {" "}
            <span className="inline-block w-5 h-5 bg-[#b36ec7] text-center"></span>
            Ready to work on your project
          </p>
        </div>
        <div className="relative">
          <div className="md:flex flex-col items-center justify-center mt-30 ">
            <p className="md:text-[21px] text-[15px] border sm:w-156 max-sm:mx-10 p-3  sm:p-5 border-[#898f9a]">
              With great power comes great electricity bills
            </p>

            <p className="md:text-[21px] text-[15px] b border sm:ml-124.5 sm:p-3 p-1 border-[#898f9a] lg:w-32  w-[25.5%] ml-67 lg:ml-l62.5">
              -Dr. Who
            </p>
          </div>
          <span className="bg-[#282c33] px-2 absolute sm:-top-3 sm:left-25 lg:left-85 left-15 -top-3">
            <VscQuote className="text-[25px]   " />
          </span>
          <span className="absolute sm:top-15 sm:left-162 lg:left-225 bg-[#282c33] px-1 left-78 top-13">
            <VscQuote className="text-[25px] " />
          </span>
        </div>
      </Layout>
    </>
  );
}

export default Home;
