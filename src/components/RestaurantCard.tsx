import { Link } from "react-router-dom";
import { RestaurantType } from "../models/RestaurantType";
import "./RestaurantCard.css";
import { AddOrRemoveFavoris } from "./AddOrRemoveFavoris";

type RestaurantCardProps = {
  restaurantData: RestaurantType;
};

export const RestaurantCard = ({ restaurantData }: RestaurantCardProps) => {
  const img = restaurantData.img;

  return (
    <div className="restaurantCard">
      <Link to={`/details/${restaurantData.id}`}>
        <img src={img} />
      </Link>
      <div className="restaurantCardBottom">
        <div className="text_restaurantCard">
          <h2>{restaurantData.name}</h2>
          <p>{restaurantData.description_short}</p>
        </div>
        <div className="buttonAddOrRemove">
          <AddOrRemoveFavoris restaurantData={restaurantData} />
        </div>
      </div>
    </div>
  );
};
