import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention (so "App" to "app")
    <Router>
      <div className="app">
         <Header />
        <Routes>

          <Route path="/"  element = {<Home  />}>
           
            {/* <h1>This is checkout page</h1> */}

          </Route>

         <Route path="/Checkout" element = {<Checkout />}> 
          
          </Route> 

        </Routes>
      </div>
    </Router>

  );
}

export default App;
