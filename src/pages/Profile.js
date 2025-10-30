import marie from "../assets/marie.jpg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

const skills = [
  "Translational Immunology",
  "CRISPR/Cas9",
  "Next-generation sequencing",
  "Genomic analysis",
  "Python / R",
];

export default function Profile() {
  return (
    <aside className="w-full md:w-1/4" aria-label="Profile">
      <div className="card p-6 sticky top-6 profile-accent">
        <div className="flex flex-col items-center gap-3">
          <img
            src={marie}
            className="rounded-full h-28 w-28 object-cover ring-2 ring-white shadow-sm"
            alt="Portrait of Marie Verdonck"
            loading="eager"
            width={112}
            height={112}
          />
          <div className="text-center">
            <h1 className="text-lg font-semibold">Marie Verdonck</h1>
            <div className="text-sm text-slate-600 mt-1">
              Immunology · Cancer Immunotherapy · Genome Engineering
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Boston, MA — Harvard Medical School (SM, Immunology)
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <a
            className="flex-1 text-center btn-primary text-sm"
            href="/Marie_Verdonck_CV.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download CV (PDF)"
          >
            Download CV
          </a>
          <a
            className="flex items-center justify-center w-10 h-10 rounded-md bg-brand-500 text-white hover:bg-brand-600 transition focus:outline-none focus:ring-2 focus:ring-brand-500"
            href="mailto:marie_verdonck@hms.harvard.edu"
            id="contact"
            aria-label="Email Marie"
            title="Email"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
            </svg>
          </a>
        </div>

        <hr className="my-4 border-slate-100" />

        <h2 className="text-sm font-semibold text-slate-700">About</h2>
        <p className="text-sm text-slate-600 mt-2">
          I’m a translational immunologist engineering and profiling immune
          responses against cancer. I combine wet-lab genome editing with
          computational analysis (NGS & single-cell) to generate actionable
          insights for immunotherapy.
        </p>

        <h2 className="text-sm font-semibold text-slate-700 mt-4">Skills</h2>
        <ul className="w-full grid grid-cols-2 gap-2 mt-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-xs text-slate-700 py-1 px-2 rounded bg-slate-50 border text-center"
            >
              {skill}
            </li>
          ))}
        </ul>

        <hr className="my-4 border-slate-100" />

        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-500">Connect</div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/marie-verdonck/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <div className="w-9 h-9 rounded-md flex items-center justify-center border bg-white hover:bg-slate-50">
                <img src={linkedin} className="h-4 w-4" alt="LinkedIn" />
              </div>
            </a>
            <a
              href="mailto:marieverdonck9@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Alternate email"
            >
              <div className="w-9 h-9 rounded-md flex items-center justify-center border bg-white hover:bg-slate-50">
                <img src={mail} className="h-4 w-4" alt="Email" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
