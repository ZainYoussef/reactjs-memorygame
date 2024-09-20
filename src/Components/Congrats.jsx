
import PropTypes from "prop-types";

function Congrats({ onRestartClick }) {
  return (
    <div className="congrats">
      <h2>You Won!</h2>
      <p>Congratulations, you won the game!</p>
      <div className="select-option-container">
        <button onClick={onRestartClick}>Restart</button>
      </div>
    </div>
  );
}

Congrats.propTypes = {
  onRestartClick: PropTypes.func,
};



export default Congrats;
