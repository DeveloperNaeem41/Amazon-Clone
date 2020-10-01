import React from 'react'
import amazon from './Images/amazon.jpg';
import Product from './Product';
import productData ,{productData1,productData2}  from './productData';
import './home.scss';
const Home=()=> {
    return (
        <div className="home">
          <img className="home_pic" src={amazon} alt="amazon-home" />
        
           <div className="home_row">
             {
             productData.map((val,index)=>{
                return <Product title={val.title} price={val.price} rating={val.rating}
                image={val.img} id={val.id} key={index} />
            })
             }
           </div>
           <div className="home_row">
             {
             productData1.map((val,index)=>{
                return <Product title={val.title} price={val.price} rating={val.rating}
                image={val.img} id={val.id} key={index} />
            })
             }
           </div>
           <div className="home_row">
             {
             productData2.map((val,ind)=>{
                return <Product title={val.title} price={val.price} rating={val.rating}
                image={val.img} id={val.id} key={ind} />
            })
             }
           </div>
            
        </div>
    )
}

export default Home
