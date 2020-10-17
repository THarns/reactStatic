import React from 'react';
import './project_card.scss';

const Project_card = () => {
    return (
        <div className="card_wrapper">
            <div className="project_image">

            </div>
            <div className="project_details">
                <h3>Project Title</h3>
                <p>Short blurb about project...</p>
            </div>
        </div>
    );
}

export default Project_card;