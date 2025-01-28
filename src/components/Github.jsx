import React from "react";

const Github = () => {
  return (
    <div className="github-container">
      <iframe
        frameBorder="0"
        height="157px"
        width="695px"
        src="https://git-graph.vercel.app/embed/gwndolyn?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=3&blockSize=10&fontSize=14&weekStart=0&year=2025"
        title="Git Graph"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Github;
