import React from 'react'
import amazon_pic from './Images/amazon_pic.png';
import './checkout.scss'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout=()=> {
    const [{basket}]=useStateValue();

    return (
        <div className="checkout">
         <div className="checkout_left">

          <img className="checkout_add" src={amazon_pic} alt="amazon_add" />
          {basket?.length === 0 ? (
            <div>
                <h1>Your shopping Basket is empty</h1>
                <p>You have no item in your basket. To buy one or more items click on "ADD_YO_BASKET".  </p>
            </div>
            ) : (
            <div>
               <h1>Your shopping basket</h1>
               <hr style={{color:"grey"}} />
               {basket.map((val)=>{
                console.log(val);
                return <CheckoutProduct image={val.image} title={val.title}
                price={val.price} rating={val.rating} id={val.id} />
              })}
            </div>
            )
            }
         </div>
         {basket.length > 0 && (
             <div className="checkout_right" >
                 <Subtotal />
             </div>
         )}
            
        </div>
    )
}

export default Checkout;
