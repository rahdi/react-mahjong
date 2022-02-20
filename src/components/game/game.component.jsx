import React, { useState, useEffect } from "react";
import Tile from "../tile/tile.component";
import getTemplate from "./template";

function Game() {
  const [layout, setLayout] = useState();
  const rows = 8;
  const columns = 15; //

  // Create an empty layout object and fill it with letters
  useEffect(() => {
    let allPieces =
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
              const randomIndex = parseInt(
                (allPieces.length - 1) * Math.random()
              );
              filledRow[x] = allPieces[randomIndex];
              allPieces = allPieces.replace(allPieces[randomIndex], "");
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
    // Make a layout of tiles from layout object
    const gameLayout = [];
    for (let L = 0; L < Object.keys(layout).length; L++) {
      if (layout[L] !== undefined) {
        const oneLevel = [];
        for (let x = 0; x < columns; x = x + 0.5) {
          for (let y = 0; y < rows; y = y + 0.5) {
            if (layout[L][y] !== undefined && layout[L][y][x] !== undefined) {
              let isLeftSideEmpty = true;
              let isRightSideEmpty = true;
              let isAboveEmpty = true;
              let isTileClickable = true;
              if (
                layout[L][y][x - 1] ||
                (layout[L][y - 0.5] && layout[L][y - 0.5][x - 1]) ||
                (layout[L][y + 0.5] && layout[L][y + 0.5][x - 1])
              ) {
                isLeftSideEmpty = false;
              }
              if (
                layout[L][y][x + 1] ||
                (layout[L][y - 0.5] && layout[L][y - 0.5][x + 1]) ||
                (layout[L][y + 0.5] && layout[L][y + 0.5][x + 1])
              ) {
                isRightSideEmpty = false;
              }
              if (layout[L + 1]) {
                if (layout[L + 1][y]) {
                  if (
                    layout[L + 1][y][x] ||
                    layout[L + 1][y][x + 0.5] ||
                    layout[L + 1][y][x - 0.5]
                  ) {
                    isAboveEmpty = false;
                  }
                }
                if (layout[L + 1][y + 0.5]) {
                  if (
                    layout[L + 1][y + 0.5][x] ||
                    layout[L + 1][y + 0.5][x + 0.5] ||
                    layout[L + 1][y + 0.5][x - 0.5]
                  ) {
                    isAboveEmpty = false;
                  }
                }
                if (layout[L + 1][y - 0.5]) {
                  if (
                    layout[L + 1][y - 0.5][x] ||
                    layout[L + 1][y - 0.5][x + 0.5] ||
                    layout[L + 1][y - 0.5][x - 0.5]
                  ) {
                    isAboveEmpty = false;
                  }
                }
              }
              if (!isAboveEmpty || (!isLeftSideEmpty && !isRightSideEmpty)) {
                isTileClickable = false;
              }
              oneLevel.push(
                <Tile
                  key={`tile-${L}${y}${x}`}
                  symbol={layout[L][y][x]}
                  level={L}
                  row={y}
                  column={x}
                  maxRows={rows}
                  maxColumns={columns}
                  isTileClickable={isTileClickable}
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
