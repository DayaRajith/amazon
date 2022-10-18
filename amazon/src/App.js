import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router,Switch,Route}  from "react-router-dom";
function App() {
  return (
    //BEM naming convention (so "App" to "app")
    <Router>
    <div className="app">
     <Switch>
      
      <Route path="/Checkout">
    <Header/>
      <h1>IAM A CHECKOUT, SMASH THE LIKE BUTTON</h1>

    </Route>

    <Route path="/">
    <Header/>
      <Home />

    </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
