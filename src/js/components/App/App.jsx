import React, { Component } from "react";
import { Route, HashRouter, browserHistory, BrowserRouter } from 'react-router-dom';
//import components and pages here
import Home from '../../pages/home.js';
import Portfolio from '../../pages/portfolio.js';
import Contact from '../../pages/contact.js';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/footer.js';
//import { Transition, animated } from 'react-spring/renderprops';

const App = () => {
  return (
      
    /*<HashRouter>
      <div className="content">
        <Navigation />
          <Route path="/" exact component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
      </div>
      <Footer />
    </HashRouter>*/
    <BrowserRouter>
      <div className="content">
        <Navigation />
          <Route path="/" exact component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;