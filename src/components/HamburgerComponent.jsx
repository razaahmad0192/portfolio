'use client';
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { FaMoon } from "react-icons/fa";


export default function HamburgerComponent() {
    const [open, setOpen] = useState(false)
    
    return <div className='md:hidden flex items-center'>
        <div className='w-[48px] h-[48px] flex items-center justify-center'>

        <FaMoon/>
        </div>
        <Hamburger
            size={18}
            toggle={setOpen}
            toggled={open}
        />
        {
            open && <div className='absolute top-0 right-0 w-[60vw] h-screen p-4 text-black bg-white dark:bg-slate-900 dark:text-white'>
                <ul className='flex flex-col  gap-5'>
                    <li className='self-center'><Hamburger size={18} toggled={open} toggle={setOpen}/></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                    <li><button className='px-6 py-2 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600'>Resume</button></li>
                </ul>
            </div>
        }
    </div>
}