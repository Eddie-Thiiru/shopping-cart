import { Outlet } from "react-router-dom";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="productsPage">
      <Outlet />
    </div>
  );
};

export default ProductsPage;
