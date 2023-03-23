import { useContext } from "react";
import { RestaurantContext } from "../../../context/RestaurantContext";
import { RestaurantCard } from "../../../components/RestaurantCard";
import "./RestaurantList.css";

import { RestaurantType } from "../../../models/RestaurantType";

export const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <div className="restaurantsList">
      {restaurants.map((restaurant: RestaurantType, index) => {
        return <RestaurantCard key={index} restaurantData={restaurant} />;
      })}
    </div>
  );
};
