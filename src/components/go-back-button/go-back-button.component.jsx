import React from "react";

function GoBackButton({ chooseContent }) {
  return <button onClick={() => chooseContent("menu")}>Back</button>;
}

export default GoBackButton;
