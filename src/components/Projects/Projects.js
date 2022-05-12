import React from 'react'
import { 
    ProjectsContainer,
    ProjectsTitle,
    ProjectsContent,
    ProjectsList,
    SideProjectsList,
    SideProjectsContent
} from './ProjectsElements'
import Project from './Project/Project'
import SideProject from './SideProject/SideProject'
import {projects} from "../../assets/projects.js"
import {sideProjects} from "../../assets/sideProjects.js"

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <div>
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsContent>Here is some of my recent work</ProjectsContent>
            <ProjectsList>
              {projects.map(project => <Project key={project.id} project={project}/>)}
            </ProjectsList>
            <SideProjectsContent>Other projects I've built</SideProjectsContent>
            <SideProjectsList>
              {sideProjects.map(project => <SideProject key={project.id} project={project} />)}
            </SideProjectsList>
        </div>
    </ProjectsContainer>
  )
}

export default Projects
