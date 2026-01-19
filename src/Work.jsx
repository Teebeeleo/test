import React from "react";
import Layout from "./Layout";
import Port from "./assets/Port.png";

function Work() {
  const projectlist =[
    {
      image:{Port}
    },
    {
      language:"HTML,T"
    }
  ]
  return (
    <>
      <Layout>
        <div className="mx-30 pt-20 pb-50">
          <div>
            <h1 className="text-[18px]">
              <span className="text-[#b36ec7] ">/</span>projects
            </h1>
            <p className="pt-2 text-[12px] ">list of my projects</p>
          </div>
          <div>
            <h1 className="text-[18px] pt-10">
              <span className="text-[#b36ec7]  "> /</span>Complete-apps
            </h1>
          </div>
        </div>
        
      </Layout>
    </>
  );
}

export default Work;
