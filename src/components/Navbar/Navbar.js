import React, {useRef} from 'react'
import {FaBars} from "react-icons/fa"
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks
} from "./NavbarElements"


const Navbar = ({toggle}) => {
  const navbar = useRef()

  return (
    <>
      <Nav ref={navbar}>
        <NavbarContainer>
          <NavLogo to="hero" smooth={true} duration={500} offset={-80}>
            <span style={{fontSize: "1rem", color: "#c3d0db"}}>{"<"}</span >{"KG"}<span style={{fontSize: "1rem", color: "#c3d0db"}}>{">"}</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth={true} duration={500} spy={true} offset={-80}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} offset={-80}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
