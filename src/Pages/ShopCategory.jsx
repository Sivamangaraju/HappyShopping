import React,{useContext} from 'react'
import './CSS/ShopCategory.css'
import drop_down_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'
import { ShopCOntext } from '../Context/ShopCOntext'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopCOntext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={drop_down_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((item,i)=>{
            if(props.category===item.category){
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
      </div>
  )
}

export default ShopCategory
