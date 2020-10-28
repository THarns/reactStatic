import React from 'react';
import './project_card.scss';
import { motion,  AnimatePresence } from "framer-motion";
import { ThemeContext } from '../Theme/Theme_Context.js';

const Project_card = (props) => {
    const { theme, toggle, dark } = React.useContext(ThemeContext);
    let techs = props.tech;
    let listImgs = techs.map((tech, idx) => 
        <li key={idx}><img src={tech}/></li>
    );

    function handleClick(e, data) {
        let parent = e.target.parentNode;
        let hidden = parent.childNodes;
        console.log(hidden);
        hidden[4].classList.add('expand_hidden');
        parent.classList.add('expand_card');

        let closeBtns = document.getElementsByClassName('close');
        hidden[0].style.display = 'block';
        hidden[1].style.marginTop = '60px';
        for(let i = 0; i< closeBtns.length; i++) {
            closeBtns[i].addEventListener('click', ()=> {
                parent.classList.remove('expand_card');
                closeBtns[i].style.display = 'none';
                hidden[1].style.marginTop = '5%';
            });
        }
    }

    return (
        <motion.div className="card_wrapper" key={props.id} style={{}}>
            <div className="close"><p>&times;</p></div>
            <div className="project_image">
                <img src={props.imgLink} />
            </div>
            <div className="project_details" style={{}}>
                <h3>{props.name}</h3>
                {/*<h4>{props.tech}</h4>*/}
                <ul>{listImgs}</ul>
                <p>{props.blurb}</p>
            </div>
            <a onClick={ ((e) => handleClick(e, props)) }>See more...</a>
            <div className="hidden_container">

            </div>
        </motion.div>
    );
}

export default Project_card;