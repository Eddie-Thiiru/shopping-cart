import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import About from "./About";
import "../styles/Homepage.css";
import png from "../../jason.png";

const Adventure = ({ background }) => {
  return (
    <div className="adventureSection">
      <h2>Action-Adventure Games</h2>
      <div className="sectionImage">
        <img src={png} alt="" />
      </div>
    </div>
  );
};

const Action = ({ background }) => {
  return (
    <div className="actionSection">
      <div className="sectionImage">
        <img src={background} alt="" />
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
        <img src={background} alt="" />
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
        <img src={background} alt="" />
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
        <img src={background} alt="" />
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
        <img src={background} alt="" />
      </div>
      <div className="sectionDescription">
        <h2>Racing Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Sports = ({ background }) => {
  return (
    <div className="sportsSection">
      <div className="sectionImage">
        <img src={background} alt="" />
      </div>
      <div className="sectionDescription">
        <h2>Sports Games</h2>
        <p></p>
      </div>
    </div>
  );
};

const Group = ({ children }) => {
  return <div className="groupSection">{children}</div>;
};

const Homepage = () => {
  const [data, setData] = useState({
    actionURL: "",
    adventureURL: "",
    rpgURL: "",
    strategyURL: "",
    platformURL: "",
    racingURL: "",
    sportsURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();
        // " https://api.rawg.io/api/games/3498?key=ded6236dee784a49946f45a75db16ec8",
        // { mode: "cors" },
        const data = await response.json();

        if (!data.error) {
          console.log(data);
          setData(data.background_image);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <About />
      <Adventure />
      <Group>
        <Action background={data.actionURL} />
        <RPG background={data.rpgURL} />
        <Strategy background={data.strategyURL} />
        <Platform background={data.platformURL} />
        <Racing background={data.racingURL} />
        <Sports background={data.sportsURL} />
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

Sports.propTypes = {
  background: PropTypes.string,
};

Group.propTypes = {
  children: PropTypes.array,
};

export default Homepage;
