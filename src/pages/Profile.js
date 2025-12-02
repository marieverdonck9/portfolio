import marie from "../assets/marie.jpg";

const expertiseAreas = [
  { icon: "🧬", label: "CRISPR/Cas9" },
  { icon: "🔬", label: "Single-cell NGS" },
  { icon: "📊", label: "Genomic Analysis" },
  { icon: "💻", label: "Python / R" },
  { icon: "🧪", label: "Immunology" },
  { icon: "🎯", label: "Functional Screening" },
];

export default function Profile() {
  return (
    <aside className="w-full md:w-1/4" aria-label="Profile">
      <div className="card p-6 sticky top-6 profile-accent">
        <div className="flex flex-col items-center gap-4">
          <div className="avatar-wrap">
            <img
              src={marie}
              className="rounded-full h-32 w-32 object-cover"
              alt="Portrait of Marie Verdonck"
              loading="eager"
              width={128}
              height={128}
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-900">Marie Verdonck</h1>
            <div className="text-sm text-slate-600 mt-1.5 font-medium">
              MMSc Immunology Candidate
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Harvard Medical School
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-slate-400 mt-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Boston, MA
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <a
            className="w-full text-center btn-primary text-sm py-2.5"
            href="/MarieVerdonck_Resume_PhD.pdf"
            download="MarieVerdonck_Resume_PhD.pdf"
            aria-label="Download CV (PDF)"
          >
            <svg
              className="inline h-4 w-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
          <a
            className="w-full text-center btn-secondary text-sm py-2.5"
            href="mailto:marie_verdonck@hms.harvard.edu"
            aria-label="Email Marie"
          >
            <svg
              className="inline h-4 w-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </a>
        </div>

        <hr className="my-5 border-slate-100" />

        <div className="mb-5">
          <h2 className="text-sm font-bold text-slate-900 mb-2">
            Research Focus
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Translational immunologist integrating genome engineering with
            computational biology to decode and enhance T cell antitumor
            responses.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-3">
            Core Expertise
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {expertiseAreas.map(({ icon, label }) => (
              <div
                key={label}
                className="text-xs text-slate-700 py-2 px-2.5 rounded-lg bg-white border border-slate-200 hover:border-brand-300 hover:bg-blue-50 transition-all text-center"
              >
                <span className="text-base mb-0.5 block">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-5 border-slate-100" />

        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-3">Connect</h2>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/marie-verdonck/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex-1"
            >
              <div className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 border bg-white hover:bg-slate-50 transition-colors">
                <svg
                  className="h-4 w-4 text-slate-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-xs font-medium text-slate-700">
                  LinkedIn
                </span>
              </div>
            </a>
            <a
              href="mailto:marie_verdonck@hms.harvard.edu"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="flex-1"
            >
              <div className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 border bg-white hover:bg-slate-50 transition-colors">
                <svg
                  className="h-4 w-4 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-medium text-slate-700">
                  Email
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
