import { ShoppingBasket } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const auth = getAuth();
    const[{basket,user},dispatch] =useStateValue();
    const handleAuthentication = ()=>{
        if (user){

            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to='/'>
    <img className='header__logo' src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="amazon" />
    </Link>
    <div className="header__search">
        <input className='serch__input' type="text" />
        <SearchIcon className='searchIcon' />
    </div>
    <div className="header__Nav">
        <div onClick={handleAuthentication} className="header__option">
           <Link style={{ display:"flex", flexDirection:"column", color: 'inherit', textDecoration: 'inherit'}} to={!user && '/Login'}> <span className='header__optionLineOne' >
                 {user? user.email: "hellow"}
            </span>
            <span className='header__optionLineTwo'>
                {user? 'Sign Out' : 'Sign In'}
            </span>
            </Link>
        </div>
        <div className="header__option">
            <span className='header__optionLineOne' >
                Returns
            </span>
            <span className='header__optionLineTwo'>
                &  Order
            </span>
        </div>
        <div className="header__option">
            <span className='header__optionLineOne' >
                Your
            </span>
            <span className='header__optionLineTwo'>
                Prime
            </span>
        </div>
        <Link to='/CheckOut' className='Link'>
        <div className="header__optinBasket">
            <ShoppingBasket />
            <span className='header__optionLineTwo option__basketCountor ' >{basket.length}</span>
        </div>
        </Link>
    </div>
</div>

  )
}

export default Header