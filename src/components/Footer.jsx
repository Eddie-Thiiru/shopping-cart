import rawgImg from "../images/rawgio.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinksOne">
        <h2>ultimateGames</h2>
        <div className="apiHyperlink">
          <a href="https://rawg.io/apidocs">
            <img src={rawgImg}></img>
            <p>RAWG API</p>
          </a>
        </div>
      </div>
      <div className="footerLinksTwo">
        <ul className="footerAbout">
          <li>About</li>
          <li>Careers</li>
          <li>Distribution</li>
          <li>Support</li>
        </ul>
        <div className="footerSocial">
          <FaFacebookSquare color={"#00000"} />
          <FaTwitter color={"#00000"} />
          <FaInstagram color={"#00000"} />
          <FaYoutube color={"#00000"} />
        </div>
      </div>
      <div className="footerLinksThree">
        <ul className="footerPolicies">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
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
