import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'
import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';

const Home = ({theme}) => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
      setOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <AboutMe/>
      <Skills theme={theme}/>
    </>
  )
}

export default Home
