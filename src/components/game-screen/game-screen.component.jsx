import React from "react";
import Game from "../game/game.component";
import GoBackButton from "../go-back-button/go-back-button.component";

function GameScreen({ chooseContent, user }) {
  return (
    <div>
      Player: {user}
      <br />
      Clock
      <br />
      <GoBackButton chooseContent={chooseContent} />
      <Game />
    </div>
  );
}

export default GameScreen;
