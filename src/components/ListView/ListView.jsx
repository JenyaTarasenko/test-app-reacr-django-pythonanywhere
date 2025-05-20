import './style.css';
import React, { useEffect, useState } from 'react';


function Home(){
    const[projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8001/api/projects/')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err))
    },[]);
    return(
        <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.tehnology_project}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Link</a>
            {/* <img src={project.image} alt={project.name} style={{width: '200px'}} /> */}
            <img alt={project.name} src={project.image} style={{width:'100px',height:'100px'}}/>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Home;