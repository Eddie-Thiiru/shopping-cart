import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "./Homepage";
import ProductsPage from "./ProductsPage";
import ShopPage from "./ShopPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "homepage", element: <Homepage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "shop", element: <ShopPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
