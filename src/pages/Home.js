import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'
import { useState } from 'react';

const Home = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
      setOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  )
}

export default Home
