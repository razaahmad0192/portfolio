import React from 'react'
import SkillCard from './SkillCard'
import { FaTerminal } from "react-icons/fa6";
import { SiHackerone } from "react-icons/si";
import { FiLayout } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { HiOutlineCpuChip } from "react-icons/hi2";

function Skills({Class=""}) {
    return (
        <section id='skills' className={`md:container md:mx-auto py-10 px-4 ${Class} flex flex-col gap-10`}>
            <div className='heading-about'>
                <h2 className='font-extrabold md:text-5xl text-3xl'>
                    Skills
                </h2>
                <div className='border-2 w-12 md:w-18 border-blue-500'></div>
            </div>
            <div className="sub-section flex flex-col gap-5 ">
                <p>
                    Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.
                </p>
                <div className='cardHolder grid sm:grid-cols-2  md:grid-cols-3 gap-5'>
                    <SkillCard
                        icon={<FaTerminal/>}
                        heading='Programming Languages'    
                        tech1='JavaScript'
                        tech2='C++'
                        tech3='Java'
                        tech4='TypeScript'
                    />
                    <SkillCard
                        icon={<FiLayout/>}
                        heading='Frontend Development'    
                        tech1='React.js'
                        tech2='Next.js'
                        tech3='TailwindCSS'
                        tech4='Framer Motion'
                        tech5='Figma'
                    />
                    <SkillCard
                        icon={<FaCode/>}
                        heading='Backend Development'    
                        tech1='Node.js'
                        tech2='Express.js'
                        tech3='Spring Boot'
                        tech4='REST APIs'
                    />
                        <SkillCard
                            icon={<SiHackerone/>}
                            heading='Red Teaming '    
                            tech1='Recon : Nmap'
                            tech2='Web: BurpSuite'
                            tech3='Exploitation : MetaSploit & SQLMap'
                            tech4='Vercel'
                            tech5='OSINT : Amass & Subfinder'
                        />
                    <SkillCard
                        icon={<GoDatabase/>}
                        heading='Databases'    
                        tech1='MongoDB'
                        tech2='MySQL'
                        tech3='FireBase'
                    />
                    <SkillCard
                        icon={<HiOutlineCpuChip/>}
                        heading='DevOps'    
                        tech1='Git'
                        tech2='GitHub'
                        tech3='NetLify'
                        tech4='Vercel'
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills
