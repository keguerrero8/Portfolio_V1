import React, {useRef, useEffect} from 'react'
import Video from "../../assets/video.mp4"
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroText, HeroName } from './HeroElements'
import gsap from 'gsap'

const HeroElements = () => {
  const name = useRef()
  const content = useRef()
  const hi = useRef()
  const t1 = useRef()

  useEffect(() => {
    t1.current = gsap.timeline({defaults: {duration: 1, ease: "sine"}})
    .to(hi.current, { opacity: 1})
    .to(name.current, { opacity: 1})
    .to(content.current, { opacity: 1})
  }, []);

  return (
    <HeroContainer id="hero">
        {/* <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg> */}
        <HeroContent>
          <HeroText ref={hi} isHello={true}>Hi, my name is</HeroText>
          <HeroName ref={name}>Kevin Guerrero</HeroName>
          <HeroText ref={content}>
            I'm a software engineer with a strong passion for problem solving and building <span style={{color: "#6df7cc"}}>full stack web applications.</span> Currently, I am seeking opportunities where I can continue to learn and grow, while providing 
            impact in a team setting.  
          </HeroText>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroElements
