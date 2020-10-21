import React, { useState, useEffect } from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {

  let listener = null
  const [scrollState, setScrollState] = useState("top");
  const [opacityVal, setOpacityVal] = useState(0);
  /*backgroundColor: scrollState === "top" ? "transparent" : "#212121"*/


  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      let scrolled = window.scrollY;
      if(scrolled > 200) {
        //console.log('below');
        setScrollState('below');
        setOpacityVal(1);
      } else {
        //console.log('above');
        setScrollState('top');
        setOpacityVal(Math.min(scrolled / 100));
        console.log(scrolled + ' ' + opacityVal);
      }
    });

    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState, opacityVal]);

    return (
      <div className="navigation_wrapper">
        <div className="bg_layer" style={{ opacity: opacityVal }}></div>
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