import React, {useContext, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/Other/logo1.png'
import cartlogo from '../Assets/Other/cartlogo.png'
import { Link } from 'react-router-dom'
import { ShopCOntext } from '../../Context/ShopCOntext'

const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopCOntext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img className="img1" src={logo} alt="" />
            <p>HappyShopping</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}><Link  style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link  style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img className="img2" src={cartlogo} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
