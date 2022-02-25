import React, { useState } from "react";
import Game from "../game/game.component";
import GoBackButton from "../go-back-button/go-back-button.component";

function GameScreen({ chooseContent, user }) {
  const [possibleMoves, setPossibleMoves] = useState(0);

  return (
    <div>
      Player: {user}
      <br />
      Clock
      <br />
      <GoBackButton chooseContent={chooseContent} />
      <br />
      Possible moves: {possibleMoves}
      <Game setPossibleMoves={(x) => setPossibleMoves(x)} />
    </div>
  );
}

export default GameScreen;
