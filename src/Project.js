import React from "react";

export default function Project({ title, date, link, skills, description }) {
  return (
    <div className="border p-5 rounded-sm">
      <h1 className="font-semibold">{title}</h1>
      <p className="text-slate-400 text-sm font-light">{date}</p>
      <div className="flex flex-wrap mt-2">
        {skills.map((skill) => (
          <p className="text-xs font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
            {skill}
          </p>
        ))}
      </div>
      <p className="my-2 text-sm font-light">{description}</p>
      <a href={link} target="_blank" without rel="noreferrer">
        <button className="text-white text-xs px-5 py-1 rounded-sm bg-blue-700">
          Read more
        </button>
      </a>
    </div>
  );
}
