import React from "react";

export default function Education() {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 sm:gap-0">
        <div className="border p-5 rounded-sm shadow">
          <h3 className="font-semibold">
            MSc Cellular and Genetic Engineering
          </h3>
          <p className="text-slate-400 text-sm font-light">
            KU Leuven (2022 - 2024)
          </p>
          <p className="text-sm font-light">
            Exchange: University of Wisconsin-Madison (Fall 2022)
          </p>
        </div>
        <div className="border p-5 rounded-sm shadow">
          <h3 className="font-semibold">BSc Bioscience Engineering</h3>
          <p className="text-slate-400 text-sm font-light">
            KU Leuven (2019 - 2022)
          </p>
          <p className="text-sm font-light">
            Exchange: NTNU Norway (Fall 2021)
          </p>
        </div>
      </div>
    </div>
  );
}
