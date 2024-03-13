import React from "react";

const GameOver = ({ winner,onClickRematch }) => {
  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      {winner?<p>{winner} is won</p>:<p>match is tie</p>}
      <button onClick={onClickRematch}>Rematch</button>
    </div>
  );
};

export default GameOver;
