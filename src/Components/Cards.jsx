import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import PropTypes from "prop-types";

function Cards(props) {
  const [items, setItems] = useState([...props.cards]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [disableClick, setDisableClick] = useState(false);

  useEffect(() => {
    setItems([...props.cards]); // Reset the cards on restart
  }, [props.cards]);

  // Effect to check if all cards are matched, but call setGameOver only once
  useEffect(() => {
    const unmatchedCards = items.filter((item) => item.state !== "correct");
  
    if (unmatchedCards.length === 0 && items.length > 0) {
      // Make sure gameOver is not already true
      if (!props.gameOver) {
        props.setGameOver(); // All cards are matched
      }
    }
  }, [items, props.gameOver, props.setGameOver,props]);

  // Effect to handle hint activation
  useEffect(() => {
    if (props.hintCardID !== null) {
      const hintItem = items.find((item) => item.id === props.hintCardID);
      if (hintItem && hintItem.state === "") {
        hintItem.state = "active";
        setItems([...items]);

        setTimeout(() => {
          hintItem.state = ""; // Reset state after showing hint
          setItems([...items]);
        }, 1000);
      }
    }
  }, [props.hintCardID, items]);

  function handleClick(itemID) {
    if (disableClick) return;

    const clickedItem = items.find((item) => item.id === itemID);
    if (clickedItem.state === "correct" || clickedItem.state === "active") {
      return;
    }

    if (!selectedItem) {
      clickedItem.state = "active";
      setItems([...items]);
      setSelectedItem(itemID);
    } else {
      setDisableClick(true);
      checkItem(itemID);
    }
  }

  function checkItem(currentItemID) {
    const currentItem = items.find((item) => item.id === currentItemID);
    const prevSelectedItem = items.find((item) => item.id === selectedItem);

    if (currentItem.name === prevSelectedItem.name) {
      currentItem.state = "correct";
      prevSelectedItem.state = "correct";
      setItems([...items]);
      setSelectedItem(null);
      setDisableClick(false);
    } else {
      currentItem.state = "wrong";
      prevSelectedItem.state = "wrong";
      setItems([...items]);
      setTimeout(() => {
        currentItem.state = "";
        prevSelectedItem.state = "";
        setItems([...items]);
        setSelectedItem(null);
        setDisableClick(false);
      }, 1000);
    }
  }

  return (
    <div className="cards-container">
      {items.map((element) => (
        <Card
          key={element.id}
          element={element}
          className="cards"
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.array,
  setGameOver: PropTypes.func,
  hintCardID: PropTypes.number,
  gameOver: PropTypes.bool
};

export default Cards;