import { useState, useRef, useMemo, useEffect } from "react";
import Project from "../components/Project";
import { projectInfo } from "../data/projects";

export default function Portfolio() {
  const dropdownRef = useRef(null);
  const [cat, setCat] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const uniqueSkills = useMemo(
    () =>
      Array.from(new Set(projectInfo.flatMap((p) => p.skills || []))).sort(),
    []
  );

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setFilterOpen(false);
    };
    if (filterOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [filterOpen]);

  const filtered =
    cat.length === 0
      ? projectInfo
      : projectInfo.filter((p) =>
          (p.skills || []).some((s) => cat.includes(s))
        );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="mb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Research Projects</h1>
          <p className="text-base text-slate-600">
            A comprehensive portfolio of research projects spanning translational immunology,
            genome engineering, and computational biology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="bg-brand-500 text-white rounded-lg p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-900">
                {cat.length > 0 ? `Filtered by ${cat.length} skill${cat.length > 1 ? 's' : ''}` : 'Showing all projects'}
              </div>
              <div className="text-xs text-slate-600">
                {filtered.length} of {projectInfo.length} projects
              </div>
            </div>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
              onClick={() => setFilterOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={filterOpen}
              aria-controls="skills-filter"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Filter by Skills
              <svg
                className={`h-4 w-4 text-slate-400 transition-transform ${filterOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {filterOpen && (
              <div
                id="skills-filter"
                role="menu"
                className="absolute right-0 mt-2 w-72 rounded-lg bg-white shadow-lg border border-slate-200 z-20 max-h-96 overflow-y-auto"
              >
                <div className="p-3 border-b border-slate-100">
                  <div className="font-semibold text-sm text-slate-900">Filter by Skills</div>
                  <div className="text-xs text-slate-500 mt-0.5">Select one or more skills</div>
                </div>
                <div className="p-2 space-y-1">
                  {uniqueSkills.map((skill) => (
                    <label
                      key={skill}
                      className="flex items-center gap-3 text-sm px-3 py-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={cat.includes(skill)}
                        onChange={() =>
                          setCat((c) =>
                            c.includes(skill)
                              ? c.filter((x) => x !== skill)
                              : [...c, skill]
                          )
                        }
                        className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                      />
                      <span className="text-slate-700">{skill}</span>
                    </label>
                  ))}
                </div>
                {cat.length > 0 && (
                  <div className="p-3 border-t border-slate-100">
                    <button
                      className="w-full text-sm text-brand-600 font-semibold hover:text-brand-700 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setCat([])}
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-live="polite">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">No projects found</h3>
            <p className="text-sm text-slate-600 mb-4">Try adjusting your filters</p>
            <button
              onClick={() => setCat([])}
              className="btn-primary text-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
