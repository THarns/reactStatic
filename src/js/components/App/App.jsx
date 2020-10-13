import React, { Component } from "react";
import { Navlink, Route, HashRouter, Switch } from 'react-router-dom';
//import './app_styles.scss';
//import components and pages here
import Home from '../../pages/home.js';
import Portfolio from '../../pages/portfolio.js'
import Error from '../../pages/error.js';
import Navigation from '../Navigation/Navigation.js';

const App = () => {
    return (
        
      <HashRouter>
        <div className="content">
          <Navigation />
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio}/>
        </div>
      </HashRouter>
    );
}

export default App;