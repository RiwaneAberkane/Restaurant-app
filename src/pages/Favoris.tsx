import RestaurantCard from '../components/RestaurantCard';
import { useReactFavorisContext } from '../context/FavorisContext';
import { RestaurantType } from '../models/RestaurantType';
import './Favoris.css'

function Favoris() {
  const {favourites} = useReactFavorisContext();

  if (favourites.length === 0) return (
    <div>
      <h1 className='noFavorites'>No Favorites</h1>
    </div>
    )


  return (
    <div>
        <div className='favoris_list'>
          {favourites.map((favor : RestaurantType) => (
            <RestaurantCard restaurantData={favor} key={favor.id} />
          ))}
        </div>
        
    </div>
  )
}

export default Favoris