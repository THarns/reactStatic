import React, { useState } from 'react';
//import Project_card from '../components/Project_Card/Project_card.js';
import Project_List from '../components/Project_List/Project_List.js';
import '../../scss/portfolio.scss';
import '../../resources/images/project_images/svsts.png';

const Portfolio = () => {
    const [projects, setProject] = useState([
        {
            id:0,
            name:'Silhouettes vs The Sun',
            tech:['HTML -', ' CSS -', ' JS -', ' PHP -', ' Webpack -', ' Wordpress -', ' Woocommerce '],
            blurb:'Brochure style site done for a new album release for the artist Silhouettes vs The Sun.',
            github:'https://github.com/THarns/SVSTS2.0',
            image:'../../resources/images/project_images/svsts.png'
        },

        {
            id:1,
            name:'Noise In The Neighborhood',
            tech:['HTML -', ' CSS -', ' JS -', ' PHP -', ' Snap SVG -', ' GSAP -', ' Webpack'],
            blurb:'Custom site done for a YouTube channel that produces live content monthly.',
            github:'',
            image:'../../resources/images/project_images/nitn.png'
        },

        {
            id:2,
            name:'Quake Update',
            tech:['HTML -', ' CSS -', ' JS -', ' ThreeJS -', ' MYSQL'],
            blurb:'A full stack project consisting of a script to pull data from the USGS API and store it in a MYSQL database. A backend written in Node.JS to serve the data to the frontend which was written in React and uses ThreeJS to model all the quakes on a model Earth.',
            github:['https://github.com/THarns/QuakeDBUpdater', 'https://github.com/THarns/Quake-Dashboard-backend', 'https://github.com/THarns/Quake-Dashboard'],
            image:'../../resources/images/project_images/VScode_terminal.png'
        },

        {
            id:3,
            name:'This portfolio site',
            tech:['React -', ' CSS -', ' PHP -', ' Webpack'],
            blurb:'I wanted to learn more about the React library and needed a porfolio site as well so I decided to do them in parallel.',
            github:'https://github.com/THarns/reactStatic',
            image:''
        }
    ]);

    return (
        <div className="landing_wrapper port_image">
            <div className="bg_container"></div>
            <h1>Websites</h1>
            {/*<Project_card  name={projects[0].name} tech={projects[0].tech} blurb={projects[0].blurb} link={projects[0].github} />
            <Project_card  name={projects[1].name} tech={projects[1].tech} blurb={projects[1].blurb} link={projects[1].github} />*/}
            <Project_List projects={projects}/>
            <h2>Logos</h2>
        </div>
    );
}

export default Portfolio;