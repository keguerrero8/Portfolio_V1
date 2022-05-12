import React from 'react'
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

const SideProject = ({project}) => {
  return (
    <SideProjectContainer>
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
