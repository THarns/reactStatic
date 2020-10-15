import React, { Component } from "react";
import { Route, HashRouter, Switch } from 'react-router-dom';
//import './app_styles.scss';
//import components and pages here
import Home from '../../pages/home.js';
import Portfolio from '../../pages/portfolio.js'
//import Error from '../../pages/error.js';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/footer.js';
import { Transition, animated } from 'react-spring/renderprops';

const App = () => {
  return (
      
    <HashRouter>
      <div className="content">
        <Navigation />
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio}/>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;