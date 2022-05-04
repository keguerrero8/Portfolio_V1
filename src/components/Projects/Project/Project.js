import React from 'react'
import { 
    ProjectContainer,
    ProjectImageContainer,
    ProjectImg,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    ProjectImageWrapper,
    ProjectTechnologies
} from './ProjectElements'

const Project = ({project}) => {
  console.log(project)
  return (
    <ProjectContainer>
        <ProjectImageContainer>
            <ProjectImageWrapper>
                <ProjectImg src={project.image}/>
            </ProjectImageWrapper>
        </ProjectImageContainer>
        <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            {/* <ProjectTechnologies></ProjectTechnologies> */}
        </ProjectContent>
    </ProjectContainer>
  )
}

export default Project
