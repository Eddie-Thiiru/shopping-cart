import { useParams } from "react-router-dom";
import Collection from "./GamesCollection";
import Overview from "./GameOverview";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const { name } = useParams();

  return (
    <div className="productsPage">
      {name === "collection" ? <Collection /> : <Overview />}
    </div>
  );
};

export default ProductsPage;
