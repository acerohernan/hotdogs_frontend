import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstName: "",
    age: "",
    gender: "",
    height: "",
    birthday: "",
    preferences: "",
  });
  const [favorites, setFavorites] = useState([]);
  const value = {
    isAuth,
    favorites,
    userInfo,
    addFavorites: (fav) => {
      setFavorites([...favorites, fav]);
    },
    activateAuth: () => {
      setIsAuth(true);
    },
    inactivateAuth: () => {
      setIsAuth(false);
    },
    addUserInfo: (info) => {
      setUserInfo(info);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
