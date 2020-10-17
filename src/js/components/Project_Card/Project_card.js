import React from 'react';
import './project_card.scss';

const Project_card = (props) => {
    return (
        <div className="card_wrapper">
            <div className="project_image">
                <img src={props.image} />
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