import { Link } from "react-router-dom";
import { projectInfo } from "../data/projects";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <section className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">
          Engineering Immunity for Cancer Therapy
        </h1>
        <p className="text-sm text-slate-500 mb-3">
          Currently at{" "}
          <span className="font-medium text-slate-700">Ragon Institute</span>
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          I integrate genome engineering and high-throughput profiling to
          uncover mechanisms that can be translated into effective cancer
          immunotherapies. My work spans CRISPR perturbations, single-cell/NGS
          analysis, and computational pipelines to turn data into therapeutic
          hypotheses.
        </p>

        <div className="mt-4 flex gap-3">
          <Link to="/experience" className="btn-secondary text-sm">
            Experience
          </Link>
          <Link to="/projects" className="btn-primary text-sm">
            See projects
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Current research</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          My current work focuses on dissecting T cell–tumor interactions using
          pooled CRISPR perturbations coupled with single-cell readouts. I aim
          to map regulatory networks that define cytotoxic function and
          persistence, integrating multi-omic datasets to identify genetic
          levers that enhance immune cell efficacy in solid tumors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Featured projects</h2>
        <p className="text-sm text-slate-600 mb-4">
          Selected projects that showcase translational impact, experimental
          design, and analysis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="projects">
          {projectInfo
            .filter((p) => p.featured)
            .slice(0, 3)
            .map((p) => (
              <Project key={p.name} {...p} compact featured />
            ))}
        </div>
      </section>
    </div>
  );
}
