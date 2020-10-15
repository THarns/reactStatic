import React from 'react';
import Project_card from '../components/Project_Card/Project_card.js';
import { Transition, animated } from 'react-spring/renderprops'
import '../../scss/portfolio.scss';

const Portfolio = () => {
    return (
        <div className="landing_wrapper port_image">
            <div className="bg_container"></div>
            <Project_card />
        </div>
    );
}

export default Portfolio;