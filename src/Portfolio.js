import React from "react";
import Project from "./Project";
import { projectInfo } from "./projectInfo";
import Education from "./Education";
import Experience from "./Experience";
import Volunteering from "./Volunteering";
import banner from "./assets/banner.jpg";

export default function Portfolio() {
  const [educationOpen, setEducationOpen] = React.useState(false);
  const [experienceOpen, setExperienceOpen] = React.useState(false);

  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <div
        className="space-y-2 mb-4 rounded-lg text-white text-center h-40 flex justify-center items-center p-4"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="text-2xl font-bold">
          Deciphering it one gene at a time
        </h1>
      </div>
      <div className="space-y-2 mb-4">
        <div className="border rounded-lg">
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => setEducationOpen(!educationOpen)}
          >
            <span className="font-semibold">Education</span>
            <span>{educationOpen ? "-" : "+"}</span>
          </div>
          {educationOpen && (
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
            onClick={() => setExperienceOpen(!experienceOpen)}
          >
            <span className="font-semibold">Experience</span>
            <span>{experienceOpen ? "-" : "+"}</span>
          </div>
          {experienceOpen && (
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
