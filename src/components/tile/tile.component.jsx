import React, { useState } from "react";
import getSymbol from "./getSymbol";

import "./tile.styles.css";

function Tile({
  symbol,
  level,
  row,
  column,
  maxRows,
  maxColumns,
  isTileClickable,
  chooseTile,
  clicked,
}) {
  const width = 80 / maxColumns;
  const height = 80 / maxRows;
  const top = row * height;
  const left = column * width;
  const backgroundColor = level % 2 ? "darker" : "lighter";
  const transformedSymbol = getSymbol(symbol);
  let fontSize = "3vh";

  const tile = document.getElementsByClassName("tile");

  if (tile && tile[0]) {
    if (tile[0].clientWidth > tile[0].clientHeight) {
      fontSize = 0.5 * tile[0].clientHeight + "px";
    } else {
      fontSize = 0.5 * tile[0].clientWidth + "px";
    }
  }

  const handleClick = () => {
    if (isTileClickable) {
      chooseTile({ level, row, column, symbol });
    }
  };

  return (
    <button
      className={`tile ${
        isTileClickable ? "clickable" : ""
      } ${backgroundColor} ${clicked ? "clicked" : ""}`}
      style={{
        top: top + "vh",
        left: left + "vw",
        width: width + "vw",
        height: height + "vh",
        fontSize: fontSize,
      }}
      onClick={handleClick}
    >
      {transformedSymbol}
    </button>
  );
}

export default Tile;
