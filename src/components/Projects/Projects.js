import React from 'react'
import { 
    ProjectsContainer,
    ProjectsTitle,
    ProjectsContent,
    ProjectsList
} from './ProjectsElements'
import Project from './Project/Project'
import {projects} from "../../assets/projects.js"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <div>
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsContent>Here is some of my recent work</ProjectsContent>
            <ProjectsList>
            {projects.map(project => <Project key={project.id} project={project}/>)}
            </ProjectsList>
        </div>
    </ProjectsContainer>
  )
}

export default Projects
