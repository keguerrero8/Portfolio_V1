import React from 'react'
import { 
    SkillsContainer, 
    SkillsTitle, 
    SkillsContent, 
    SkillsSubText, 
    Icon, 
    HTMLIcon, 
    CSSIcon, 
    JSIcon, 
    ReactIcon,
    PyIcon,
    RubyIcon,
    RailsIcon,
    GitIcon
 } from './SkillsElements'
import Grid from '@mui/material/Grid';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
        <div>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContent>These are the technologies I work with:</SkillsContent>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <HTMLIcon />
                    </Icon>
                    <SkillsSubText>HTML</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <CSSIcon />
                    </Icon>
                    <SkillsSubText>CSS</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <JSIcon />
                    </Icon>
                    <SkillsSubText>JavaScript</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <ReactIcon />
                    </Icon>
                    <SkillsSubText>React</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <PyIcon />
                    </Icon>
                    <SkillsSubText>Python</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <RubyIcon />
                    </Icon>
                    <SkillsSubText>Ruby</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <RailsIcon />
                    </Icon>
                    <SkillsSubText>Ruby on Rails</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} >
                    <Icon>
                        <GitIcon />
                    </Icon>
                    <SkillsSubText>Git</SkillsSubText>
                </Grid>
            </Grid>
        </div>
    </SkillsContainer>
  )
}

export default Skills
