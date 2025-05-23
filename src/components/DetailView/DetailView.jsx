import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';

const ProjectDetail =()=>{
    const{slug}= useParams();
    const[project, setProject]= useState(null);
    const [error, setError] = useState(null);

   useEffect(()=>{
    fetchProjects()
    .then(data=>{
        const found = data.find(proj => proj.slug === slug);
        if (found) {
            setProject(found);
        } else {
            setError('Проект не найден');
        }
    })
    .catch(err => {
        console.error(err);
        setError('Ошибка загрузки проекта');
    });
   },[slug]);
   if (error) return <div>{error}</div>
   if (!project) return <div>Загрузка</div>
    return(
        <div>
            <div className="detail">
                <div>Detail page</div>
                <h2>{project.name}</h2>    
            </div>
            <div>
                <img src={project.image} alt={project.name} style={{ maxWidth: '400px' }} />
            </div>
            <p><strong>Описание:</strong> {project.description}</p>
            <p><strong>Технологии:</strong> {project.tehnology_project}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Перейти на сайт</a>
        </div>
    );
}
export default ProjectDetail;