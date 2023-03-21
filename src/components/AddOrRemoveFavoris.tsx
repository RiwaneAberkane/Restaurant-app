import React, { useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { useReactFavorisContext } from '../context/FavorisContext';
import { RestaurantType } from '../models/RestaurantType';
import Modal from './Modal';


type addOrRemoveFavorisProps = {
    restaurantData: RestaurantType;

}

function AddOrRemoveFavoris({restaurantData} : addOrRemoveFavorisProps) {
    const [showModal, setShowModal] = useState(false)
    const {favourites, addToFavs} = useReactFavorisContext();

    const Verify =(id: number) =>{
        let verif = favourites.some(
          (restoIdFav) => restoIdFav.id === restaurantData.id
        );
        return verif;
      };

  return (
    <div>
        {Verify(restaurantData.id) ?
          (<AiFillHeart size={35} onClick={()=>{setShowModal(true)}}/>):
          (<p onClick={() =>addToFavs(restaurantData)}><AiOutlineHeart size={35}/></p>)
        }

<Modal
        show={showModal}
        handleClose={() =>
          setShowModal(false)
        }
        initialValues ={
          restaurantData != null
          ? {
            restaurantData : restaurantData,
          } : undefined
        }
      />
    </div>
  )
}

export default AddOrRemoveFavoris