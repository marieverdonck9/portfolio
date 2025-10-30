import { volunteering } from "../data/volunteering";

export default function Volunteering() {
  return (
    <section id="volunteering" className="mb-4">
      <ul className="edu-list">
        {volunteering.map((v) => (
          <li key={`${v.title}-${v.date}`} className="edu-item">
            <div className="edu-marker" />
            <div className="edu-body">
              <div className="flex items-start justify-between">
                <div>
                  <div className="edu-degree">{v.title}</div>

                  <div className="edu-institution mt-1">
                    {v.organization ? (
                      <>
                        {v.organization}
                        {v.role && (
                          <span className="exp-role"> — {v.role}</span>
                        )}
                        {v.location && (
                          <span className="text-slate-400">
                            {" "}
                            · {v.location}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        {v.role && <span className="exp-role">{v.role}</span>}
                        {v.location && (
                          <span className="text-slate-400">
                            {" "}
                            · {v.location}
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {v.desc && <div className="edu-note mt-2">{v.desc}</div>}

                  {Array.isArray(v.links) && v.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {v.links.map((l) => (
                        <a
                          key={`${v.title}-${l.label}`}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            l.primary
                              ? "btn-primary text-xs"
                              : "btn-outline text-xs"
                          }
                          aria-label={l.label}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="edu-date">{v.date}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
