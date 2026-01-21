import React from "react";

const Skillcard = ({ Skill }) => {
  const { title, info } = Skill;
  return (
    <>
      <div className=" lg:border border sm:border-2 lg:w-60 w-60 sm:w-55">
        <h1 className=" border-b p-2">{title}</h1>
        <p className="text-[#9299a5] pt-5 pl-2 pb-4">{info}</p>
      </div>
    </>
  );
};

export default Skillcard;
