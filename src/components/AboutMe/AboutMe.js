import React from 'react'
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

const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
        <AboutMeContent>
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMetext>
            Hello, I am Kevin Guerrero and my background is in systems engineering, where I
            worked at <span style={{color: "#6df7cc"}}>Siemens Healthineers</span> to deliver software features for laboratory diagnostic instruments. In particular, I developed software tools and procedures that automated
            the workflow of service engineers.
            </AboutMetext>
            <AboutMetext>
            I quickly fell in love with coding, and decided to enroll in the <span style={{color: "#6df7cc"}}>Flatiron School</span> bootcamp to pursue
            a career in web development.  Today, I spend my time building web applications, software tools, and exploring new technologies.
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
