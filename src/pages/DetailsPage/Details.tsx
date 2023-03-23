import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddOrRemoveFavoris } from "../../components/AddOrRemoveFavoris";
import { RestaurantContext } from "../../context/RestaurantContext";
import "./Details.css";

export const Details = () => {
  let { id } = useParams();
  const { restaurants } = useContext(RestaurantContext);
  const restaurantDetails = restaurants.find(
    (restau) => restau.id.toString() === id
  );

  if (!restaurantDetails) return null;

  return (
    <div>
      <div className="details">
        <div className="description">
          <h1>{restaurantDetails.name}</h1>
          <p>{restaurantDetails.description_long}</p>
          <AddOrRemoveFavoris restaurantData={restaurantDetails} />
        </div>

        <h2>Menu</h2>
        <h3>Entrées</h3>
        <p>{restaurantDetails.menu.entrees[0]}</p>
        <p>{restaurantDetails.menu.entrees[1]}</p>
        <p>{restaurantDetails.menu.entrees[2]}</p>
        <h3>Plats</h3>
        <p>{restaurantDetails.menu.dishes[0]}</p>
        <p>{restaurantDetails.menu.dishes[1]}</p>
        <p>{restaurantDetails.menu.dishes[2]}</p>
        <h3>Desserts</h3>
        <p>{restaurantDetails.menu.deserts[0]}</p>
        <p>{restaurantDetails.menu.deserts[1]}</p>
        <p>{restaurantDetails.menu.deserts[2]}</p>
      </div>
    </div>
  );
};
