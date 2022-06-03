import React from 'react';
import './Home.css';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Homed() {
  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    <div className='home'>
        <div className="home__container">
                <img className='homeImage' src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg" alt="" />
        </div>
        <div className="home__row">
        <Product 
            id={65432}
            image = "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
            title = "HP 24mh FHD Monitor"
            rating={5}
            reviwes = "20,978"
            price = {199}
            shiping = "199.99"
             />
    
        <Product 
            id={45321}
            image = "https://m.media-amazon.com/images/I/61NipMZwC4L._AC_UL320_.jpg"
            title = "SAMSUNG EVO Select Micro SD-Memory-Card + Adapter, 256GB microSDXC 130MB/s Full HD & 4K UHD, UHS-I, U3, A2, V30,"
            rating= {5}
            reviwes = "12,597"
            price = {26.99}
            shiping = "Free"
             />

    
        </div>
        <div className="home__row">
        <Product 
            id={21345}
            image = "https://m.media-amazon.com/images/I/813bvfaxuAL._AC_UL320_.jpg"
            title = "SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ"
            rating = {5}
            reviwes = "12,597"
            price = {219}
            shiping = "10"
             />
        <Product 
            id={54321}
            image = "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            title = "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop"
            rating= {5}
            reviwes = "87,900"
            price = {49}
            shiping = "Free"
             />
        <Product 
            id={12345}
            image = "https://m.media-amazon.com/images/I/61MI2KPnKgL._AC_UY218_.jpg"
            title = "Redragon M602 RGB Wired Gaming Mouse RGB Spectrum Backlit Ergonomic Mouse Griffin Programmable with 7 Backlight Modes up to 7200 DPI for Windows PC Gamers (Black)"
            rating= {5}
            reviwes = "26,091"
            price = {17}
            shiping = "5"
             />
        </div>
        <div className="home__row">

        </div>
    </div>
  )
}

export default Homed