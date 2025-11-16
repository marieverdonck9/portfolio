import { education } from "../data/education";

export default function Education() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-300" />

      <ul className="space-y-6">
        {education.map((e, idx) => (
          <li key={e.degree} className="relative md:pl-10">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-0 top-2 w-0.5 h-0.5">
              <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-brand-500 border-4 border-white shadow-md" />
            </div>

            <div className="card p-5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{e.degree}</h3>
                  <div className="text-sm font-semibold text-brand-600 mt-1">
                    {e.institution}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {e.date}
                </div>
              </div>
              {e.note && (
                <p className="text-sm text-slate-700 leading-relaxed">
                  {e.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
