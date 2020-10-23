import React, { Component } from "react";
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
//import components and pages here
import Page_Container from '../../components/Page_Container/Page_Container.js';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/footer.js';
import { ThemeContext } from '../Theme/Theme_Context.js';

const App = () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Navigation>
          
      </Navigation>
      {/*<div className="content">
          <Route path="/" exact component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
      </div>*/}
      <Page_Container />
      <Footer />
    </BrowserRouter>
  );
}

export default App;