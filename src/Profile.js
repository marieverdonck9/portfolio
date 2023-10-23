import React from "react";
import marie from "./assets/marie.jpg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/mail.svg";

const skills = ["Genetics", "Bioinformatics", "CRISPR/Cas9", "Microbiology"];

export default function Profile() {
  return (
    <div className="flex-shrink-0 w-full md:w-1/4 md:mr-4">
      <div className="basis-1/4 w-full flex-shrink-0 bg-slate-100	p-6 rounded shadow sticky top-4">
        <img src={marie} className="rounded-full h-36" alt="Marie Verdonck" />
        <h1 className="font-semibold mt-3">Marie Verdonck</h1>
        <p className="text-sm font-light">
          Research Intern at Vonesch Lab | Master of Science in Cellular and
          Genetic Engineering
        </p>
        <p className="text-slate-400 text-sm font-light">Belgium</p>

        <div className="mt-3 flex">
          <a
            href="https://www.linkedin.com/in/marie-verdonck/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} className="mr-1" alt="linkedin profile" />
          </a>
          <a
            href="mailto:marieverdonck9@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="email" />
          </a>
        </div>

        <h1 className="font-semibold mt-3">About</h1>
        <p className="text-sm font-light">
          Aspiring genetics researcher with a strong interest in oncology.
          Currently in the final phase of my Master in Cellular and Genetic
          Engineering at KUL. Committed to leveraging genome editing for
          impactful medical advancements.
        </p>

        <h1 className="font-semibold mt-3 w-">Skills</h1>
        <div className="w-full flex flex-wrap">
          {skills.map((skill) => (
            <p className="text-sm font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
