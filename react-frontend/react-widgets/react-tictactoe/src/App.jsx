import { useState } from 'react';
import PropTypes from 'prop-types'

import './App.css'

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
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

function Square(props) {
  const { value, onSquareClick } = props

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >{value}</button>
  )
}
Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
}

function Board() {
  const [xIsNext, setXIsNext] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'x'
    } else {
      nextSquares[i] = 'o'
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)

  let status;

  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "x" : "o")
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Board />
    </>
  )
}

export default App