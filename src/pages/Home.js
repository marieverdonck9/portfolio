import { Link } from "react-router-dom";
import { projectInfo } from "../data/projects";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-10 pt-2">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-medium text-blue-900">
            Currently at Ragon Institute · Harvard Medical School
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-slate-900">
          Engineering Immunity for Cancer Therapy
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
          I integrate <span className="font-semibold text-slate-800">genome engineering</span> and <span className="font-semibold text-slate-800">high-throughput profiling</span> to
          uncover mechanisms that can be translated into effective cancer
          immunotherapies. My work spans CRISPR perturbations, single-cell/NGS
          analysis, and computational pipelines to turn data into therapeutic
          hypotheses.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary text-sm">
            View Research Projects
          </Link>
          <Link to="/experience" className="btn-secondary text-sm">
            Research Experience
          </Link>
          <a
            href="mailto:marie_verdonck@hms.harvard.edu"
            className="btn-outline text-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Research Focus */}
      <section className="mb-10 p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl">
        <h2 className="text-xl font-bold mb-3 text-slate-900">Current Research Focus</h2>
        <p className="text-base text-slate-700 leading-relaxed mb-4">
          My current work focuses on dissecting <span className="font-semibold">T cell–tumor interactions</span> using
          pooled CRISPR perturbations coupled with single-cell readouts. I aim
          to map regulatory networks that define cytotoxic function and
          persistence, integrating multi-omic datasets to identify genetic
          levers that enhance immune cell efficacy in solid tumors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="font-semibold text-sm text-slate-900 mb-1">Genome Engineering</h3>
            <p className="text-xs text-slate-600">CRISPR/Cas9 perturbations for functional genomics</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="font-semibold text-sm text-slate-900 mb-1">Multi-Omic Profiling</h3>
            <p className="text-xs text-slate-600">Single-cell & NGS analysis pipelines</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <div className="text-2xl mb-2">💊</div>
            <h3 className="font-semibold text-sm text-slate-900 mb-1">Translational Impact</h3>
            <p className="text-xs text-slate-600">Data-driven therapeutic hypotheses</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-sm text-slate-600 mt-1">
              Selected work showcasing translational impact and experimental design
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 hidden md:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" id="projects">
          {projectInfo
            .filter((p) => p.featured)
            .slice(0, 3)
            .map((p) => (
              <Project key={p.name} {...p} compact featured />
            ))}
        </div>

        <Link
          to="/projects"
          className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 md:hidden inline-block"
        >
          View All Projects →
        </Link>
      </section>
    </div>
  );
}
