import React from 'react'
import RestaurantList from '../components/RestaurantList'
import { RestaurantContext } from '../context/RestaurantContext'
import { restaurants } from '../restaurants-data'

function Home() {
  return (
    <div className="App">
    <RestaurantList/>
</div>
  )
}

export default Home