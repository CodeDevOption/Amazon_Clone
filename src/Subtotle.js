import React from 'react';
import './Subtotle.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getBsketTotle} from './reducer';

function Subtotle() {
  const[{basket},dispatch] =useStateValue();
  return (
    <div className='subtotle'>
         <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ( {basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBsketTotle(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotle