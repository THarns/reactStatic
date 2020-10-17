import React, { useState } from 'react';
import Project_card from '../components/Project_Card/Project_card.js';
import { Transition, animated } from 'react-spring/renderprops'
import '../../scss/portfolio.scss';

const Portfolio = () => {
    const projects = [
        {
            name:'Silhouettes vs The Sun',
            tech:['HTML', 'CSS', 'JS', 'PHP', 'Wordpress', 'Woocommerce', 'Webpack'],
            blurb:'Brochure style site done for a new album release for the artist Silhouettes vs The Sun.',
            github:'https://github.com/THarns/SVSTS2.0'
        },

        {
            name:'Noise In The Neighborhood',
            tech:['HTML', 'CSS', 'JS', 'PHP', 'Snap SVG', 'GSAP', 'Webpack'],
            blurb:'Custom site done for a YouTube channel that produces live content monthly.',
            github:''
        },

        {
            name:'Quake Update',
            tech:['HTML', 'CSS', 'JS', 'ThreeJS', 'MYSQL'],
            blurb:'A full stack project consisting of a script to pull data from the USGS API and store it in a MYSQL database. A backend written in Node.JS to serve the data to the frontend which was written in React and uses ThreeJS to model all the quakes on a model Earth.',
            github:['https://github.com/THarns/QuakeDBUpdater', 'https://github.com/THarns/Quake-Dashboard-backend', 'https://github.com/THarns/Quake-Dashboard']
        },

        {
            name:'This portfolio site',
            tech:['React', 'CSS', 'PHP', 'Webpack'],
            blurb:'I wanted to learn more about the React library and needed a porfolio site as well so I decided to do them in parallel.',
            github:'https://github.com/THarns/reactStatic'
        }
    ];

    return (
        <div className="landing_wrapper port_image">
            <div className="bg_container"></div>
            <Project_card />
        </div>
    );
}

export default Portfolio;