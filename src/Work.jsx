import React from "react";
import Layout from "./Layout";
import Port from "./assets/Port.png";
import Projectcard from "./Projectcard";
import Clinico from "./assets/Clinico.png";
import Mason from "./assets/Mason.png";
import Contact from "./assets/Contact.png";
import Sustainable from "./assets/Sustainable.png";
import Facebook from "./assets/Facebook.png";
import Smallprojectcard from "./Smallprojectcard";
import Skillcard from "./Skillcard";

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
      image: Clinico,

      language: "HTML CSS",

      title: "Clinico",

      description: "A responsive healthcare website",

      button1: "live",

      button2: "Git",
    },
    {
      image: Sustainable,

      language: "HTML Bootsrap CSS",

      title: "GO green",

      description: "A responsive Go green website",

      button1: "live",

      button2: "Git",
    },
  ];
  const Skill = [
    {
      title: "Languages",
      info:"PHP Javascript SQL"

    },
    {
      title: "Frontend",
      info:"React TypeScript Tailwind-CSS  "

    },
    {
      title: "Backend",
      info:"Laravel RestApis PHP"

    },
    {
      title: "Database",
      info:"PostgreSQL MySQL SQLite"

    },
    {
      title: "Tools",
      info:"Git&Github VScode Figma Vite"

    },
  ];
  const smallProjectlist = [
    {
      image: Facebook,
      language: "HTML CSS",
      title: "Facebook",
      description: "login page",
    },
    {
      image: Contact,
      language: "HTML CSS",
      title: "Contact information",
      description: "Contact page",
    },
    {
      image: Mason,
      language: "HTML CSS",
      title: "Mason Garment",
      description: "landing page",
      button1: "Git",
    },
  ];
  return (
    <>
      <Layout>
        <div className="sm:mx-30 mx-8 pt-20 pb-50">
          <div>
            <h1 className="text-[18px]">
              <span className="text-[#b36ec7] ">/</span>projects
            </h1>
            <p className="pt-2 text-[12px] ">list of my projects.</p>
          </div>
          <div>
            <h1 className="text-[18px] pt-10">
              <span className="text-[#b36ec7]  "> #</span>Completed-site
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-32 lg:gap-0  lg:grid-cols-3 sm:mx-35 mx-12">
          {projectlist.map((project, index) => (
            <Projectcard key={index} Project={project} />
          ))}
        </div>

        <div>
          <h1 className="text-[18px] sm:mx-30 mx-8 ">
            <span className="text-[#b36ec7]  "> #</span>Small-projects
          </h1>
        </div>

        <div className="grid grid-cols-1  lg:gap-0 gap-46 lg:grid-cols-3 sm:mx-35 mx-12 mt-45">
          {smallProjectlist.map((prod, index) => (
            <Smallprojectcard key={index} Project={prod} />
          ))}
        </div>

        <h1 className="text-[18px] sm:mx-30 mx-8 pt-15 flex items-center w-60 ">
          <div className="flex items-center w-50 gap-1">
            <div>
              <span className="text-[#b36ec7] ">/</span>skills
            </div>
            <div class="flex-1 h-px bg-purple-400 "></div>
          </div>
        </h1>
        <div className="lg:mx-40 sm:mx-35 grid sm:grid-cols-2 mx-15 grid-cols-1 lg:gap-5 gap-5 mt-15">
        {Skill.map((skill,index)=>(
        <Skillcard key={index} Skill={skill} />
        )) }
        </div>
      </Layout>
    </>
  );
}

export default Work;
