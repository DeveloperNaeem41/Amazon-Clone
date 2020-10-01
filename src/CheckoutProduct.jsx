import React from 'react'
import "./checkoutproduct.scss";
import { useStateValue } from './StateProvider';

const CheckoutProduct=({id,image,price,title,rating})=> {
    const[{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        //remove item from basket.
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id :id,
        });
    };


    return (
        <div className="checkoutproduct">
          <img className="checkoutproduct_pic" src={image} alt="product" />
           <div className="checkoutproduct_info">
              <p className="checkoutproduct_title">{title}</p>
              <p className="checkoutproduct_price">
                 <small>$</small>
                 <strong>{price}</strong>
              </p>
             <div className="checkoutproduct_rating">
              {Array(rating)
                .fill()
                .map(()=> <p><span>⭐</span></p>
                )
               }
                
             </div>
              <button onClick={removeFromBasket}>Remove From Basket</button>
             
           </div>
            
        </div>
    )
}

export default CheckoutProduct;
