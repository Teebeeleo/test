import React from "react";
import { useEffect, useRef } from "react";
import Layout from "./Layout";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Contact() {
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <>
      <Layout>
        <div className="sm:mx-30 mx-8 pt-20">
          <h1 className="text-[18px]">
            <span className="text-[#b36ec7] ">/</span>Contact me
          </h1>

          <div className="mt-10">
            <div className="sm:flex sm:gap-5 ">
              <input ref={nameRef}
                type="text"
                placeholder="Name"
                className=" outline  focus:outline-none focus:ring-1 p-1 max-sm:mb-5"
              />
              <input
                type="email"
                placeholder="Email"
                className=" outline focus:ring p-1"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                className="outline focus:outline-none focus:ring-1 mt-5 sm:w-119 p-1"
              />
            </div>
            <div className="">
              <textarea 
                type="text"
                placeholder="Message"
                className="outline focus:outline-none focus:ring-1 mt-5 px-2  flex flex-s sm:w-119 w-57  h-32 resize-none"
              />
            </div>
            <div>
              <button type="submit" className=" border border-[#b36ec7] hover:bg-[rgba(199,120,221,0.15)]  px-4 mt-2 py-1">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-b-xl w-45 sm:ml-230 ml-40 max-sm:mt-5 p-1 ">
            <h2 className=" text-center pb-2">Message me here</h2> 
            <div className="flex gap-6 items-center"><FaFacebookSquare /> <p>Facebook</p></div>
            <div className="flex gap-6 items-center"><FaXTwitter /> <p>Twitter/x</p></div>
            <div className="flex gap-6 items-center"><FaTiktok /> <p>Tiktok</p></div>
            <div className="flex gap-6 items-center"><FaSquareWhatsapp /><p>Whatsapp</p></div>

        </div>
      </Layout>
    </>
  );
}

export default Contact;
