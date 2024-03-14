
const GameBoard = ({ selectActivePlayer, gameBoard }) => {
  
  return (
    <ol className="board-box">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ul className="col-board-box">
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  className="play-button"
                  onClick={() => selectActivePlayer(rowIndex, colIndex)}
                  disabled={col ? true : false}
                >
                  {col}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
