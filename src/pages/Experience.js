import Education from "../components/Education";
import Volunteering from "../components/Volunteering";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <>
      <h2 className="text-lg font-semibold">Education</h2>
      <Education />

      <section id="experience" className="mb-4">
        <h2 className="text-lg font-semibold mt-4">Research Experience</h2>

        <ul className="edu-list mt-2">
          {experiences.map((e) => (
            <li key={`${e.company}-${e.date}`} className="edu-item">
              <div className="edu-marker" />
              <div className="edu-body">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="edu-degree">{e.company}</div>
                    <div className="edu-institution mt-1">
                      <span className="exp-role">{e.role}</span>
                      <span className="text-slate-400"> · {e.location}</span>
                    </div>
                    <div className="edu-note mt-2 text-sm text-slate-700">
                      {e.desc}
                    </div>
                  </div>
                  <div className="edu-date whitespace-nowrap text-sm text-slate-500">
                    {e.date}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <h2 className="text-lg font-semibold">Volunteering and Leadership</h2>
      <Volunteering />
    </>
  );
}
