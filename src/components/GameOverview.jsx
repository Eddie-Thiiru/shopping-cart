import { useLocation } from "react-router-dom";
import "../styles/GameOverview.css";

const Overview = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div className="gameOverview">
      <div className="gameDetails">
        <img src={data.imageURL} alt={`${data.name} background image`}></img>
        <div className="gameAbout">
          <p></p>
        </div>
        <div className="gameMeta">
          <div className="gameGenreScore">
            <div className="genre">
              <h4>Genre</h4>
              <p>{data.genre.map((item) => `${item.name} `)} </p>
            </div>
            <div className="metaScore">
              <h4>Metascore</h4>
              <p>{data.metaScore}</p>
            </div>
          </div>
          <div className="releaseDate">
            <h4>Release Date</h4>
            <p>{data.released}</p>
          </div>
          <div className="gamePlatforms">
            <p>{data.platforms.map((item) => `${item.platform.name} `)}</p>
          </div>
        </div>
      </div>
      <div className="shopSection">
        <h2>{data.name}</h2>
        <p>{data.price}</p>
        <div>
          <button type="button">ADD TO CART</button>
          <button type="button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
