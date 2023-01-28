import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
const [{},dispatch] = useStateValue();

useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    console.log('The user is ---- ',authUser);
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      dispatch({
        type:"SET_USER",
        user:null
      })
    }

  })
},[])

  return (
    //BEM naming convention (so "App" to "app")
    <Router>
        <Header />
      <div className="app">
      
        <Routes>
        <Route path="/login" element = {<Login/>}> 
      
          </Route> 

          <Route  element = {<Header />}> 
      
      </Route> 

          <Route path="/"  element = {<Home  />}>
           
            {/* <h1>This is checkout page</h1> */}

          </Route>

         <Route path="/Checkout" element = {<Checkout />}> 
         <Route  element = {<Header />}> 
      
      </Route> 
          
          </Route> 

        </Routes>
      </div>
    </Router>

  );
}

export default App;
