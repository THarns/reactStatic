import React from 'react';
import Project_Card from '../Project_Card/Project_card.js';
import './project_list.scss';

const Project_List = (props) => {
    const projects = props.projects;
    const list_items = projects.map((project) => 
        <Project_Card key={project.id} name={project.name} tech={project.tech} blurb={project.blurb} link={project.github} />
    );

    return (
        <div className="projects_list">
            {list_items}
        </div>
    );
}

export default Project_List;