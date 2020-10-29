import React,  { useState } from 'react';
import './project_card.scss';
import { motion,  AnimatePresence } from "framer-motion";
import { ThemeContext } from '../Theme/Theme_Context.js';

const Project_card = (props) => {
    const { theme, toggle, dark } = React.useContext(ThemeContext);
    let techs = props.tech;
    let listImgs = techs.map((tech, idx) => 
        <li key={idx}><img src={tech}/></li>
    );

    /*function handleClick(e, data) {
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
    }*/
    //const [size, setSize] = useState({ width:'90vw', maxWidth:'400px', height:'500px', maxHeight:'500px', pos:0 });
    const [active, setActive] = useState(false);
    const variants = {
        active: { width:'100vw', maxWidth:'100vw', height:'100vh', maxHeight:'100vh' },
        disabled: { width:'90vw', maxWidth:'400px', height:'500px', maxHeight:'500px' }
    };

    //active ? 'active' : 'disabled';
    
    return (
        <motion.div initial={{ opacity: 0, y:'-5vh', width:'90vw', maxWidth:'400px', height:'500px', maxHeight:'500px' }}
                    variants={variants}
                    animate={{ y:'0vh', opacity:1 }}
                    transition={{ duration:.25, delay: props.delayLength}} 
                    className="card_wrapper" 
                    key={props.id} >

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
            {/*<a onClick={ ((e) => handleClick(e, props)) }>See more...</a>*/}
            {/*<a onClick={(() => setSize(props.expanded)) } >See more...</a>*/}
            <a onClick={() => setActive(!active)} >See More...</a>
            <div className="hidden_container">

            </div>
        </motion.div>
    );
}

export default Project_card;