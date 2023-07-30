import { useState, useEffect } from "react";

const ProductsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // " https://api.rawg.io/api/games/3498?key=ded6236dee784a49946f45a75db16ec8",
          { mode: "cors" },
        );
        const data = await response.json();

        if (!data.error) {
          console.log(data);
          setData(data.background_image);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src={data} />
      <h1>Products Page content</h1>
    </div>
  );
};

export default ProductsPage;
