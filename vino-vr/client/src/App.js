import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WineBar from './components/Navbar';
import Header from './components/Header';
import  Mood from './components/Mood';
import About from './components/About';
import Featured from './components/Featured';
import Login from './components/Login';
import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Footer from './components/Footer';


import './App.css';




// import Navbar from 'react-bootstrap/esm/Navbar';


function App() {
  return (
    <Router>
      <div>
        <WineBar />
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mood" component={Mood} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/favorites" component={Favorites} />
        <Footer />
      </div>
    </Router>
  );
}
   
 
export default App;
