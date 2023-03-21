import React from 'react'
import Navbar from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard';
import { useReactFavorisContext } from '../context/FavorisContext';
import { RestaurantType } from '../models/RestaurantType';

function Favoris() {
  const {favourites} = useReactFavorisContext();
  return (
    <div>
        <div>
          {favourites.map((favor : RestaurantType) => (
            <RestaurantCard restaurantData={favor} key={favor.id} />
          ))}
        </div>
        
    </div>
  )
}

export default Favoris