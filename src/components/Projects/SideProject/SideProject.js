import React, {useRef, useEffect} from 'react'
import { 
    SideProjectContainer,
    SideProjectTitle,
    SideProjectDescription,
    SideProjectTechnologies,
    SideTechnology,
    SideProjectLinkWrapper,
    SideProjectLink,
    GithubIcon
} from './SideProjectElements'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const SideProject = ({project}) => {

    const projectEl = useRef()
  
    useEffect(() => {
      gsap.fromTo(projectEl.current, {scale: 0.8, opacity: 0}, {scale: 1, opacity: 1, duration: 2, scrollTrigger: {
        trigger: projectEl.current,
        toggleActions: "restart none restart none"
      }})
  
    }, [])

  return (
    <SideProjectContainer ref={projectEl}>
        <SideProjectTitle>{project.title}</SideProjectTitle>
        <SideProjectDescription>{project.description}</SideProjectDescription>
        <SideProjectTechnologies>
            {project.technologies.map(tech => <SideTechnology key={tech}>{tech}</SideTechnology>)}
        </SideProjectTechnologies>
        <SideProjectLinkWrapper>
            <SideProjectLink href={project.githubLink}>
                <GithubIcon />
            </SideProjectLink>
        </SideProjectLinkWrapper>
    </SideProjectContainer>
  )
}

export default SideProject
