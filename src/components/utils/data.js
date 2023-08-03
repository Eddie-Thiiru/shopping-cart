import { useState, useEffect } from "react";

const priceData = {
  22511: { price: 59.99 },
  28: { price: 59.99 },
  3328: { price: 49.99 },
  3498: { price: 29.99 },
  58175: { price: 49.99 },
  3192: { price: 29.99 },
  3636: { price: 69.99 },
  2462: { price: 10.0 },
  4200: { price: 9.99 },
  58550: { price: 69.99 },
  622492: { price: 59.99 },
  9767: { price: 29.99 },
  28199: { price: 29.99 },
  326243: { price: 59.99 },
  7689: { price: 29.99 },
  28623: { price: 19.99 },
  56184: { price: 59.99 },
  10297: { price: 59.99 },
  364806: { price: 69.99 },
  416: { price: 10 },
};

const useData = (id) => {
  const [data, setData] = useState({
    imageURL: "",
    name: "",
    uniqueId: "",
    metaScore: "",
    platforms: [],
    genre: [],
    release: "",
    price: "",
    slug: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character/779")
    fetch(
      `https://api.rawg.io/api/games/${id}?key=ded6236dee784a49946f45a75db16ec8`,
      { mode: "cors" },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => {
        const gameId = `${id}`;
        const gamePrice = priceData[gameId].price;

        setData({
          imageURL: response.background_image,
          name: response.name,
          uniqueId: response.id,
          metaScore: response.metacritic,
          platforms: response.platforms,
          genre: response.genres,
          release: response.released,
          price: gamePrice,
          slug: response.slug,
        });
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return { data, error };
};

export default useData;
