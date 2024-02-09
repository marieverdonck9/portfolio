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

  const dropdownRef = React.useRef(null);
  const [cat, setCat] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const uniqueSkills = projectInfo
    .map((project) => project.skills)
    .reduce((allSkills, projectSkills) => [...allSkills, ...projectSkills], [])
    .filter((skill, index, self) => self.indexOf(skill) === index)
    .sort();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };

    if (filterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterOpen]);

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
          Looking for Genetic Keys to Beat Cancer
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
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <h2 className="font-semibold">Projects</h2>
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  className="inline-flex ml-2 w-full justify-center gap-x-1.5 rounded-sm bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  Filter
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {filterOpen && (
                <div
                  className={`absolute rigt-0 max-h-64 overflow-y-auto z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div role="none">
                    {uniqueSkills.map((skill) => (
                      <p
                        className="cursor-pointer flex items-center text-gray-700 px-4 py-2 text-sm hover:bg-slate-100 transition-colors duration-150 ease-in-out"
                        onClick={(e) => {
                          e.preventDefault();
                          if (!cat.includes(skill)) {
                            setCat([...cat, skill]);
                          } else {
                            setCat(cat.filter((c) => c !== skill));
                          }
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={cat.includes(skill)}
                          onClick={(e) => {
                            if (!cat.includes(skill)) {
                              setCat([...cat, skill]);
                            } else {
                              setCat(cat.filter((c) => c !== skill));
                            }
                          }}
                          className="mr-2"
                        />
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {cat.length > 0 && (
            <span
              className="ml-4 cursor-pointer text-slate-400 hover:underline"
              onClick={() => setCat([])}
            >
              Clear filter
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cat.length === 0
            ? projectInfo.map((project) => (
                <Project
                  key={project.name}
                  title={project.name}
                  date={project.date}
                  link={project.link}
                  skills={project.skills}
                  description={project.description}
                />
              ))
            : projectInfo
                .filter((project) =>
                  project.skills.some((skill) => cat.includes(skill))
                )
                .map((project) => (
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
