import React from 'react';
import './CheckOut.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotle from './Subtotle';

function CheckOut() {
  const[{basket},dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className='checkout'>
            <div className="checkout__left">
                    
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg l1500_.jpg" alt="" />

                    <div className="checkout__title">
                        <h2>Your Shoping Backet</h2> 
                    </div>
                  {
                    basket.map((item)=>(
                      <CheckoutProduct
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      rating={item.rating}
                      reviwes={item.reviwes}
                      price={item.price}
                      shiping={item.shiping}

                      />
                    ))
                  }
                  
                    {/* <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct /> */}
                    {/* {
                      basket.forEach(item => (
                        <h1>{item.id}</h1>
                      ))
                    } */}
            </div>

            <div className="checkout__right">
                <Subtotle />
            </div>
    </div>
  )
}

export default CheckOut