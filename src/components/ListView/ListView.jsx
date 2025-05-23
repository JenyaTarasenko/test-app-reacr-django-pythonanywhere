import './style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // для отображения ссылки на детальную страницу 
import {fetchProjects} from '../../../src/utils/api';
import NavBar from '../NavBar/NavBar';


function ListView(){
    const[projects, setProjects] = useState([]);
    useEffect(() => {
        fetchProjects().then(setProjects);
      }, []);

    // useEffect(()=>{
    //     fetch('https://jenyatarasenko.pythonanywhere.com/api/projects/')
    //     // fetch('http://127.0.0.1:8001/api/projects/')
    //     .then(res => res.json())
    //     .then(data => setProjects(data))
    //     .catch(err => console.error(err))
    // },[]);
    return(
        <>
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

                    <Link to={`/projects/${project.slug}`}>Смотреть подробнее</Link>
                    
                </li>
                ))}
            </ul>
            </div>
        </>
    );
}

export default ListView;