import React from "react";
import Layout from "./Layout";
import CareerCard from "./CareerCard";

function Aboutme() {
  const careerJourney = [
    {
      year: "2021 – Present",
      title: "Academic Foundation (LAUTECH)",
      points: [
        "Studying at Ladoke Akintola University of Technology",
        "Building practical skills alongside academics",
        "Working on software projects",
      ],
    },
    {
      year: "2022",
      title: "Web Development Foundations",
      points: [
        "Learned HTML, CSS & JavaScript",
        "Built small web projects",
        "Explored core web concepts",
      ],
    },
    {
      year: "2023",
      title: "Frontend Development (React)",
      points: [
        "Built React applications",
        "Used Tailwind CSS for UI",
        "Managed state and components",
      ],
    },
    {
      year: "2024",
      title: "Buggy Billion Tech Institute",
      points: [
        "Advanced training in PHP & Laravel",
        "Developed RESTful APIs",
        "Integrated React with backend services",
      ],
    },
    {
      year: "2025",
      title: "Full-Stack Growth",
      points: [
        "Built complete full-stack applications",
        "Enhanced API security",
        "Optimized backend performance",
      ],
    },
    {
      year: "2026 – Present",
      title: "SaveMate Project",
      points: [
        "Developing a fintech application",
        "Designing secure APIs",
        "Building a user-friendly React frontend",
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="lg:mx-30 sm:mx-22 pt-20 mx-8">
          <h1 className="text-[18px] ">
            <span className="text-[#b36ec7] ">/</span>about-me
          </h1>
          <p className="pt-10 text-[#9299a5]">Hello i'm Toyeeb</p>
          <p className="pt-7 lg:w-200 sm:w-145 sm:text-[18px] lg:text-[16px] leading-8 text-[#9299a5]">
            I’m a full-stack web developer specializing in PHP and Laravel,
            focused on building secure, scalable, and user-friendly web
            applications. I take projects from idea to production, handling both
            frontend interfaces and backend logic. I build RESTful APIs, design
            database schemas, implement authentication systems, and create
            responsive user interfaces that deliver real value to users. I enjoy
            solving complex problems with clean code, optimizing performance,
            and continuously learning better ways to build reliable software.
          </p>
          <section className=" text-white py-16 ">
            <h2 className="text-xl mb-10">
              <span className="text-[#b36ec7]">/</span>career-journey
            </h2>

            <div className="space-y-8">
              {careerJourney.map((item, index) => (
                <CareerCard
                  key={index}
                  year={item.year}
                  title={item.title}
                  points={item.points}
                />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Aboutme;
