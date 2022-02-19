import React, { useState, useEffect } from "react";
import GoBackButton from "../go-back-button/go-back-button.component";

function HiScores({ chooseContent }) {
  const [scores, setScores] = useState();

  useEffect(() => {
    const scores = localStorage.getItem("scores");
    if (scores) {
      setScores("High Scores!");
    } else {
      setScores("No games played yet! :)");
    }
  }, []);

  if (!scores) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {scores}
        <GoBackButton chooseContent={chooseContent} />
      </div>
    );
  }
}

export default HiScores;
