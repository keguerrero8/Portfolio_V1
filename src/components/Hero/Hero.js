import React, {useRef, useEffect} from 'react'
import { HeroContainer, HeroContent, HeroText, HeroTitle, ResumeBtn, ResumeBtnLink } from './HeroElements'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const HeroElements = () => {  
  const heroHi = useRef()
  const heroContent = useRef()
  const heroResume = useRef()

  useEffect(() => {
    gsap.fromTo(heroContent.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: heroContent.current,
      toggleActions: "restart none restart none"
    }})

    gsap.fromTo(heroHi.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: heroHi.current,
      toggleActions: "restart none restart none"
    }})

    gsap.fromTo(heroResume.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: heroResume.current,
      toggleActions: "restart none restart none"
    }})
  }, [])
  
  return (
    <div style={{position: 'relative'}}>
    <HeroContainer id="hero">
        <HeroContent>
          <HeroText isHello={true} ref={heroHi}>Hi, my name is</HeroText>
          <HeroTitle>Kevin Guerrero</HeroTitle>
          <HeroText ref={heroContent}>
            I'm a <span style={{color: "#6df7cc"}}>software engineer</span> with previous <span style={{color: "#6df7cc"}}>systems engineering</span> experience. I specialize in building <span style={{color: "#6df7cc"}}>full stack web applications </span>
            and approach my solutions algorithmically to produce maintainable and scalable code.
          </HeroText>
          <ResumeBtn ref={heroResume}>
              <ResumeBtnLink href="./Resume_KG.pdf" download >Download Resume</ResumeBtnLink>
          </ResumeBtn>
        </HeroContent>
    </HeroContainer>
    </div>
  )
}

export default HeroElements
