import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PiHandbag } from "react-icons/pi";

const Header = ({ cartItemsCount }) => {
  return (
    <div className="header">
      <h1>ultimateGames</h1>
      <div className="nav">
        <Link to="homepage">Home</Link>
        <Link to="games/collection">Browse</Link>
        <div>
          <Link to="cart">
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
