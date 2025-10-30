import { awards } from "../data/awards";

export default function Awards() {
  return (
    <section className="mb-4">
      <ul className="edu-list">
        {awards.map((a) => (
          <li key={a.title} className="edu-item">
            <div className="edu-marker">
              <span className="edu-dot" aria-hidden />
            </div>
            <div className="edu-body">
              <div className="flex items-start justify-between">
                <div>
                  <div className="edu-degree">{a.title}</div>
                  <div className="edu-institution mt-1">{a.location}</div>
                  <div className="edu-note mt-2">{a.desc}</div>
                </div>
                <div className="edu-date">{a.date}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
