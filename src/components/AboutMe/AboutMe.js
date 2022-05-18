import React, {useRef, useEffect} from 'react'
import { 
    AboutMeContainer, 
    AboutMeTitle, 
    AboutMePicContainer, 
    AboutMeContent, 
    AboutMeImg,
    AboutMeImgBg,
    AboutMeImgContainer, 
    AboutMetext,
 } from './AboutMeElements'
import Profile from "../../assets/profile.png"
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const aboutContent = useRef()

  useEffect(() => {
    gsap.fromTo(aboutContent.current, {y: -30, opacity: 0}, {y: 0, opacity: 1, duration: 2, scrollTrigger: {
      trigger: aboutContent.current,
      toggleActions: "restart none restart none"
    }})
  }, [])

  return (
    <AboutMeContainer id="about" ref={aboutContent}>
        <AboutMeContent >
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMetext>
            My background is in systems engineering, where I
            worked at <span style={{color: "#6df7cc"}}>Siemens Healthineers</span> to deliver software features for laboratory diagnostic instruments. In particular, I developed software tools and procedures that automated
            the workflow of service engineers.
            </AboutMetext>
            <AboutMetext>
            I quickly fell in love with coding, and decided to enroll in the <span style={{color: "#6df7cc"}}>Flatiron School</span> bootcamp to pursue
            a career in web development.  Today, I spend my time building web applications, software tools, exploring new technologies, and solving Leetcode questions.
            </AboutMetext>
        </AboutMeContent>
        <AboutMePicContainer>
                <AboutMeImgBg />
                <AboutMeImgContainer>
                    <AboutMeImg src={Profile}/>
                </AboutMeImgContainer>
        </AboutMePicContainer>
    </AboutMeContainer>
  )
}

export default AboutMe
