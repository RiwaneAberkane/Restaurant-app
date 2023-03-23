import { createContext, useContext, useEffect, useState } from "react";
import { RestaurantType } from "../models/RestaurantType";

type FavoritesContextProps = {
  children: React.ReactNode;
};

type CreateFavoritesContext = {
  favorites: number[];
  addToFavs: (restaurant: RestaurantType) => void;
  remove: (restaurant: RestaurantType) => void;
};

const CreateContextFavorites = createContext({} as CreateFavoritesContext);

export const useFavoritesContext = () => {
  const contextRest = useContext(CreateContextFavorites);
  return contextRest;
};

export const FavoritesContext = ({ children }: FavoritesContextProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  let seeFavs = JSON.parse(localStorage.getItem("favorites") || "[]");
  useEffect(() => {
    if (favorites) {
      setFavorites(seeFavs);
    }
  }, []);

  const addToFavs = (restaurant: RestaurantType) => {
    const newFavouriteList: number[] = [...favorites, restaurant.id];
    if (favorites.includes(restaurant.id)) {
      return null;
    } else {
      setFavorites(newFavouriteList);
    }
  };

  const remove = (restaurant: RestaurantType) => {
    const newFavouriteList = favorites.filter(
      (favorites) => favorites !== restaurant.id
    );
    setFavorites(newFavouriteList);
  };

  return (
    <CreateContextFavorites.Provider
      value={{
        addToFavs,
        remove,
        favorites,
      }}
    >
      {children}
    </CreateContextFavorites.Provider>
  );
};
