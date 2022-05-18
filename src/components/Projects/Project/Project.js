import React, {useRef, useEffect} from 'react'
import { 
    ProjectContainer,
    ProjectImageContainer,
    ProjectImg,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    ProjectImageWrapper,
    ProjectBrowser,
    ProjectCircle,
    ProjectContentWrapper,
    ProjectTechnologies,
    ProjectLinkWrapper,
    ProjectLink,
    ProjectOverlay,
    ProjectOverlayTitle,
    ProjectOverlayDescription,
    ProjectOverlayTechnologies,
    ProjectOverlayLinkWrapper,
    OverlayTechnology,
    ProjectOverlayLink,
    Technology,
    GithubIcon,
    LinkIcon,
    VideoIcon
} from './ProjectElements'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)


const Project = ({project}) => {

    const projectContent = useRef()
    const projectImage = useRef()
  
    useEffect(() => {
      gsap.fromTo(projectContent.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: projectContent.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(projectImage.current, {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: projectImage.current,
        toggleActions: "restart none restart none"
      }})
    }, [])

  return (
    <ProjectContainer>
        <ProjectImageContainer ref={projectImage}>
            <ProjectImageWrapper>
                <ProjectBrowser>
                    <ProjectCircle />
                    <ProjectCircle />
                    <ProjectCircle />
                </ProjectBrowser>
                <ProjectImg src={project.image}/>
            </ProjectImageWrapper>
            <ProjectOverlay>
                <ProjectOverlayTitle>{project.title}</ProjectOverlayTitle>
                <ProjectOverlayDescription>{project.description}</ProjectOverlayDescription>
                <ProjectOverlayTechnologies>
                    {project.technologies.map(tech => <OverlayTechnology key={tech}>{tech}</OverlayTechnology>)}
                </ProjectOverlayTechnologies>
                <ProjectOverlayLinkWrapper>
                    <ProjectOverlayLink href={project.githubLink}><GithubIcon /></ProjectOverlayLink>
                    <ProjectOverlayLink href={project.liveSite}><LinkIcon /></ProjectOverlayLink>
                    <ProjectOverlayLink href={project.demoLink}><VideoIcon /></ProjectOverlayLink>
                </ProjectOverlayLinkWrapper>
            </ProjectOverlay>
        </ProjectImageContainer>
        <ProjectContent ref={projectContent}>
            <ProjectContentWrapper>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContentWrapper>
            <ProjectTechnologies>
                {project.technologies.map(tech => <Technology key={tech}>{tech}</Technology>)}
            </ProjectTechnologies>
            <ProjectLinkWrapper>
                <ProjectLink href={project.githubLink}><GithubIcon /></ProjectLink>
                <ProjectLink href={project.liveSite}><LinkIcon /></ProjectLink>
                <ProjectLink href={project.demoLink}><VideoIcon /></ProjectLink>
            </ProjectLinkWrapper>
        </ProjectContent>
    </ProjectContainer>
  )
}

export default Project
