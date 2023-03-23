import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useReactFavoritesContext } from "../context/FavorisContext";
import { RestaurantType } from "../models/RestaurantType";
import Modal from "./Modal";

type addOrRemoveFavorisProps = {
  restaurantData: RestaurantType;
};

const AddOrRemoveFavoris = ({ restaurantData }: addOrRemoveFavorisProps) => {
  const [showModal, setShowModal] = useState(false);
  const { favorites, addToFavs } = useReactFavoritesContext();
  const [initialValues, setInitialValues] = useState<RestaurantType | null>(
    null
  );

  const Verify = (id: number) => {
    let verif = favorites.some(
      (restoIdFav) => restoIdFav === restaurantData.id
    );
    return verif;
  };

  return (
    <div>
      {Verify(restaurantData.id) ? (
        <AiFillHeart
          size={35}
          onClick={() => {
            setShowModal(true);
            setInitialValues(restaurantData);
          }}
        />
      ) : (
        <p onClick={() => addToFavs(restaurantData)}>
          <AiOutlineHeart size={35} />
        </p>
      )}

      <Modal
        show={showModal}
        initialValues={initialValues}
        handleClose={() => {
          setShowModal(false), setInitialValues(null);
        }}
      />
    </div>
  );
};

export default AddOrRemoveFavoris;
