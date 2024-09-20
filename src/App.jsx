import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Congrats from "./Components/Congrats.jsx";
import Controls from "./Components/Controls.jsx";

function App() {
  const initialCards = [
    { id: 1, name: "html", img: "/public/html.png", state: "" },
    { id: 2, name: "html", img: "/public/html.png", state: "" },
    { id: 3, name: "css", img: "/public/css.png", state: "" },
    { id: 4, name: "css", img: "/public/css.png", state: "" },
    { id: 5, name: "js", img: "/public/js.png", state: "" },
    { id: 6, name: "js", img: "/public/js.png", state: "" },
    { id: 7, name: "scss", img: "/public/scss.png", state: "" },
    { id: 8, name: "scss", img: "/public/scss.png", state: "" },
    { id: 9, name: "react", img: "/public/react.png", state: "" },
    { id: 10, name: "react", img: "/public/react.png", state: "" },
    { id: 11, name: "vue", img: "/public/vue.png", state: "" },
    { id: 12, name: "vue", img: "/public/vue.png", state: "" },
    { id: 13, name: "angular", img: "/public/angular.png", state: "" },
    { id: 14, name: "angular", img: "/public/angular.png", state: "" },
    { id: 15, name: "node", img: "/public/nodejs.png", state: "" },
    { id: 16, name: "node", img: "/public/nodejs.png", state: "" },
  ];

  const [cards, setCards] = useState([...shuffleItems(initialCards)]);
  const [gameOver, setGameOver] = useState(false);
  const [hintCardID, setHintCardID] = useState(null);
  const [hints, setHints] = useState(3);
  // Ensures the gameOver state is only set once.
  function handleGameOver() {
    if (!gameOver) {
      setGameOver(true);
    }
  }

  function handleHintClick() {
    const randomCardID = Math.floor(Math.random() * 16) + 1;
    setHintCardID(randomCardID);
    setTimeout(() => {
      setHintCardID(null);
    }, 1000);
  }

  function handleRestart() {
 // Using setTimeout with a 0ms delay ensures the state update is processed
  // asynchronously, allowing React to complete the current render cycle
  // before applying the new state update. This prevents multiple state updates
  // from being processed in the same render cycle, which could cause the
  // Congrats pane to be shown multiple times before the game is properly reset.
  setTimeout(() => {
    setGameOver(false);
  }, 0); // Asynchronous delay
     
    setCards([...shuffleItems(initialCards)]);
    setHints(3);
  }

  return (
    <div className="main-container">
      <h1>Memory Game - Reactjs</h1>
      <Cards cards={cards} setGameOver={handleGameOver} hintCardID={hintCardID} gameOver={gameOver} />
      <Controls onHintClick={handleHintClick} onRestartClick={handleRestart} hints={hints} setHints={setHints} />
      {gameOver && <Congrats onRestartClick={handleRestart} />}
    </div>
  );
}

function shuffleItems(items) {
  return items.sort(() => Math.random() - 0.5);
}

export default App;