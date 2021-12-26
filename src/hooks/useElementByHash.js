import { useState, useEffect } from "react";

const useElementByHash = (hash, favorites) => {
  const [fav, setFav] = useState({});

  useEffect(() => {
    if (!hash) return;
    if (favorites.lenght === 0) return;

    const fav = favorites.find((fav) => fav.id === hash);
    setFav(fav);
  }, [hash, favorites]);

  return [fav];
};

export default useElementByHash;
