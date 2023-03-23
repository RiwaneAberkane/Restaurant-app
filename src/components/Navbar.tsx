import { Link } from "react-router-dom";
import "./Navbar.css";
import img1 from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftPart">
        <Link to={"/"}>
          <img className="logo" src={img1} alt="" />
        </Link>
        <h1 className="title_app">App Restaurant</h1>
      </div>
      <Link to={"/favoris"}>
        <button className="button_favoris">Favoris</button>
      </Link>
    </div>
  );
};
