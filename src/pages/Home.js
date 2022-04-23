import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'
import { useState } from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
      setOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
    </>
  )
}

export default Home
