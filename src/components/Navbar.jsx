import {React} from 'react'
import HamburgerComponent from './HamburgerComponent'
import { Link } from "react-scroll";
import { motion } from "framer-motion"
const Navbar = () => {

  return (
    <motion.nav initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }} 
    className=' flex md:justify-around justify-between  items-center z-10  bg-slate-900 text-white top-0 sticky w-full '>
      
      <div className="logo md:h-19 h-14 cursor-pointer flex items-center justify-center">
        <img className='h-full w-full rounded-full' src="/assets/logo.webp" alt="logo" />
      </div>
      <ul className='md:flex gap-5 hidden items-center'>
        <li className='transition-all'>
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

        <li hidden>Theme</li>
        <li><a href="/assets/Resume.pdf"><button className='px-3 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></a></li>
      </ul>
      <HamburgerComponent />
    </motion.nav>
  )
}

export default Navbar
