import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Homepage from "./Homepage";
import ProductsPage from "./ProductsPage";
import ShopPage from "./ShopPage";
import Collection from "./GamesCollection";
import Overview from "./GameOverview";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "homepage", element: <Homepage /> },
        {
          path: "games",
          element: <ProductsPage />,
          children: [
            { path: "collection", element: <Collection /> },
            { path: "game", element: <Overview /> },
          ],
        },
        { path: "shop", element: <ShopPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
