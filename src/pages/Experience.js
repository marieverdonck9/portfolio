import Education from "../components/Education";
import Volunteering from "../components/Volunteering";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Education Section */}
      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          <p className="text-sm text-slate-600 mt-1">
            Academic training in immunology and genome engineering
          </p>
        </div>
        <Education />
      </section>

      {/* Research Experience */}
      <section id="experience" className="mb-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900">Research Experience</h2>
          <p className="text-sm text-slate-600 mt-1">
            Translational immunology and cancer immunotherapy research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-300" />

          <ul className="space-y-6">
            {experiences.map((e, idx) => (
              <li key={`${e.company}-${e.date}`} className="relative md:pl-10">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-2 w-0.5 h-0.5">
                  <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-md" />
                </div>

                <div className="card p-5 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{e.company}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-brand-600">{e.role}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-sm text-slate-600">{e.location}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {e.date}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Volunteering and Leadership */}
      <section className="mb-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900">Leadership & Service</h2>
          <p className="text-sm text-slate-600 mt-1">
            Community engagement and organizational leadership
          </p>
        </div>
        <Volunteering />
      </section>
    </div>
  );
}
