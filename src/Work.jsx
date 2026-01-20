import React from "react";
import Layout from "./Layout";
import Port from "./assets/Port.png";
import Projectcard from "./Projectcard";

function Work() {
  const projectlist = [
    {
      image: Port,

      language: "React,Tailwind css",

      title: "my portfololio",

      description: "A responsive portfolio",

      button1: "live",

      button2: "Git",
    },
    {
      image: Port,

      language: "React,Tailwind css",

      title: "my portfololio",

      description: "A responsive portfolio",

      button1: "live",

      button2: "Git",
    },
    {
      image: Port,

      language: "React,Tailwind css",

      title: "my portfololio",

      description: "A responsive portfolio",

      button1: "live",

      button2: "Git",
    }
  ];
  return (
    <>
      <Layout>
        <div className="mx-30 pt-20 pb-50">
          <div>
            <h1 className="text-[18px]">
              <span className="text-[#b36ec7] ">/</span>projects
            </h1>
            <p className="pt-2 text-[12px] ">list of my projects.</p>
          </div>
          <div>
            <h1 className="text-[18px] pt-10">
              <span className="text-[#b36ec7]  "> /</span>Complete-apps
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 sm:mx-32 mx-12">
          {projectlist.map((project, index) => (
            <Projectcard key={index} Project={project}  />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Work;
