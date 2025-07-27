import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  const cohort = {
    name: "ReactJS July Batch",
    status: "ongoing", // try changing to "completed"
    startDate: "2025-07-01",
  };

  return (
    <div className="App">
      <CohortDetails cohort={cohort} />
    </div>
  );
}

export default App;
