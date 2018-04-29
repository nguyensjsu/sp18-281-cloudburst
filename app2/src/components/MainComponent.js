import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Footer from './Footer.js';
import  TopMenu from './TopMenu.js';
import Home from './Home.js';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Menu from './Menu.js';

class MainComponent extends Component {
  render() {
    return (
<div>
    <TopMenu/>

  <Route exact path="/" render={() =>
      (
          <div>
            <Home/>
          </div>
      )}/>

  <Route exact path="/menu" render={() =>
      (
          <div>
            <Menu/>
          </div>
      )}/>

  <Route exact path="/signin" render={() =>
      (
          <div>
            <Signin/>
          </div>
      )}/>

  <Route exact path="/signup" render={() =>
      (
          <div>
            <Signup/>
          </div>
      )}/>

    <Footer/>
</div>
    );
  }
}

export default withRouter(MainComponent);
