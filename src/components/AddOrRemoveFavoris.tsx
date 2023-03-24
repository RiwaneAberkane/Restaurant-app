import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavoritesContext } from "../context/FavorisContext";
import { RestaurantType } from "../models/RestaurantType";
import { Modal } from "./Modal";

type AddOrRemoveFavorisProps = {
  restaurantData: RestaurantType;
};

export const AddOrRemoveFavoris = ({
  restaurantData,
}: AddOrRemoveFavorisProps) => {
  const [showModal, setShowModal] = useState(false);
  const { favorites, addToFavs } = useFavoritesContext();
  const [initialValues, setInitialValues] = useState<RestaurantType | null>(
    null
  );

  const Verify = (id: number) => {
    return favorites.some((restoIdFav) => restoIdFav === restaurantData.id);
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
          setShowModal(false);
        }}
      />
    </div>
  );
};
