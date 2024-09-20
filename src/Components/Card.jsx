import PropTypes from "prop-types";

function Card({element, handleClick}) {
  const itemClass = element.state ? " active " + element.state : "";

  return (
    <div
      className={"card" + itemClass}
      onClick={() => handleClick(element.id)}
    >
      <img src={element.img} className="card-image"></img>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.number,
  element:PropTypes.object,
};

export default Card;