import React, { useState } from "react";
import GameScreen from "../game-screen/game-screen.component";
import HiScores from "../hiscores/hiscores.component";
import Menu from "../menu/menu.component";

function Content({ changeUser, user }) {
  const [type, setType] = useState("menu");

  // comment

  const chooseContent = (content) => {
    setType(content);
  };

  if (type === "menu") {
    return (
      <Menu changeUser={changeUser} chooseContent={chooseContent} user={user} />
    );
  }
  if (type === "game") {
    return <GameScreen chooseContent={chooseContent} user={user} />;
  }
  if (type === "hiscores") {
    return <HiScores chooseContent={chooseContent} />;
  }
}

export default Content;
