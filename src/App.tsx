import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { Details } from "./pages/DetailsPage/Details";
import { RestaurantContext } from "./context/RestaurantContext";
import { restaurants } from "./restaurants-data";
import { Favoris } from "./pages/FavorisPage/Favoris";
import { FavoritesContext } from "./context/FavorisContext";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <RestaurantContext.Provider value={{ restaurants }}>
      <FavoritesContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favoris" element={<Favoris />} />
          </Routes>
        </Router>
      </FavoritesContext>
    </RestaurantContext.Provider>
  );
}
export default App;
