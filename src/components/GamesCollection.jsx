import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useProductsData } from "./utils/dataContext";
import "../styles/GamesCollection.css";

const Card = ({ id, imageURL, name, price, onClick }) => {
  return (
    <div className="gameCard" id={id} onClick={onClick}>
      <img src={imageURL} alt={`${name} image`}></img>
      <div className="cardDescription">
        <p>{name}</p>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

const Collection = () => {
  const data = useProductsData();
  const array = Object.values(data);
  const navigate = useNavigate();

  const getGameData = (id) => {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      if (obj.data.uniqueId === id) {
        return obj;
      }
    }
  };

  const handleClick = (e) => {
    const gameId = parseInt(e.target.id);
    const gameData = getGameData(gameId);
    const navigationName = gameData.data.slug;

    navigate(`/games/${navigationName}`, { state: gameData });
  };

  return (
    <div className="gamesCollection">
      <h2>All Games</h2>
      <div className="collection">
        {array.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.data.uniqueId}
              imageURL={item.data.imageURL}
              name={item.data.name}
              price={item.data.price}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

Card.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default Collection;
