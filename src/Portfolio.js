import React from "react";
import Project from "./Project";
import { projectInfo } from "./projectInfo";
import Education from "./Education";
import Experience from "./Experience";
import Volunteering from "./Volunteering";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <div className="space-y-2 mb-4">
        <div className="border rounded-lg">
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => handleClick(0)}
          >
            <span className="font-semibold">Education</span>
            <span>{activeIndex === 0 ? "-" : "+"}</span>
          </div>
          {activeIndex === 0 && (
            <div className="p-4">
              <Education />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="border rounded-lg">
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => handleClick(1)}
          >
            <span className="font-semibold">Experience</span>
            <span>{activeIndex === 1 ? "-" : "+"}</span>
          </div>
          {activeIndex === 1 && (
            <div className="p-4">
              <Experience />
            </div>
          )}
        </div>
      </div>
      <Volunteering />
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projectInfo.map((project) => (
            <Project
              key={project.name}
              title={project.name}
              date={project.date}
              link={project.link}
              skills={project.skills}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
