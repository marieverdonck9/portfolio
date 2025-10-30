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
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4 space-y-6">
      <section className="mb-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h2 className="text-lg font-semibold">Projects</h2>

          <div className="relative" ref={dropdownRef}>
            <button
              className="inline-flex items-center gap-x-2 rounded-sm bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setFilterOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={filterOpen}
              aria-controls="skills-filter"
            >
              Filter
              <svg
                className="-mr-1 h-4 w-4 text-gray-400"
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
                className="absolute right-0 mt-2 w-56 rounded-sm bg-white shadow p-2 border z-10"
              >
                {uniqueSkills.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center gap-2 text-sm px-2 py-1 hover:bg-slate-50 rounded"
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
                    />
                    {skill}
                  </label>
                ))}
                {cat.length > 0 && (
                  <button
                    className="mt-2 text-xs text-slate-500 underline"
                    onClick={() => setCat([])}
                  >
                    Clear filter
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600">
          Filter by skills to surface projects aligned with your interests.
        </p>
      </section>

      <section aria-live="polite">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
