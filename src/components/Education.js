import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="mb-4">
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.degree} className="edu-item">
            <div className="edu-marker" />
            <div className="edu-body">
              <div className="flex items-start justify-between">
                <div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-institution">{e.institution}</div>
                  {e.note && <div className="edu-note">{e.note}</div>}
                </div>
                <div className="edu-date">{e.date}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
