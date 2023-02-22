import React from 'react';
import './CurrentProjects.css';

import placeholderImg from './placeholder.png';

const projects = [
  { id: 1, name: 'Observe', description: 'Test Your' },
  { id: 2, name: 'La Fitness', description: 'Description of project 2' },
  { id: 3, name: 'Clean Trails', description: 'Description of project 3' },
  { id: 4, name: 'Salt Creative House', description: 'Description of project 4' },
  { id: 5, name: 'Giving Tuesday', description: 'Description of project 5' },
  { id: 6, name: 'TSQ ATL Social Club', description: 'Description of project 6' },
];

function CurrentProjects() {
  return (
    <div className="grid-container">
      {projects.map(project => (
        <div className="grid-item" key={project.id}>
          <a href='test'>
            <img src={placeholderImg} alt="Project" />
            <div className="title">{project.name}</div>
          </a>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CurrentProjects;
