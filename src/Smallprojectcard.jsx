import React from "react";

const Smallprojectcard = ({ Project }) => {
  const { image, language, title, description, button1, button2 } = Project;
  return (
    <>
      <div className="-mt-35     ">
        <div className="border pb-5 w-70 lg:w-70 sm:w-120 ">
          <p className="pl-2 border-t border-b text-[12px] py-1.5">
            {language}
          </p>
          <div className="lg:w-70 w-70 sm:w-120">
            <img src={image} alt="" />
          </div>

          <h1 className="py-2 pl-2">{title}</h1>
          <p className="text-[14px] pl-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Smallprojectcard;
