export default function Project({
  title,
  date,
  link,
  skills = [],
  description,
  imagePath,
  compact = false,
  featured = false,
}) {
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
        className="hover-scale animate-fade-up card"
      >
        <div className="relative h-36 w-full bg-slate-200 overflow-hidden">
          {featured && (
            <span
              className="absolute top-2 left-2 text-xs font-semibold featured-badge"
              aria-hidden
            >
              Featured
            </span>
          )}
          <img
            src={imagePath}
            alt={title}
            className="object-cover w-full h-full img-zoom"
          />
        </div>
        <div className="card-inner">
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-slate-400">{date}</p>
          <p className="text-xs text-slate-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    );
  }

  return (
    <article className="card hover-scale animate-fade-up">
      <a href={link} target="_blank" rel="noreferrer" className="block mb-3">
        <div className="h-48 w-full bg-slate-200 overflow-hidden rounded-t relative">
          {featured && (
            <span
              className="absolute top-3 left-3 text-xs font-semibold featured-badge"
              aria-hidden
            >
              Featured
            </span>
          )}
          <img
            src={imagePath}
            alt={title}
            className="object-cover w-full h-full img-zoom"
          />
        </div>
      </a>
      <div className="card-inner">
        <h1 className="font-semibold text-base">{title}</h1>
        <p className="text-slate-400 text-sm font-light">{date}</p>
        <div className="flex flex-wrap mt-3">
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
        <p className="my-3 text-sm text-slate-700 line-clamp-4">
          {description}
        </p>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}
