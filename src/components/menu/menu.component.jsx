import React from "react";

function Menu({ changeUser, chooseContent, user }) {
  return (
    <div>
      Hello, {user}!
      <button onClick={() => chooseContent("game")}>Start!</button>
      <button onClick={() => chooseContent("hiscores")}>High Scores</button>
      <button onClick={changeUser}>Change user</button>
    </div>
  );
}

export default Menu;
