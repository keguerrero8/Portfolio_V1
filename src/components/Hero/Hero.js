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
    <HeroContainer>
        {/* <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg> */}
        <HeroContent>
          <HeroText ref={hi} isHello={true}>Hi, I am</HeroText>
          <HeroName ref={name}>Kevin Guerrero</HeroName>
          <HeroText ref={content}>
            I am a software engineer with experience in building <span style={{color: "#6df7cc"}}>full stack web applications.</span> In my previous career, I gained extensive experience 
            designing and implementing software features on large scale medical device systems. I have a passion for <span style={{color: "#6df7cc"}}>designing and building solutions </span>
            to difficult engineering problems.
          </HeroText>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroElements
