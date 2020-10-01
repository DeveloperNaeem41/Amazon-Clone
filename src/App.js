import React,{useEffect} from 'react';
// import './App.scss';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(() => {

    const unSubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
        //User is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
    return () => {
      //any clean up operation go in here
      unSubscribe(); 
    }
  }, [])
  console.log('User is >>>>' ,user);
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path='/checkout'>
      <Header />
      <Checkout />
        
      </Route>
      <Route path='/login'>
      <Login />
        Login Page
      </Route>
      <Route path='/'>
      <Header />
      <Home />
        
        
      </Route>
    </Switch>
    
    
     
    </div>
    </Router>
  );
}

export default App;
