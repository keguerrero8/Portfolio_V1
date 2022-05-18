import React, {useRef, useEffect} from 'react'
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
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projectTitle = useRef()
  const projectContent = useRef()

  useEffect(() => {
    gsap.fromTo(projectTitle.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
      trigger: projectTitle.current,
      toggleActions: "restart none restart none"
    }})

    gsap.fromTo(projectContent.current, {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
      trigger: projectContent.current,
      toggleActions: "restart none restart none"
    }})
  }, [])

  return (
    <ProjectsContainer id="projects">
        <div>
            <ProjectsTitle ref={projectTitle}>Projects</ProjectsTitle>
            <ProjectsContent ref={projectContent}>Here is some of my recent work</ProjectsContent>
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
