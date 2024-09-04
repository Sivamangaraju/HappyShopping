import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Other/logo1.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="main-footer">
     <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Happy Shopping</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta_icon} alt="" />
                <img src={pin_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copy-right">
        <p>Copyright reserved to  @HappyShopping</p>
    </div>
    </div>
    

    </div>  )
}

export default Footer
