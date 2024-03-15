import logo from './logo.svg';
import './App.css';


//////////////////// when clicking button adds 1 "clicked 1 time" for that specific button /////////////////////

/*
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>counters click</h1>
        <MyButton/>
        <MyButton/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function MyButton(){
  const [count,setcount] = useState(0);

  function handleclick(){
    setcount(count+1)
  }

  return(
    <button onClick={handleclick}>
       clicked {count} times 
    </button>
  );
}

export default App;
*/


//////////////////////  when clicking 1 button adds clicked +1 time two all button ////////////////////


/*

import {useState} from 'react';


function App() {

  const [count,setcount] = useState(0);

  function handleclick(){
    setcount(count+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>counters click</h1>
        <MyButton count={count} onclick={handleclick}/>
        <MyButton count={count} onclick={handleclick}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function MyButton({count,onclick}){

  return(
    <button onClick={onclick}>
       clicked {count} times 
    </button>
  );
}

export default App;

*/

import { useState } from 'react';

function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick} k>{value}</button>
  );
}

export default function Borad() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setsquares] = useState(Array(9).fill(null));        // after :  squares ={'o','null','x','x','x','o''''}  //

  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setsquares(nextSquares);
    setxIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


