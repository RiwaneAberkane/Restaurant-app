import React, { useContext} from 'react'
import {useParams } from "react-router-dom";
import AddOrRemoveFavoris from '../components/AddOrRemoveFavoris';
import Navbar from '../components/Navbar';
import { useReactFavorisContext } from '../context/FavorisContext';
import { RestaurantContext } from '../context/RestaurantContext';
import './Details.css'

function Details() {
    let { id } = useParams();
    console.log(id);

    const {restaurants} = useContext(RestaurantContext); 
    const restaurantDetails = restaurants.find(restau => restau.id.toString() === id)
    console.log(restaurantDetails);

  if (!restaurantDetails) return null

  return (
    <div>
         <div className='details'>
          <h1>{restaurantDetails.name}</h1>
          <p>{restaurantDetails.description_long}</p>

          <AddOrRemoveFavoris restaurantData={restaurantDetails}/>
          
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
  )
}

export default Details