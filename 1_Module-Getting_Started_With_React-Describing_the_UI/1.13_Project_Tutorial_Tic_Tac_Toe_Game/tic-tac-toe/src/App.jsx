import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="h-12 w-12 border border-gray-400 m-3 font-bold text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, onPlay, squares }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player" + (xIsNext ? "X" : "Y");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquare = squares.slice();
    if (xIsNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "Y";
    }
    onPlay(newSquare);
  }

  return (
    <div>
      <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[history.length - 1];

  function handlePlay(newSquare) {
    setXIsNext(!xIsNext);
    setHistory([...history, newSquare]);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext()
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to the Game`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
