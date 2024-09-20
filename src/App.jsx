import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Congrats from "./Components/Congrats.jsx";
import Controls from "./Components/Controls.jsx";
import cardData from "./cardData.json"
function App() {
  

  const [cards, setCards] = useState([...shuffleItems(cardData)]);
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
     
    setCards([...shuffleItems(cardData)]);
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