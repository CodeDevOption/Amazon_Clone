import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,image,title,rating,reviwes,price,shiping}) {
  const[state,dispatch] = useStateValue();
 
   const AddToBasket = ()=>{
          dispatch({
            type:"ADD_TO_BASKET",
            item:{
              id:id,
              image:image,
              title:title,
              rating:rating,
              price:price,
              shiping:shiping,
            },
          });
   }
  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="product__info">
            <p className='title'>{title}</p>
            <div className="rating">
              {Array(rating).fill().map((_,i)=>(
                <p>🌟</p>
              ))}
         <p className='reviwes'>{reviwes}</p>

            </div>
            <p><small><sup>$</sup></small><strong className='price'>{price}.</strong><sup><strong>99</strong></sup></p>
            <p>${shiping} shipping</p>
            <div className="button">

            <button onClick={AddToBasket}>Add to Cart</button>
            </div>

        </div>
    </div>
  )
}

export default Product