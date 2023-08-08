import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../App";
import { RiDeleteBinLine } from "react-icons/ri";
import "../styles/ShopPage.css";

const CartCard = ({ imageURL, title, price, id, handleDelete }) => {
  return (
    <div className="cartItemCard">
      <div className="cartItemWrapperOne">
        <img src={imageURL} alt={`${title} background image`}></img>
        <p>{title}</p>
      </div>
      <div className="cartItemWrapperTwo">
        <p>{`$${price}`}</p>
        <div>
          <RiDeleteBinLine />
          <button
            type="button"
            className="removeGame"
            onClick={() => handleDelete(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const Empty = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/games/collection");
  };

  return (
    <div className="emptyCart">
      <h2>Nothing here</h2>
      <button type="button" className="cartEmptyBtn" onClick={handleClick}>
        Buy Games
      </button>
    </div>
  );
};

const ShopPage = () => {
  const { cartData, removeFromCart } = useContext(CartContext);
  const totalPrice = cartData.reduce(
    (prev, current) => prev + current.price,
    0,
  );

  return (
    <div className="shopPage">
      <div className="pageTitle">
        <h2>Cart</h2>
      </div>
      <div className="cart">
        {cartData.length === 0 ? (
          <Empty />
        ) : (
          <div className="cartItemsContainer">
            <div className="cartHeader">
              <h3>Games</h3>
              <h3>price</h3>
            </div>
            <div className="cartItemsWrapper">
              {cartData.map((item, index) => {
                return (
                  <CartCard
                    key={index}
                    id={item.uniqueId}
                    imageURL={item.imageURL}
                    title={item.name}
                    price={item.price}
                    handleDelete={removeFromCart}
                  />
                );
              })}
            </div>

            <div className="cartTotalWrapper">
              <h3>Grand total</h3>
              <p>{`$${parseFloat(totalPrice).toFixed(2)}`}</p>
              <button type="button" className="paymentBtn">
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CartCard.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default ShopPage;
