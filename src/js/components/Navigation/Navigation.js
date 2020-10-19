import React from 'react';
import './navigation.scss';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div className="navigation_wrapper">
        <NavLink 
          to="/"
          exact
          className="nav_link"
          activeClassName="active_link"
        >Home</NavLink>

        <NavLink 
          to="/portfolio"
          className="nav_link"
          activeClassName="active_link"
        >Portfolio</NavLink>

        <NavLink 
          to="/contact"
          className="nav_link"
          activeClassName="active_link"
        >Contact</NavLink>
      </div>
    );
}
 
export default Navigation;