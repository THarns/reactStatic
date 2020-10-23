import React from 'react';
import './page_container.scss';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from '../../pages/home.js';
import Portfolio from '../../pages/portfolio.js';
import Contact from '../../pages/contact.js';
import { ThemeContext } from '../Theme/Theme_Context.js';

const Page_Container = ( {location} ) => {
    const { theme, toggle, dark } = React.useContext(ThemeContext);

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
            >
                <div className="content" style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
                    <Switch location={location}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </CSSTransition>
      </TransitionGroup>
    );
};

export default withRouter(Page_Container);