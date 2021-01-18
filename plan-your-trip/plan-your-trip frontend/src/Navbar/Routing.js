import React from 'react';
import NavBar from './Navbar';
import Login from '../Authentication/Login';
import Welcome from '../WelcomePage/Welcome';
import Footer from '../footer/Footer';
import About from './About';
import Contact from './Contact';
import BookingForm from '../BookingForm/BookingForm';
import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routing(){
  return(
    <Router>
    <Switch>
      <Route exact path="/">
        <NavBar/>
      </Route>
      <Route exact path="/About">
      <NavBar/>
        <About/>
        <Footer/>
      </Route>
      <Route exact path="/Contact">
      <NavBar/>
        <Contact/>
        <Footer/>
      </Route>
      <Route exact path="/Booking">
        <BookingForm/>
      </Route>
      <Route exact path="/Welcome">
        <Welcome/>
      </Route>
      <Route exact path="/Profile">
        <Profile/>
        {/* <div>Here is the profile page</div> */}
      </Route>
      {/* <Route exact path="/SignIn">
        <Login/>
      </Route> */}
      {/* <Route exact path="/SignUp">
        <Login/>
      </Route> */}
    </Switch>
  </Router>
  );
}