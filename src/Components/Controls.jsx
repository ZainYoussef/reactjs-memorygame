import PropTypes from "prop-types"
function Controls({ onHintClick,onRestartClick,hints,setHints }) {
  

  function handleHintClick() {
    if (hints > 0) {
      setHints((prevHints) => prevHints - 1);
      onHintClick(); // Trigger hint action in parent component
    }
  }

  return (
    <div className="controls">
      <button onClick={onRestartClick}>Reset</button>
      <button onClick={handleHintClick}>Hint ({hints})</button>
    </div>
  );
}
Controls.propTypes={
  onHintClick:PropTypes.func,
  onRestartClick:PropTypes.func,
  hints:PropTypes.number,
  setHints:PropTypes.func
}

export default Controls;