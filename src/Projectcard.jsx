import React from "react";

const Projectcard = ({ Project }) => {
  const [image, language, title, description, button1, button2] =
    Project;
  return (
    <>
      <div className="">
        <div className="border grid-cols-1 sm:grid-cols-3">
          <div>{image}</div>
          <p className=" border-t border-b text-[12px]">{language}</p>
          <h1>{title}</h1>
          <p className="text-[14px] ">{description}</p>
          <div>
            <button className="  hover:bg-[rgba(199,120,221,0.15)]">
              {button1}
            </button>
            <button className=" hover:bg-[rgba(199,120,221,0.15)]">
              {button2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
