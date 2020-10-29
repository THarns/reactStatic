import React from 'react';
import Project_Card from '../Project_Card/Project_card.js';
import './project_list.scss';

const Project_List = (props) => {
    const projects = props.projects;
    const list_items = projects.map((project, idx) => 
        <Project_Card key={idx} name={project.name} tech={project.tech} blurb={truncate(project.blurb, 100)} link={project.github} imgLink={project.imgLink} delayLength={project.delayLength} pos={project.pos} expanded={project.expanded} />
    );

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + String.fromCharCode(8230): str;
    };

    return (
        <div className="projects_list">
            {list_items}
        </div>
    );
}

export default Project_List;