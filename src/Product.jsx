import React from 'react';
import './product.scss';
import { useStateValue } from './StateProvider';

const Product=({id,title,price,rating,image})=> {
   const [{basket},dispatch] =useStateValue();

   const addToBasket=()=>{
       dispatch({
           type: 'ADD_TO_BASKET',
           item : {
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating
           }
       })

   };


    return (
        <div className="product">
         <div className="product_info">
            <p className="product_title">{title}</p>
            <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product_rating">
            {Array(rating)
                .fill()
                .map(()=> <p><span>⭐</span></p>
                )
            }
                
            </div>
         </div>
            <img src={image} alt="product_pic" />
            <button onClick={addToBasket}>Add to basket</button>
        
            
        </div>
    )
}

export default Product;