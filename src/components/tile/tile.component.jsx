import React from "react";
import getSymbol from "./getSymbol";

function Tile({ symbol, level, row, column, maxRows, maxColumns }) {
  const width = 80 / maxColumns;
  const height = 80 / maxRows;
  const top = row * height;
  const left = column * width;
  const backgroundColor =
    level % 2 ? "hsl(210, 60%, 80%)" : "hsl(210, 60%, 90%)";
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

  return (
    <button
      className="tile"
      style={{
        position: "absolute",
        top: top + "vh",
        left: left + "vw",
        width: width + "vw",
        height: height + "vh",
        borderRadius: "1vw",
        border: "1px solid hsl(210, 100%, 25%)",
        boxShadow: "1vw 1vh 1vw hsl(210, 100%, 25%)",
        backgroundColor: backgroundColor,
        fontSize: fontSize,
      }}
    >
      {transformedSymbol}
    </button>
  );
}

export default Tile;
