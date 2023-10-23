import React from "react";

export default function Experience() {
  return (
    <div className="mb-4">
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">VIB</h3>
          <p className="text-slate-400 text-sm font-light">Leuven, BE</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">Research Student</p>
          <p className="text-slate-400 text-sm font-light">
            Sept 2023 - Present
          </p>
        </div>
        <p className="text-sm font-light">
          Performing high-throughout genome engineering to unravel the genetic
          basis of adaptation in{" "}
          <span className="italic">Saccharomyces cerevisiae</span> for my
          master’s thesis at Vonesch Lab.
        </p>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">IAESTE</h3>
          <p className="text-slate-400 text-sm font-light">Leuven, BE</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">Chief Marketing</p>
          <p className="text-slate-400 text-sm font-light">
            Jul 2023 - Present
          </p>
        </div>
        <p className="text-sm font-light">
          Managing IAESTE's brand presence among students, developing a
          strategic plan to increase international student connections.
        </p>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Starbucks</h3>
          <p className="text-slate-400 text-sm font-light">
            BSCA Charleroi Airport, BE
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">Barista</p>
          <p className="text-slate-400 text-sm font-light">
            Jul 2019 - Aug 2023
          </p>
        </div>
      </div>
    </div>
  );
}
