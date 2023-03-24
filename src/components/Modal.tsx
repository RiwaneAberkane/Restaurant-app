import { useFavoritesContext } from "../context/FavorisContext";
import "./Modal.css";

type modalProps = {
  show: boolean;
  initialValues: any;
  handleClose: () => void;
};

export const Modal = ({ show, handleClose, initialValues }: modalProps) => {
  const { remove } = useFavoritesContext();

  if (!show) return null;
  return (
    <div className="modal">
      <section className="modal-main">
        <button
          className="close-btn"
          type="button"
          onClick={() => handleClose()}
        >
          X
        </button>
        <h3 className="sureRemove">Do you want to remove ?</h3>
        <div className="button">
          <button
            type="submit"
            onClick={() => {
              remove(initialValues);
              handleClose();
            }}
          >
            YES
          </button>
          <button onClick={() => handleClose()}>NO</button>
        </div>
      </section>
    </div>
  );
};
