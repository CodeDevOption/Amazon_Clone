import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './Login.css'
import db from "./firebase"
import {getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { useStateValue } from './StateProvider'
function Login() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    const [state,dispatch] = useStateValue();

   

    useEffect(()=>{
            auth.onAuthStateChanged(authUser =>{

                if (authUser){
                    dispatch({
                        type:"SET_USER",
                        user: authUser,
                    });
                  
                }else{
                    dispatch({
                        type:"SET_USER",
                        user: null,
                    });
                   
                }
            })
    },[]);


    const singin = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }
    const register = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='amz-logo' src="https://2wheeladv.com/wp-content/uploads/2021/03/Amazon-logo.png" alt="amazon_logo" />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e)=> setemail(e.target.value)} />
                <h5>Password</h5>
                <input type="text" value={password} onChange={(e)=> setpassword(e.target.value)} />
                <button onClick={singin} className='singinBtn'>Sign In</button>
            </form>
            <p>By signin you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. </p>
            <button onClick={register}  className='singupBtn'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login