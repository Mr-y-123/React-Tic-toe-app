import "./App.css";
import { useState } from "react";
import Player from "./components/Players";
import GameBoard from "./components/GameBoard";
import Result from "./components/Result";
import { combination_winners } from "./components/COMBINATION_WINNERS";
import GameOver from "./components/GameOver";
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const initialBoardValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PlayerList = [
  {
    name: "player 1",
    symbol: "X",
  },
  {
    name: "player 2",
    symbol: "O",
  },
];
function deriveActivePlayer(gameTurns) {
  let currentActivePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentActivePlayer = "O";
  }
  return currentActivePlayer;
}

function checkWinner(gameBoard){
  let winner
  for (const combination of combination_winners) {
    const  firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const  secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const  thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
       winner=firstSymbol
    }
  }
  return winner
}
function deriveGameBoard(gameTurns){
  let gameBoard = [...initialBoardValue.map((array)=>[...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard
}
function App() {
  const [turns, setTurns] = useState([]);
  const activePlayer = deriveActivePlayer(turns);
  let gameBoard=deriveGameBoard(turns)
  const  winner=checkWinner(gameBoard)
  let hasOver=turns.length===9 && !winner
  
  const handleSelectActivePlayer = (rowIndex, colIndex) => {
    setTurns((preState) => {
      let currentActivePlayer = deriveActivePlayer(preState);
      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePlayer,
        },
        ...preState,
      ];

      return updateTurns;
    });
  };
  const handleRematch=()=>{
    setTurns([])
  }

  

  return (
    <>
      <main>
        <div className="main-board">
          <ul className="player-board">
            {/* <Player name={'palyer1'} symbol={'X'} isActive={activePlayer==='X'}/>
          <Player name={'player2'} symbol={'O'} isActive={activePlayer==='O'}/> */}
            {PlayerList.map((player, playerIndex) => (
              <Player
                key={playerIndex}
                name={player.name}
                symbol={player.symbol}
                isActive={activePlayer === player.symbol}
              />
            ))}
          </ul>
          {(winner||hasOver)&&<GameOver winner={winner} onClickRematch={handleRematch}/>}
          <GameBoard
            selectActivePlayer={handleSelectActivePlayer}
            gameBoard={gameBoard}
          />
        </div>
        <Result gameTurns={turns} />
        
      </main>
    </>
  );
}

export default App;
