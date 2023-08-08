import PropTypes from "prop-types";
import { useProductsData } from "./utils/dataContext";
import "../styles/Homepage.css";

// Add placeholder image before real image loads to prevent broken image
// Add placeholder image before real image loads to prevent broken image
// Add placeholder image before real image loads to prevent broken image
// Add placeholder image before real image loads to prevent broken image

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutTitle">
        <h2>Explore</h2>
        <h2>The Ultimate Game Store</h2>
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
          <img></img>
          <p>Nintendo</p>
        </div>
        <div className="playstation">
          <img></img>
          <div>PlayStation</div>
        </div>
        <div className="xbox">
          <img></img>
          <div>XBOX</div>
        </div>
        <div className="pc">
          <img></img>
          <div>PC</div>
        </div>
      </div>
    </div>
  );
};

const Adventure = ({ background }) => {
  return (
    <div className="adventureSection">
      <div className="sectionBackground">
        <img src={background} alt="" />
        <div className="adventureSecDescription">
          <img></img>
          <p>
            Experience the epic tale of outlaw Arthur Morgan and the infamous
            Van der Linde gang, on the run across America at the dawn of the
            modern age.
          </p>
          <div>
            <p>Starting at $59.99</p>
            <button type="button" className="adventureSectionBtn">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Action = ({ background, title }) => {
  return (
    <div className="actionSection">
      <div className="sectionBackground">
        <img src={background} alt="" />
        <div className="sectionDescription">
          <img></img>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

const RPG = ({ background, title }) => {
  return (
    <div className="rpgSection">
      <div className="sectionBackground">
        <img src={background} alt="" />
        <div className="sectionDescription">
          <img></img>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

const Platform = ({ background, title }) => {
  return (
    <div className="platformSection">
      <div className="sectionBackground">
        <img src={background} alt="" />
        <div className="sectionDescription">
          <img></img>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

const Racing = ({ background, title }) => {
  return (
    <div className="racingSection">
      <div className="sectionBackground">
        <img src={background} alt="" />
        <div className="sectionDescription">
          <img></img>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

const Group = ({ children }) => {
  return (
    <div className="groupSection">
      <h1>Top Sellers</h1>
      <div className="homepageGroup">{children}</div>
    </div>
  );
};

const Homepage = () => {
  const { redDeadRedemption2, gta5, witcher3, hollowKnight, forza5 } =
    useProductsData();

  return (
    <div className="homepage">
      <About />
      <Adventure background={redDeadRedemption2.data.imageURL} />
      <Group>
        <Action background={gta5.data.imageURL} title={gta5.data.name} />
        <RPG background={witcher3.data.imageURL} title={witcher3.data.name} />
        <Platform
          background={hollowKnight.data.imageURL}
          title={hollowKnight.data.name}
        />
        <Racing background={forza5.data.imageURL} title={forza5.data.name} />
      </Group>
    </div>
  );
};

Adventure.propTypes = {
  background: PropTypes.string,
};

Action.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
};

RPG.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
};

Platform.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
};

Racing.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
};

Group.propTypes = {
  children: PropTypes.array,
};

export default Homepage;
