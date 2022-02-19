import React from "react";

function Menu({ changeUser }) {
  const logout = () => {
    changeUser();
  };

  return (
    <div>
      <button>Start!</button>
      <button>High Scores</button>
      <button onClick={logout}>Change user</button>
    </div>
  );
}

export default Menu;
