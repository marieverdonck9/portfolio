import React from "react";

export default function Volunteering() {
  return (
    <div className=" border rounded-lg p-4 mb-4">
      <h2 className="font-semibold mb-2">Volunteering</h2>
      <div className="border p-5 rounded-sm shadow mb-4">
        <h3 className="font-semibold">
          Medical Mission to Senegal @ ACTION SENEGAL
        </h3>
        <p className="text-slate-400 text-sm font-light">
          Saint-Louis, Senegal (Jul 2018)
        </p>
        <p className="text-sm font-light">
          Helping Faux Talibé Child Slaves in Saint-Louis.
        </p>
        <div className="mt-4">
          <a
            className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            href="https://github.com/marieverdonck9/portfolio_documents/blob/main/MISSION%20HUMANITAIRE.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Presentation
          </a>
          <a
            className="border text-indigo-700 border-indigo-700 hover:bg-indigo-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            href="https://www.actionsenegal.org/?fbclid=IwAR0zsTUhK8NbbB_pTOn_Aewuu45Bqp9_4FWcSwrYGD0zLcJZ__6jMztUETI"
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
