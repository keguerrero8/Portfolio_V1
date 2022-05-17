import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {FaBars} from "react-icons/fa"
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements"
// import ResumePDF from '../../assets/Resume_v2.pdf'

const Navbar = ({toggle}) => {
  // const t1 = useRef()
  const navbar = useRef()

  // useEffect(() => {
  //   t1.current = gsap.timeline({defaults: {duration: 1, ease: "sine"}})
  //   .to(navbar.current, { y: "50%"})

  // }, [])

  return (
    <>
      <Nav ref={navbar}>
        <NavbarContainer>
          <NavLogo to="hero" smooth={true}>
            KG
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth={true}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true}>Contact</NavLinks>
            </NavItem>
            {/* <NavBtn>
              <NavBtnLink href="./Resume_KG.pdf" download>Resume</NavBtnLink>
            </NavBtn> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
