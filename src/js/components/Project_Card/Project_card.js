import React from 'react';
import './project_card.scss';
import { motion,  AnimatePresence } from "framer-motion";

const Project_card = (props) => {
    console.log(props.imgLink); ///WTFFFFFFFFFFFFFFFFFFFFFFFFFFF???????????????????!!!!!!!!!!!!!!!!
    return (
        <div className="card_wrapper" key={props.id}>

            <div className="project_image">
                <img src={props.imgLink} />
            </div>
            <div className="project_details">
                <h3>{props.name}</h3>
                <h4>{props.tech}</h4>
                <p>{props.blurb}</p>
            </div>
            <a href="#">See more...</a>
        </div>
    );
}

export default Project_card;