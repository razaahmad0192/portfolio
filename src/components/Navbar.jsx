import React from 'react'
import HamburgerComponent from './HamburgerComponent'
import { Link } from "react-scroll";

import { FaMoon } from "react-icons/fa";
const Navbar = () => {

  return (
    <nav className=' flex md:justify-around justify-between md:py-5 py-2 items-center  bg-blue-950 text-white top-0 sticky w-full '>
      <div className="logo pl-3">
        <h2 >Ahm</h2>
      </div>
      <ul className='md:flex gap-5 hidden items-center'>
        <li>
          <Link
            to="home"          // same as id in your section
            smooth={true}      // enables smooth scrolling
            duration={700}     // scroll speed in ms
            spy={true}         // highlights link when section in view (optional)
            offset={-70}       // optional, adjusts for navbar height
          >Home</Link>
        </li>
        <li>
          <Link
            to="about"          // same as id in your section
            smooth={true}      // enables smooth scrolling
            duration={700}     // scroll speed in ms
            spy={true}         // highlights link when section in view (optional)
            offset={-70}       // optional, adjusts for navbar height
          >About</Link>
        </li>
        <li>
          <Link
            to="projects"          // same as id in your section
            smooth={true}      // enables smooth scrolling
            duration={700}     // scroll speed in ms
            spy={true}         // highlights link when section in view (optional)
            offset={-70}       // optional, adjusts for navbar height
          >Projects</Link>
        </li>
        <li>
          <Link
            to="skills"          // same as id in your section
            smooth={true}      // enables smooth scrolling
            duration={700}     // scroll speed in ms
            spy={true}         // highlights link when section in view (optional)
            offset={-70}       // optional, adjusts for navbar height
          >Skills</Link>
        </li>
        <li>
          <Link
            to="contact"          // same as id in your section
            smooth={true}      // enables smooth scrolling
            duration={700}     // scroll speed in ms
            spy={true}         // highlights link when section in view (optional)
            offset={-70}       // optional, adjusts for navbar height
          >Contact</Link>
        </li>

        <li><FaMoon /></li>
        <li><button className='px-3 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></li>
      </ul>
      <HamburgerComponent />
    </nav>
  )
}

export default Navbar
