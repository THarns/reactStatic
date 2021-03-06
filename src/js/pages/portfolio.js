import React, { useState } from 'react';
import Wrapper from '../components/Div/Div.js';
import Project_List from '../components/Project_List/Project_List.js';
import '../../scss/portfolio.scss';
import { ThemeContext } from '../components/Theme/Theme_Context.js';

const Portfolio = () => {
    const [projects, setProject] = useState([
        {
            id:0,
            name:'Silhouettes vs The Sun',
            tech:['../../resources/images/logos/web_tech/html5_no_text.svg', '../../resources/images/logos/web_tech/sass.svg', ' ../../resources/images/logos/web_tech/JS_logo.svg', '../../resources/images/logos/web_tech/php.svg', '../../resources/images/logos/web_tech/woocommerce.svg', '../../resources/images/logos/web_tech/webpack-icon.svg'],
            blurb:'Brochure style site done with some custom elements and vector graphics for a new album release for the artist Silhouettes vs The Sun.',
            longDescription:'',
            github:'https://github.com/THarns/SVSTS2.0',
            imgLink:'../../resources/images/project_images/svsts.png',
            delayLength:0,
            pos:0,
            expanded:{
                width:'100vw',
                maxWidth:'100vw',
                height:'100vh',
                maxHeight:'100vh'
            }
        },

        {
            id:1,
            name:'Noise In The Neighborhood',
            tech:['../../resources/images/logos/web_tech/html5_no_text.svg', '../../resources/images/logos/web_tech/sass.svg', ' ../../resources/images/logos/web_tech/JS_logo.svg','../../resources/images/logos/web_tech/php.svg', '../../resources/images/logos/web_tech/snapsvg.svg', '../../resources/images/logos/web_tech/webpack-icon.svg'],
            blurb:'Custom static site with an animated SVG landing page done for a YouTube channel that produces live content monthly.',
            longDescription:'',
            github:'',
            imgLink:'../../resources/images/project_images/nitn.png',
            delayLength:.25,
            pos:1,
            expanded:{
                width:'100vw',
                maxWidth:'100vw',
                height:'100vh',
                maxHeight:'100vh'
            }
        },

        {
            id:2,
            name:'Quake Update',
            tech:['../../resources/images/logos/web_tech/html5_no_text.svg', '../../resources/images/logos/web_tech/sass.svg', ' ../../resources/images/logos/web_tech/JS_logo.svg', '../../resources/images/logos/web_tech/threejsText.svg', '../../resources/images/logos/web_tech/mysql.svg', '../../resources/images/logos/web_tech/webpack-icon.svg'],
            blurb:'A full stack project consisting of a script to pull data from the USGS API and store it in a MYSQL database. A backend written in Node.JS to serve the data to the frontend which was written in React and uses ThreeJS to model all the quakes on a model Earth.',
            longDescription:'',
            github:['https://github.com/THarns/QuakeDBUpdater', 'https://github.com/THarns/Quake-Dashboard-backend', 'https://github.com/THarns/Quake-Dashboard'],
            imgLink:'../../resources/images/project_images/VScode_terminal.png',
            delayLength:.5,
            pos:2,
            expanded:{
                width:'100vw',
                maxWidth:'100vw',
                height:'100vh',
                maxHeight:'100vh'
            }
        },

        {
            id:3,
            name:'This portfolio site',
            tech:['../../resources/images/logos/web_tech/react.svg', '../../resources/images/logos/web_tech/react-router.svg', '../../resources/images/logos/web_tech/sass.svg', '../../resources/images/logos/web_tech/php.svg', '../../resources/images/logos/web_tech/snapsvg.svg', '../../resources/images/logos/web_tech/webpack-icon.svg'],
            pic:'',
            blurb:'Wanting to learn more about the React library and needing to make a porfolio site; I decided to do them in parallel.',
            longDescription:'',
            github:'https://github.com/THarns/reactStatic',
            imgLink:null,
            delayLength:.75,
            pos:3,
            expanded:{
                width:'100vw',
                maxWidth:'100vw',
                height:'100vh',
                maxHeight:'100vh'
            }
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

    const { theme, toggle, dark } = React.useContext(ThemeContext);

    return (
        <div>
            <div className="landing_wrapper">
                <div className="bg_container"></div>
                <h1 style={{color:theme.color}}>Websites</h1>
                <Project_List projects={projects}/>
            </div>
            <section>
                <h2 style={{color:theme.color}}>Logos &amp; WordMarks</h2>
            </section>
        </div>
    );
}

export default Portfolio;