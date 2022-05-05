import React from 'react'
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
    Technology,
    GithubIcon,
    LinkIcon,
    VideoIcon
} from './ProjectElements'


const Project = ({project}) => {
  console.log(project.image)
  return (
    <ProjectContainer>
        <ProjectImageContainer>
            <ProjectImageWrapper>
                <ProjectBrowser>
                    <ProjectCircle />
                    <ProjectCircle />
                    <ProjectCircle />
                </ProjectBrowser>
                <ProjectImg src={project.image}/>
            </ProjectImageWrapper>
        </ProjectImageContainer>
        <ProjectContent>
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
                <ProjectLink href={project.liveSite}><VideoIcon /></ProjectLink>
            </ProjectLinkWrapper>
        </ProjectContent>
    </ProjectContainer>
  )
}

export default Project
