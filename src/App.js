import Homed from './Home';
import React from "react";
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import './App.css';
import Header from './Header';
import Cart from './Cart';
import CheckOut from './CheckOut';
import { useStateValue } from './StateProvider';
import Login from './Login';
function App() {
  const[{basket},dispatch] = useStateValue();

  return (
    <Router>
      
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/' element={<><Header /> <Homed /></> } />
        <Route path='/Cart' element={ <Cart />} />
        <Route path='/home' element={<><h1>hellow</h1></>} />
        <Route path='/CheckOut' element={<><Header /><CheckOut /></>} />
   
      </Routes>
      
    </Router>
  );
}

export default App;
