import React, {useRef, useEffect} from 'react'
import { HeroContainer, HeroContent, HeroText, HeroTitle, ResumeBtn, ResumeBtnLink } from './HeroElements'
import gsap from 'gsap'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);

const HeroElements = () => {
  const name = useRef()
  const content = useRef()
  const hi = useRef()
  const t1 = useRef()
  const titles = ["Software Engineer", "System Engineer", "Tech Enthusiast"]


  // useEffect(() => {
  //   t1.current = gsap.timeline({defaults: {duration: 1, ease: "sine"}})
  //   .to(hi.current, { opacity: 1})
  //   // .to(name.current, { opacity: 1})
  //   // .to(content.current, { opacity: 1})

  // }, []);


  
  return (
    <div style={{position: 'relative'}}>
    <HeroContainer id="hero">
        <HeroContent>
          <HeroText ref={hi} isHello={true}>Hi, my name is</HeroText>
          {/* <HeroTitle>I am a<span className="text"></span><span style={{fontWeight: 400}}>_</span></HeroTitle> */}
          <HeroTitle>Kevin Guerrero</HeroTitle>
          <HeroText ref={content}>
            I'm a <span style={{color: "#6df7cc"}}>software engineer</span> with previous <span style={{color: "#6df7cc"}}>systems engineering</span> experience. I specialize in building <span style={{color: "#6df7cc"}}>full stack web applications </span>
            and approach my solutions algorithmically to produce maintainable and scalable code.
          </HeroText>
          <ResumeBtn>
              <ResumeBtnLink href="./Resume_KG.pdf" download>Download Resume</ResumeBtnLink>
          </ResumeBtn>
        </HeroContent>
    </HeroContainer>
    </div>
  )
}

export default HeroElements
