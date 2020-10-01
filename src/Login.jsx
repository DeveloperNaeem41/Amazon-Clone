import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import logo from './Images/logo.jpg';
import {auth} from './firebase';
import './login.scss';

const Login=()=> {
    const history= useHistory();
    const [email,setEmail] =  useState();
    const [password,setPassword] =useState();

    const login=(e)=>{
        console.log(e);
        e.preventDefault(); //this stops the refresh
        //Login logic ...
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in ,redirect to homepage
            history.push("/");
        })
        .catch((e)=> alert(e.message));

    }
    const register=(e)=>{
        e.preventDefault(); // this stops the refresh 
        // register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));

    }
    return (
        <div className="login">
        <Link to='/'>
        <img className="login_logo" src={logo} alt="LinkForHome" />
        </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h4>Email</h4>
                <input type="email" onChange={(event)=> setEmail(event.target.value)}/>
                <h4>Password</h4>
                <input type="password" onChange={(event)=>setPassword(event.target.value)} />
                <button onClick={login}>Sign In</button>
            </form>
            <p>
                By signing-in you agree tyo Amazon's Conditions of Use and Sale.
                Please see our privacy Notice our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register}>Create Your Amazon Account</button>
        </div>
            
        </div>
    )
}

export default Login;
