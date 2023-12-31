import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "../styles/GameOverview.css";

const Overview = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  const handleBuyClicks = () => {
    addToCart(data);
    navigate("/cart");
  };

  return (
    <div className="gameOverview">
      <h2>Game Overview</h2>
      <div className="gameDetails">
        <img src={data.imageURL} alt={`${data.name} background image`}></img>
        <div className="gameAbout">
          <p>{data.story}</p>
        </div>
        <div className="gameMeta">
          <div className="gameMetaOne">
            <div className="genre">
              <h4>Genre</h4>
              <p>
                {data.genre.map((item, index) => {
                  if (data.genre.length - 1 === index) {
                    return `${item.name}`;
                  }
                  return `${item.name}, `;
                })}{" "}
              </p>
            </div>
            <div className="metaScore">
              <h4>Metascore</h4>
              <p>{data.metaScore}</p>
            </div>
          </div>
          <div className="gameMetaTwo">
            <div className="gamePlatforms">
              <h4>Platforms</h4>
              <p>
                {data.platforms.map((item, index) => {
                  if (data.platforms.length - 1 === index) {
                    return `${item.platform.name}`;
                  }
                  return `${item.platform.name}, `;
                })}
              </p>
            </div>
            <div className="releaseDate">
              <h4>Release Date</h4>
              <p>{data.released}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gameDetailsTwo">
        <h2>{data.name}</h2>
        <div className="shopSection">
          <p>{`$${data.price}`}</p>
          <div className="cartBuy">
            <button
              className="addCartBtn"
              type="button"
              onClick={() => addToCart(data)}
            >
              ADD TO CART
            </button>
            <button className="buyBtn" type="button" onClick={handleBuyClicks}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
