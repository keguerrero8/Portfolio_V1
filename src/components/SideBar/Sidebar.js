import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarResume 
} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
          <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
                Skills
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
                Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
                Contact
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarResume href="./Resume_v2.pdf" download>Resume</SidebarResume>
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
