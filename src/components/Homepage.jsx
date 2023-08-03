import PropTypes from "prop-types";
import About from "./About";
import "../styles/Homepage.css";
import { useProductsData } from "./utils/dataContext";

const Adventure = ({ background }) => {
  return (
    <div className="adventureSection">
      <h2>Action-Adventure Games</h2>
      <div className="sectionImage">
        <img src={background} alt="red dead redemption background image" />
      </div>
    </div>
  );
};

const Action = ({ background }) => {
  return (
    <div className="actionSection">
      <div className="sectionImage">
        <img src={background} alt="grand theft auto 5 background image" />
      </div>
      <div className="sectionDescription">
        <h2>Action Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const RPG = ({ background }) => {
  return (
    <div className="rpgSection">
      <div className="sectionImage">
        <img src={background} alt="the witcher 3 background image" />
      </div>
      <div className="sectionDescription">
        <h2>RPG Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Strategy = ({ background }) => {
  return (
    <div className="strategySection">
      <div className="sectionImage">
        <img src={background} alt="civilization 6 background image" />
      </div>
      <div className="sectionDescription">
        <h2>Strategy Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Platform = ({ background }) => {
  return (
    <div className="platformSection">
      <div className="sectionImage">
        <img src={background} alt="hollow knight background image" />
      </div>
      <div className="sectionDescription">
        <h2>Platform Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Racing = ({ background }) => {
  return (
    <div className="racingSection">
      <div className="sectionImage">
        <img src={background} alt="forza 5 background image" />
      </div>
      <div className="sectionDescription">
        <h2>Racing Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Puzzle = ({ background }) => {
  return (
    <div className="puzzleSection">
      <div className="sectionImage">
        <img src={background} alt="portal 2 background image" />
      </div>
      <div className="sectionDescription">
        <h2>Puzzle Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Group = ({ children }) => {
  return <div className="groupSection">{children}</div>;
};

const Homepage = () => {
  const {
    redDeadRedemption2,
    gta5,
    witcher3,
    civ6,
    hollowKnight,
    forza5,
    portal2,
  } = useProductsData();

  return (
    <div className="homepage">
      <About />
      <Adventure background={redDeadRedemption2.data.imageURL} />
      <Group>
        <Action background={gta5.data.imageURL} />
        <RPG background={witcher3.data.imageURL} />
        <Strategy background={civ6.data.imageURL} />
        <Platform background={hollowKnight.data.imageURL} />
        <Racing background={forza5.data.imageURL} />
        <Puzzle background={portal2.data.imageURL} />
      </Group>
    </div>
  );
};

Adventure.propTypes = {
  background: PropTypes.string,
};

Action.propTypes = {
  background: PropTypes.string,
};

RPG.propTypes = {
  background: PropTypes.string,
};

Strategy.propTypes = {
  background: PropTypes.string,
};

Platform.propTypes = {
  background: PropTypes.string,
};

Racing.propTypes = {
  background: PropTypes.string,
};

Puzzle.propTypes = {
  background: PropTypes.string,
};

Group.propTypes = {
  children: PropTypes.array,
};

export default Homepage;
