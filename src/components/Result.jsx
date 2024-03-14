

const Result = ({ gameTurns }) => {
  return (
    <ol>
      {gameTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          selected {turn.player} to {turn.square.row},
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Result;
