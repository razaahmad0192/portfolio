import React from 'react'
import HamburgerComponent from './HamburgerComponent'
import { FaMoon } from "react-icons/fa";
const Navbar = () => {
    
  return (
    <nav className=' flex md:justify-around justify-between md:py-5 py-2 items-center  bg-blue-950 text-white top-0 sticky w-full '>
      <div className="logo pl-3">
        <h2 >Ahm</h2>
      </div>
      <ul className='md:flex gap-5 hidden items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li><FaMoon/></li>
        <li><button className='px-3 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></li>
      </ul>
      <HamburgerComponent/>
    </nav>
  )
}

export default Navbar
