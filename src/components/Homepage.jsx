import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useProductsData } from "./utils/dataContext";
import nintendoImg from "../images/nintendo.svg";
import playstationImg from "../images/playstation.svg";
import xboxImg from "../images/xbox.svg";
import pcImg from "../images/windows.png";
import redDeadImg from "../images/red-read-redemption-2.png";
import gtaImg from "../images/grand-theft-auto-v.svg";
import witcherImg from "../images/witcher-3.png";
import hollowImg from "../images/hollow-knight.png";
import forzaImg from "../images/forza.svg";
import "../styles/Homepage.css";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutTitle">
        <h2>Explore</h2>
        <h2>THE ULTIMATE GAME STORE</h2>
      </div>
      <p>
        The world of video games is waiting for you to discover its wonders and
        possibilities, from sprawling immersive open world games, to action
        packed games, to mesmerizing puzzle games. Whether you are a beginner or
        an expert, a casual or a hardcore player, a solo or a multiplayer fan,
        there is a video game for you. You want it? We got it!
      </p>
      <div className="aboutCollection">
        <h3>Games Collection</h3>
        <p>10,000+</p>
      </div>
      <div className="platforms">
        <div className="nintendo">
          <img src={nintendoImg} alt="nintendo logo"></img>
          <p>Nintendo</p>
        </div>
        <div className="playstation">
          <img src={playstationImg} alt="playstation logo"></img>
          <p>PlayStation</p>
        </div>
        <div className="xbox">
          <img src={xboxImg} alt="xbox logo"></img>
          <p>XBOX</p>
        </div>
        <div className="pc">
          <img src={pcImg} alt="windows 10 logo"></img>
          <p>PC</p>
        </div>
      </div>
    </div>
  );
};

const Adventure = ({ background, id, handleClick }) => {
  return (
    <div className="adventureSection">
      <div className="sectionBackground">
        <img className="rdrBackground" src={background} alt="" />
        <div className="adventureSecDescription">
          <img src={redDeadImg} alt="rdr 2 logo"></img>
          <p>
            Experience the epic tale of outlaw Arthur Morgan and the infamous
            Van der Linde gang, on the run across America at the dawn of the
            modern age.
          </p>
          <div>
            <p>Starting at $59.99</p>
            <button
              type="button"
              id={id}
              className="adventureSectionBtn"
              onClick={handleClick}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Action = ({ background, id, handleClick }) => {
  return (
    <div className="actionSection">
      <div className="sectionBackground">
        <img className="gta5Background" src={background} alt="" />
        <div className="sectionDescription">
          <img className="gta5Logo" src={gtaImg} alt="gta 5 logo"></img>
          <div>
            <p>$29.99</p>
            <button
              type="button"
              id={id}
              className="actionSectionBtn"
              onClick={handleClick}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RPG = ({ background, id, handleClick }) => {
  return (
    <div className="rpgSection">
      <div className="sectionBackground">
        <img className="witcherBackground" src={background} alt="" />
        <div className="sectionDescription">
          <img
            className="witcherLogo"
            src={witcherImg}
            alt="witcher 3 logo"
          ></img>
          <div>
            <p>$49.99</p>
            <button
              type="button"
              id={id}
              className="rpgSectionBtn"
              onClick={handleClick}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Platform = ({ background, id, handleClick }) => {
  return (
    <div className="platformSection">
      <div className="sectionBackground">
        <img className="hollowKnightBackground" src={background} alt="" />
        <div className="sectionDescription">
          <img
            className="hollowKnightLogo"
            src={hollowImg}
            alt="hollow knight logo"
          ></img>
          <div>
            <p>$29.99</p>
            <button
              type="button"
              id={id}
              className="platformSectionBtn"
              onClick={handleClick}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Racing = ({ background, id, handleClick }) => {
  return (
    <div className="racingSection">
      <div className="sectionBackground">
        <img className="forzaBackground" src={background} alt="" />
        <div className="sectionDescription">
          <img className="forzaLogo" src={forzaImg} alt="forza 5 logo"></img>
          <div>
            <p>$59.99</p>
            <button
              type="button"
              id={id}
              className="forzaSectionBtn"
              onClick={handleClick}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Group = ({ children }) => {
  return (
    <div className="groupSection">
      <h2>Top Sellers</h2>
      <div className="homepageGroup">{children}</div>
    </div>
  );
};

const Homepage = () => {
  const navigate = useNavigate();
  const { redDeadRedemption2, gta5, witcher3, hollowKnight, forza5 } =
    useProductsData();
  const array = [redDeadRedemption2, gta5, witcher3, hollowKnight, forza5];

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
    <div className="homepage">
      <About />
      <Adventure
        background={redDeadRedemption2.data.imageURL}
        id={redDeadRedemption2.data.uniqueId}
        handleClick={handleClick}
      />
      <Group>
        <Action
          background={gta5.data.imageURL}
          title={gta5.data.name}
          id={gta5.data.uniqueId}
          handleClick={handleClick}
        />
        <RPG
          background={witcher3.data.imageURL}
          title={witcher3.data.name}
          id={witcher3.data.uniqueId}
          handleClick={handleClick}
        />
        <Platform
          background={hollowKnight.data.imageURL}
          title={hollowKnight.data.name}
          id={hollowKnight.data.uniqueId}
          handleClick={handleClick}
        />
        <Racing
          background={forza5.data.imageURL}
          title={forza5.data.name}
          id={forza5.data.uniqueId}
          handleClick={handleClick}
        />
      </Group>
    </div>
  );
};

Adventure.propTypes = {
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};

Action.propTypes = {
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};

RPG.propTypes = {
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};

Platform.propTypes = {
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};

Racing.propTypes = {
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};

Group.propTypes = {
  children: PropTypes.array,
};

export default Homepage;
