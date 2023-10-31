import { useState } from "react";
import Square from "./Square";

function Board() {
  // let value = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
}
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}

export default Board;
