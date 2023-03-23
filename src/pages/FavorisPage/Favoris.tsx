import { useContext } from "react";
import { RestaurantCard } from "../../components/RestaurantCard";
import { useReactFavoritesContext } from "../../context/FavorisContext";
import { RestaurantContext } from "../../context/RestaurantContext";
import { RestaurantType } from "../../models/RestaurantType";
import "./Favoris.css";

export const Favoris = () => {
  const { favorites } = useReactFavoritesContext();
  const { restaurants } = useContext(RestaurantContext);

  if (favorites.length === 0)
    return (
      <div>
        <h1 className="noFavorites">No Favorites</h1>
      </div>
    );

  const getFavorite = (restaurants: RestaurantType[]): RestaurantType[] => {
    const restaurantsFavorites: RestaurantType[] = restaurants.filter(
      (restau) => favorites.includes(restau.id)
    );
    return restaurantsFavorites;
  };

  return (
    <div>
      <div className="favoris_list">
        {getFavorite(restaurants).map((favorite: RestaurantType) => (
          <RestaurantCard restaurantData={favorite} key={favorite.id} />
        ))}
      </div>
    </div>
  );
};
