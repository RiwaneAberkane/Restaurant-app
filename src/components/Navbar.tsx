import { Link } from 'react-router-dom';
import './Navbar.css'
import img1 from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftPart'>
        {/* <img src={img1} alt="" /> */}
        <Link to = {'/'}><h1 className='title_app'>App Restaurant</h1></Link>
      </div>
      <Link to = {'/favoris'}><button className='button_favoris'>Favoris</button></Link>
    </div>
  )
}
