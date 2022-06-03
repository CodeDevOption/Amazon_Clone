import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,rating,reviwes,price,shiping}) {
  const [state,dispatch]= useStateValue();
  const removeBasket = ()=>{
      dispatch({
        type:"Remove_To_Basket",
        id:id,

      }
      )
  }
  return (
    <div className='checkoutproduct'>
       <img src={image} alt="" />

       <div className="cart__product__info">
            <p className='title'>{title}</p>
            <div className="rating">
              {Array(rating).fill().map((_,i)=>(
                <p>🌟</p>
              ))}
              
         <p className='reviwes'>{reviwes}</p>

            </div>
            <p><small><sup>$</sup></small><strong className='price'>{price}.</strong><sup><strong>99</strong></sup></p>
            <p>${shiping} shipping</p>
            <div className="remove_button">

            <button onClick={removeBasket} >Remove Item</button>
            </div>

        </div>
    </div>

  )
}

export default CheckoutProduct