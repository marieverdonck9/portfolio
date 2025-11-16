import { volunteering } from "../data/volunteering";

export default function Volunteering() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-300" />

      <ul className="space-y-6">
        {volunteering.map((v, idx) => (
          <li key={`${v.title}-${v.date}`} className="relative md:pl-10">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-0 top-2 w-0.5 h-0.5">
              <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-md" />
            </div>

            <div className="card p-5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {v.role && (
                      <>
                        <span className="text-sm font-semibold text-brand-600">
                          {v.role}
                        </span>
                        <span className="text-slate-400">·</span>
                      </>
                    )}
                    {v.location && (
                      <span className="text-sm text-slate-600">{v.location}</span>
                    )}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {v.date}
                </div>
              </div>

              {v.desc && (
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {v.desc}
                </p>
              )}

              {Array.isArray(v.links) && v.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {v.links.map((l) => (
                    <a
                      key={`${v.title}-${l.label}`}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        l.primary
                          ? "btn-primary text-xs inline-flex items-center gap-1.5"
                          : "btn-outline text-xs inline-flex items-center gap-1.5"
                      }
                      aria-label={l.label}
                    >
                      {l.label}
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
