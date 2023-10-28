import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PiHandbag } from "react-icons/pi";

const Header = ({ cartItemsCount }) => {
  return (
    <div className="header">
      <h1>
        Game <br />
        <span>Vault</span>
      </h1>
      <div className="nav">
        <Link to="home">Home</Link>
        <Link to="games/collection">Browse</Link>
        <div>
          <Link to="cart" className="cartLink">
            <PiHandbag size={"25px"} />
            <span>{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  cartItemsCount: PropTypes.number,
};

export default Header;
