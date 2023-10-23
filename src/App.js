import React from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="flex flex-col md:flex-row p-8 border-t-4 border-blue-500">
      <Profile />
      <Portfolio />
    </div>
  );
}

export default App;
