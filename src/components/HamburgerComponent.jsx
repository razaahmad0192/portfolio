'use client';
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";


export default function HamburgerComponent() {
    const [open, setOpen] = useState(false)

    return <div className='md:hidden flex items-center'>
        <div className='w-[48px] h-[48px] flex items-center justify-center'>

            <FaMoon />
        </div>
        <Hamburger
            size={18}
            toggle={setOpen}
            toggled={open}
        />
        {
            open && <div className='absolute top-0 right-0 w-[60vw] h-screen p-4 text-black bg-white dark:bg-slate-900 dark:text-white'>
                <ul className='flex flex-col  gap-5'>
                    <li className='self-center'><Hamburger size={18} toggled={open} toggle={setOpen} /></li>
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
                    <li><button className='px-6 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></li>
                </ul>
            </div>
        }
    </div>
}