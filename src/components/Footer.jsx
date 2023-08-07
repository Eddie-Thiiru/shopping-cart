const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinksOne">
        <h2>ultimateGames</h2>
        <div className="apiHyperlink">
          <a href="https://rawg.io/apidocs">
            <img></img>
            <p>RAWG API</p>
          </a>
        </div>
      </div>
      <div className="footerLinksTwo">
        <div className="footerAbout">
          <p>About</p>
          <p>Careers</p>
          <p>Distribution</p>
          <p>Support</p>
        </div>
        <div className="footerSocial">
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
      </div>
      <div className="footerLinksThree">
        <div className="footerPolicies">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
        <div className="footerCopyright">
          <p>
            <span>© </span> 2023 ultimateGames
          </p>
          <p>Developed By Eddie Thiiru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
