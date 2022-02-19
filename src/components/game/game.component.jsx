import React, { useState, useEffect } from "react";
import Tile from "../tile/tile.component";
import getTemplate from "./template";

function Game() {
  const [layout, setLayout] = useState();
  const [refresh, setRefresh] = useState(Math.random());
  const rows = 8;
  const columns = 15; //

  useEffect(() => {
    const allPieces =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJabcdefghijklmnopqrstuvwxyzABCDEFGHIJabcdefghijklmnopqrstuvwxyzABCDEFGHIJabcdefghijklmnopqrstuvwxyzABCDEFGHIJ";
    const template = getTemplate();
    const filledLayout = {};
    for (let level in template) {
      const tplLevel = template[level];
      const filledLevel = {};
      for (let y = 0; y < rows; y = y + 0.5) {
        if (tplLevel[y]) {
          const tplRow = tplLevel[y];
          const filledRow = {};
          for (let x = 0; x < columns; x = x + 0.5) {
            if (tplRow[x] !== undefined) {
              const randomIndex = parseInt(143 * Math.random());
              filledRow[x] = allPieces[randomIndex];
            }
          }
          filledLevel[y] = filledRow;
        }
      }
      filledLayout[level] = filledLevel;
    }
    setLayout(filledLayout);
  }, []);

  if (!layout) {
    return <div>Loading...</div>;
  } else {
    const gameLayout = [];
    for (let L = 0; L < Object.keys(layout).length; L++) {
      if (layout[L] !== undefined) {
        const oneLevel = [];
        for (let x = 0; x < columns; x = x + 0.5) {
          for (let y = 0; y < rows; y = y + 0.5) {
            if (layout[L][y] !== undefined && layout[L][y][x] !== undefined) {
              oneLevel.push(
                <Tile
                  key={`tile-${L}${y}${x}${refresh}`}
                  symbol={layout[L][y][x]}
                  level={L}
                  row={y}
                  column={x}
                  maxRows={rows}
                  maxColumns={columns}
                />
              );
            }
          }
        }
        gameLayout.push(
          <div
            key={"level-" + L}
            style={{
              position: "absolute",
              top: 0 - 0.7 * L + "vh",
              left: 0 - 0.7 * L + "vw",
            }}
          >
            {oneLevel}
          </div>
        );
      }
    }
    return (
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "10vw",
          height: "80vh",
          width: "80vw",
        }}
      >
        {gameLayout}
      </div>
    );
  }
}

export default Game;
