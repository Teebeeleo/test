import React from "react";
import Layout from "../Layout";

function Aboutme() {
  return (
    <>
      <Layout>
        <div className="mx-30 pt-20">
          <h1 className="text-[18px] ">
            <span className="text-[#b36ec7] ">/</span>about-me
          </h1>
          <p className="pt-10 text-[#9299a5]">Hello i'm Toyeeb</p>
          <p className="pt-7 w-200 leading-8 text-[#9299a5]">
            I’m a full-stack web developer specializing in PHP and Laravel,
            focused on building secure, scalable, and user-friendly web
            applications. I take projects from idea to production, handling both
            frontend interfaces and backend logic. I build RESTful APIs, design
            database schemas, implement authentication systems, and create
            responsive user interfaces that deliver real value to users. I enjoy
            solving complex problems with clean code, optimizing performance,
            and continuously learning better ways to build reliable software.
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Aboutme;
