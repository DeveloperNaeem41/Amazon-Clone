import React from 'react';
import xbox from './Images/xbox.jpg';
import hal from './Images/hal.jpg';
import laptop1 from './Images/laptop1.jpg';
import laptop from './Images/laptop.jpg';
import apple from './Images/apple.jpg';
import led from './Images/led.jpg';

const productData =[
    {
        id: 234 ,
        title :"Rock Band 4 Game ONLY - Xbox One",
        rating:4 ,
        price: 200,
        img: xbox
},
{
    id: 235 ,
    title :"USA Halo 3: ODST & Forza Motorsport 3 X-Box 360 Combo Pack    ",
    rating:5 ,
    price: 250,
    img: hal
}  
]
export const productData1 =[
    {
        id: 236 ,
        title :"Acer Aspire 5 Slim Laptop,  Vega 3 Graphics, 4GB DDR4, Silver",
        rating:3 ,
        price: 300, 
        img: laptop
},
{
    id: 237 ,
    title :"Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display   ",
    rating:4 ,
    price: 706.00 ,
    img: laptop1
}  ,
{
    id: 238 ,
    title :"Apple iPad (10.2-inch, Wi-Fi, 128GB) - Silver (Previous Model)",
    rating:3 ,
    price: 299.00 ,
    img: apple
}
]
export const productData2 =[
    {
        id: 239 ,
        title :"HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, - Black",
        rating:5 ,
        price: 499.00,
        img: led
},
 
]


export default productData;