import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import { RestaurantContext } from './context/RestaurantContext';
import { restaurants } from './restaurants-data';
import Favoris from './pages/Favoris';
import { ContextResto } from './context/FavorisContext';
import Navbar from './components/Navbar';


function App() {
  return (
    <RestaurantContext.Provider value={{restaurants}}>
    <ContextResto>
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details/>}/>
          <Route path='/favoris' element={<Favoris/>}/>
        </Routes>
      </div>
    </Router>
    </ContextResto>
    </RestaurantContext.Provider>
  );
}
export default App;

