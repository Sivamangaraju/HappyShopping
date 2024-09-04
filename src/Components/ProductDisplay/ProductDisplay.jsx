import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopCOntext } from '../../Context/ShopCOntext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopCOntext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdiaply-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(225)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                </div>
                <div className="productdisplay-right-description">
                    The Above one is usually it's great product for who like light weighted cloth, 
                    with excellent desing and attractive ,try this always look like extraordinary.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                console.log(addToCart(product.id))
                <p className='productdisplay-right-category'><span>Category: </span>Woment, T-shirt,Crop-Trop</p>
                
                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
            
        </div>
      
    </div>
  )
}

export default ProductDisplay
