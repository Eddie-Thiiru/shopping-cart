import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>UltimateGames</h1>
      <div>
        <Link to="homepage">Home</Link>
        <Link to="products">Products</Link>
        <Link to="shop">Shop</Link>
      </div>
    </div>
  );
};

export default Header;
