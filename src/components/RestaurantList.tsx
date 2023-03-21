import React, { useContext} from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import RestaurantCard from './RestaurantCard';

import './RestaurantList.css'
import Navbar from './Navbar';
import { RestaurantType } from '../models/RestaurantType';

export default function RestaurantList() {
    const {restaurants} = useContext(RestaurantContext);    
  return (
    <>
        <div className='restaurantsList'>
          {restaurants.map((restaurant : RestaurantType, index) =>{
            return <RestaurantCard key={index} restaurantData = {restaurant}  />
          })}
        </div>
    </>
    )
}
