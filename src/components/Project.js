import { useState } from "react";

export default function Project({
  name,
  date,
  link,
  skills = [],
  description,
  imagePath,
  compact = false,
  featured = false,
}) {
  const [expanded, setExpanded] = useState(false);

  const tagColorMap = {
    "CRISPR/Cas9": "teal",
    "Genomic analysis": "purple",
    "Next-generation sequencing": "gold",
    "Python / R": "teal",
    "Structural Biology": "purple",
    "Microscopy Techniques": "gold",
  };
  if (compact) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group hover-scale animate-fade-up card block"
      >
        <div className="relative h-40 w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          {featured && (
            <span
              className="absolute top-3 left-3 text-xs font-bold featured-badge shadow-sm z-10"
              aria-hidden
            >
              ⭐ Featured
            </span>
          )}
          <img
            src={imagePath}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm text-slate-900 leading-snug line-clamp-2 mb-1 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-slate-500 mb-2">{date}</p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </a>
    );
  }

  return (
    <article className="card hover-scale animate-fade-up group">
      <a href={link} target="_blank" rel="noreferrer" className="block">
        <div className="h-52 w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden rounded-t-2xl relative">
          {featured && (
            <span
              className="absolute top-3 left-3 text-xs font-bold featured-badge shadow-md z-10"
              aria-hidden
            >
              ⭐ Featured
            </span>
          )}
          <img
            src={imagePath}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </a>
      <div className="p-5">
        <h3 className="font-bold text-base text-slate-900 leading-tight mb-1">
          {name}
        </h3>
        <p className="text-slate-500 text-xs mb-3">{date}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {skills.map((skill) => {
            const key = skill;
            const variant = tagColorMap[skill] || "";
            const className = `tag ${variant ? `tag--${variant}` : ""}`;
            return (
              <span key={key} className={className}>
                {skill}
              </span>
            );
          })}
        </div>
        <p className={`text-sm text-slate-700 leading-relaxed mb-2 ${expanded ? '' : 'line-clamp-4'}`}>
          {description}
        </p>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="text-sm text-brand-600 font-medium hover:text-brand-700 mb-4 inline-flex items-center gap-1"
        >
          {expanded ? 'Show less' : 'Show more'}
          <svg
            className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            aria-label={`View project: ${name}`}
          >
            View Project
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
