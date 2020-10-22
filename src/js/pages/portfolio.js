import React, { useState } from 'react';
import Wrapper from '../components/Div/Div.js';
import Project_List from '../components/Project_List/Project_List.js';
import '../../scss/portfolio.scss';

const Portfolio = () => {
    const [projects, setProject] = useState([
        {
            id:0,
            name:'Silhouettes vs The Sun',
            tech:['HTML -', ' CSS -', ' JS -', ' PHP -', ' Webpack -', ' Wordpress -', ' Woocommerce '],
            blurb:'Brochure style site done for a new album release for the artist Silhouettes vs The Sun.',
            github:'https://github.com/THarns/SVSTS2.0',
            imgLink:'../../resources/images/project_images/svsts.png'
        },

        {
            id:1,
            name:'Noise In The Neighborhood',
            tech:['HTML -', ' CSS -', ' JS -', ' PHP -', ' Snap SVG -', ' GSAP -', ' Webpack'],
            blurb:'Custom site done for a YouTube channel that produces live content monthly.',
            github:'',
            imgLink:'../../resources/images/project_images/nitn.png'
        },

        {
            id:2,
            name:'Quake Update',
            tech:['HTML -', ' CSS -', ' JS -', ' ThreeJS -', ' MYSQL'],
            blurb:'A full stack project consisting of a script to pull data from the USGS API and store it in a MYSQL database. A backend written in Node.JS to serve the data to the frontend which was written in React and uses ThreeJS to model all the quakes on a model Earth.',
            github:['https://github.com/THarns/QuakeDBUpdater', 'https://github.com/THarns/Quake-Dashboard-backend', 'https://github.com/THarns/Quake-Dashboard'],
            imgLink:'../../resources/images/project_images/VScode_terminal.png'
        },

        {
            id:3,
            name:'This portfolio site',
            tech:['React -', ' CSS -', ' PHP -', ' Webpack'],
            pic:'',
            blurb:'Wanting to learn more about the React library and needing to make a porfolio site; I decided to do them in parallel.',
            github:'https://github.com/THarns/reactStatic',
            imgLink:null
        }
    ]);

    const [logo, setLogo] = useState([
        {
            id:0,
            name:'',
            imgLink:''
        },

        {
            id:1,
            name:'',
            imgLink:''
        },

        {
            id:2,
            name:'',
            imgLink:''
        },

        {
            id:3,
            name:'',
            imgLink:''
        }
    ]);

    return (
        <div>
            <div className="landing_wrapper port_image">
                <div className="bg_container"></div>
                <h1>Websites</h1>
                <Project_List projects={projects}/>
            </div>
            <section>
                <h2>Logos</h2>
            </section>
        </div>
    );
}

export default Portfolio;