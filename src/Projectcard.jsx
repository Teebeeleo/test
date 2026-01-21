import React from "react";

const Projectcard = ({ Project }) => {
  const { image, language, title, description, button1, button2 } = Project;
  return (
    <>
      <div className="-mt-40     mb-20">
        <div className="border pb-5 w-70 lg:w-70 sm:w-120 ">
          <div className="lg:w-70 w-70 sm:w-120">
            <img src={image} alt="" />
          </div>
          <p className="pl-2 border-t border-b text-[12px] py-1.5">
            {language}
          </p>
          <h1 className="py-2 pl-2">{title}</h1>
          <p className="text-[14px] pl-2 pb-3">{description}</p>
          <div className="flex gap-4 pl-2 ">
            <button className="   border px-5 hover:bg-[rgba(199,120,221,0.15)]">
              {button1}
            </button>
            <button className="border px-5  hover:bg-[rgba(199,120,221,0.15)]">
              {button2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
