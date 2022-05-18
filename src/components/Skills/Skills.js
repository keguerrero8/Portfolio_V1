import React, {useRef, useEffect} from 'react'
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
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const skill1 = useRef()
    const skill2 = useRef()
    const skill3 = useRef()
    const skill4 = useRef()
    const skill5 = useRef()
    const skill6 = useRef()
    const skill7 = useRef()
    const skill8 = useRef()
    const skillTitle = useRef()
    const skillContent = useRef()
  
    useEffect(() => {
      gsap.fromTo(skill1.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill1.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(skill2.current, {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill2.current,
        toggleActions: "restart none restart none"
      }})

      gsap.fromTo(skill3.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill3.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(skill4.current, {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill4.current,
        toggleActions: "restart none restart none"
      }})

      gsap.fromTo(skill5.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill5.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(skill6.current, {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill6.current,
        toggleActions: "restart none restart none"
      }})

      gsap.fromTo(skill7.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill7.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(skill8.current, {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skill8.current,
        toggleActions: "restart none restart none"
      }})

      gsap.fromTo(skillContent.current, {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skillContent.current,
        toggleActions: "restart none restart none"
      }})
  
      gsap.fromTo(skillTitle.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
        trigger: skillTitle.current,
        toggleActions: "restart none restart none"
      }})

    }, [])

  return (
    <SkillsContainer id="skills">
        <div>
            <SkillsTitle ref={skillTitle}>Skills</SkillsTitle>
            <SkillsContent ref={skillContent}>These are the technologies I work with:</SkillsContent>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} ref={skill1} >
                    <Icon>
                        <HTMLIcon />
                    </Icon>
                    <SkillsSubText>HTML</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill2}>
                    <Icon>
                        <CSSIcon />
                    </Icon>
                    <SkillsSubText>CSS</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill3}>
                    <Icon>
                        <JSIcon />
                    </Icon>
                    <SkillsSubText>JavaScript</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill4}>
                    <Icon>
                        <ReactIcon />
                    </Icon>
                    <SkillsSubText>React</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill5}>
                    <Icon>
                        <PyIcon />
                    </Icon>
                    <SkillsSubText>Python</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill6}>
                    <Icon>
                        <RubyIcon />
                    </Icon>
                    <SkillsSubText>Ruby</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill7}>
                    <Icon>
                        <RailsIcon />
                    </Icon>
                    <SkillsSubText>Ruby on Rails</SkillsSubText>
                </Grid>
                <Grid item xs={6} sm={3} ref={skill8}>
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
