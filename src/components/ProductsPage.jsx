import PropTypes from "prop-types";
import { useProductsData } from "./DataProvider";
import "../styles/ProductsPage.css";

const priceData = [
  59.99, 59.99, 49.99, 29.99, 49.99, 29.99, 69.99, 10.0, 59.99, 59.99, 59.99,
  29.99, 29.99, 69.99, 59.99,
];

const Card = ({ imageURL, name, price }) => {
  return (
    <div className="productCard">
      <img src={imageURL} alt={`${name} image`}></img>
      <div className="cardDescription">
        <p>{name}</p>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const data = useProductsData();
  const array = Object.values(data);

  return (
    <div className="productsPage">
      <h1>All Games</h1>
      <div className="collection">
        {array.map((item, index) => {
          return (
            <Card
              key={item.data.uniqueId}
              imageURL={item.data.imageURL}
              name={item.data.name}
              price={priceData[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

Card.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductsPage;
