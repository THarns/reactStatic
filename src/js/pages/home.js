import React from 'react';
import Footer from '../components/Footer/footer.js';
import Div from '../components/Div/Div.js';
import '../../scss/home.scss';
import '../../scss/index.scss';

const Home = () => {
    return (
        <div className="landing_wrapper">
            <div className="bg_container"></div>
            <div className="home_content">
                <h1>Front</h1>
            </div>
        </div>
    );
}

export default Home;