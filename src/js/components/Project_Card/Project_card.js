import React from 'react';
import './project_card.scss';
import { motion,  AnimatePresence } from "framer-motion";
import { ThemeContext } from '../Theme/Theme_Context.js';

const Project_card = (props) => {
    const { theme, toggle, dark } = React.useContext(ThemeContext);

    return (
        <div className="card_wrapper" key={props.id} style={{}}>

            <div className="project_image">
                <img src={props.imgLink} />
            </div>
            <div className="project_details" style={{}}>
                <h3>{props.name}</h3>
                <h4>{props.tech}</h4>
                <p>{props.blurb}</p>
            </div>
            <a href="#">See more...</a>
        </div>
    );
}

export default Project_card;