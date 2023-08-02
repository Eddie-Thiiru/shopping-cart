import { useState, useEffect } from "react";

// setData({
//   imageURL: response.image,
//   name: response.name,
//   uniqueId: id,
//   metascore: response.metacritic ? is a number
//   platforms: response.platforms ? is an array
//   genre: response.genres ? is an array
// });

const useData = (id) => {
  const [data, setData] = useState({ imageURL: "", name: "", uniqueId: "" });
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetch(
    //   `https://api.rawg.io/api/games/${id}?key=ded6236dee784a49946f45a75db16ec8`,
    //   { mode: "cors" },
    // )
    fetch("https://rickandmortyapi.com/api/character/779")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => {
        setData({
          imageURL: response.image,
          name: response.name,
          uniqueId: id,
        });
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return { data, error };
};

export default useData;
