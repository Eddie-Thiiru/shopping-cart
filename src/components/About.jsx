const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutTitle">
        <h2>Welcome</h2>
        <h2>Video Game Store</h2>
      </div>
      <p>
        Browse thousands of games in our collection, from action packed games to
        the. You want it? We got it!
      </p>
      <div>
        <h3>Game Collection</h3>
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

export default About;
