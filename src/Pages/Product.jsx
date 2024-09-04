import React, { useContext } from 'react'
import  {ShopCOntext}  from '../Context/ShopCOntext'
import { useParams } from 'react-router-dom';
import Bredcrum from '../Components/Breadcrum/Bredcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
const Product = () => {
  const {all_products}= useContext(ShopCOntext);
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Bredcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product
