import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>UltimateGames</h1>
      <div className="nav">
        <Link to="homepage">Home</Link>
        <Link to="games/collection">Browse</Link>
        <Link to="shop">Shop</Link>
      </div>
    </div>
  );
};

export default Header;
