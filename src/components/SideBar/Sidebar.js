import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink,
    SideBarLogo
} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
          <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} offset={-80}>
                About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle} smooth={true} duration={500} spy={true} offset={-80}>
                Skills
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} offset={-80}>
                Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} spy={true} offset={-80}>
                Contact
            </SidebarLink>
          </SidebarMenu>
          <SideBarLogo >
            <span style={{fontSize: "1.5rem", color: "#c3d0db"}}>{"<"}</span >{"KG"}<span style={{fontSize: "1.5rem", color: "#c3d0db"}}>{">"}</span>
          </SideBarLogo>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
