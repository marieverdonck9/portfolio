import React from "react";

export default function Volunteering() {
  return (
    <div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">ACTION SENEGAL</h3>
          <p className="text-slate-400 text-sm font-light">Saint-Louis, SN</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">
            Medical Mission to Senegal
          </p>
          <p className="text-slate-400 text-sm font-light">Jul 2018</p>
        </div>
        <p className="text-sm font-light">
          Helping Faux Talibé Child Slaves in Saint-Louis.
        </p>
        <div className="mt-4">
          <a
            className="text-white text-xs px-5 py-1 rounded-sm  border border-blue-700 bg-blue-700 "
            href="https://github.com/marieverdonck9/portfolio_documents/blob/main/MISSION%20HUMANITAIRE.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Presentation
          </a>
          <a
            className="text-xs ml-2 px-5 py-1 rounded-sm  border border-blue-700 text-blue-700"
            href="https://www.actionsenegal.org/?fbclid=IwAR0zsTUhK8NbbB_pTOn_Aewuu45Bqp9_4FWcSwrYGD0zLcJZ__6jMztUETI"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">OUTAGAMIE COUNTY</h3>
          <p className="text-slate-400 text-sm font-light">Wisconsin, USA</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">
            Collaboration Hazard Mitigation Plan
          </p>
          <p className="text-slate-400 text-sm font-light">
            Sep 2022 - Dec 2022
          </p>
        </div>
        <p className="text-sm font-light">
          Assigned the responsibility of pinpointing vulnerable land and road
          areas susceptible to flooding, and producing a comprehensive
          deliverable to augment the revised hazard mitigation plan,
          facilitating financial support.
        </p>
        <div className="mt-4">
          <a
            className="text-white text-xs px-5 py-1 rounded-sm  border border-blue-700 bg-blue-700 "
            href="https://github.com/marieverdonck9/portfolio_documents/blob/main/Disaster%20Proofing%20Critical%20Facilities%20of%20Outagamie%20County.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Final Deliverable
          </a>
          <a
            className="text-xs ml-2 px-5 py-1 rounded-sm  border border-blue-700 text-blue-700"
            href="https://www.outagamie.org"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
