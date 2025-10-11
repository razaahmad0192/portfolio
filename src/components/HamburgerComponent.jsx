'use client';
import { useState,useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";


export default function HamburgerComponent() {
    const [open, setOpen] = useState(false)

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100); // small delay for smooth entry
    }, []);

    return <div className='md:hidden flex items-center'>
        <div  className='w-[48px] h-[48px] flex items-center justify-center'>

           {" "}
        </div>
        <Hamburger
            size={18}
            toggle={setOpen}
            toggled={open}
        />
        {
            open && <div className={`absolute top-15 left-0 w-[100vw]   p-4 text-black bg-white dark:bg-slate-900 dark:text-white
                 `}>
                <ul className='flex flex-col  gap-5'>
                    <li hidden className='self-center'><Hamburger size={18} toggled={open} toggle={setOpen} /></li>
                    <li>
                        <Link
                            to="home"          // same as id in your section
                            smooth={true}      // enables smooth scrolling
                            duration={700}     // scroll speed in ms
                            spy={true}         // highlights link when section in view (optional)
                            offset={-70}       // optional, adjusts for navbar height
                        ><button className='w-full'>Home</button> </Link>
                    </li>
                    <li>
                        <Link
                            to="about"          // same as id in your section
                            smooth={true}      // enables smooth scrolling
                            duration={700}     // scroll speed in ms
                            spy={true}         // highlights link when section in view (optional)
                            offset={-70}       // optional, adjusts for navbar height
                        ><button className='w-full'>About</button> </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"          // same as id in your section
                            smooth={true}      // enables smooth scrolling
                            duration={700}     // scroll speed in ms
                            spy={true}         // highlights link when section in view (optional)
                            offset={-70}       // optional, adjusts for navbar height
                        ><button className='w-full'>Projects</button> </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"          // same as id in your section
                            smooth={true}      // enables smooth scrolling
                            duration={700}     // scroll speed in ms
                            spy={true}         // highlights link when section in view (optional)
                            offset={-70}       // optional, adjusts for navbar height
                        ><button className='w-full'>Skills</button> </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"          // same as id in your section
                            smooth={true}      // enables smooth scrolling
                            duration={700}     // scroll speed in ms
                            spy={true}         // highlights link when section in view (optional)
                            offset={-70}       // optional, adjusts for navbar height
                        ><button className='w-full'>Contact</button> </Link>
                    </li>
                    <li><a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer"><button className='w-full px-6 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></a></li>
                </ul>
            </div>
        }
    </div>
}