import React from 'react'
import { FcAbout } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";


const About = () => {
    return (
        <section className='md:container md:mx-auto py-10 px-4  flex flex-col gap-10'>

            <div className='heading-about'>
                <h2 className='font-extrabold md:text-5xl text-3xl'>
                    About Me
                </h2>
                <div className='border-2 w-24 border-blue-500'></div>
            </div>
            <div className="about  w-full flex md:flex-row  md:justify-center  flex-col  md:items-start justify-center ">


                <div className='md:w-[75%] w-full gap-4 flex flex-col px-3  '>
                    <div className="bio  px-4 py-5.5">
                        <h4 className='flex md:text-3xl items-center gap-2'>
                            <FcAbout className='w-9 h-9' />

                            Bio
                        </h4>
                        <p className='pt-2 text-sm'>
                            I'm a self-taught <b>Web Developer</b> and <b>Ethical Hacker</b> with experience in designing and developing high-performance applications, from ideation to production. <br />
                            Alongside development, I specialize in penetration testing, identifying and mitigating vulnerabilities in web applications to ensure secure deployments. <br />
                            I love combining design, technology, and cybersecurity to build solutions that are not only functional but also resilient. <br />
                            Currently, my focus is on backend development and web application security.
                        </p>
                    </div>

                    <div className="Edu&Exp  gap-3 px-3 py-4 grid md:grid-cols-3 grid-cols-1  ">
                         {/* flex md:flex-row md:justify-between  md:items-start
                    flex-col */}

                        <div className='EDU px-4 py-5.5 flex flex-col justify-start gap-5 w-full bg-amber-900 m3 border min-h-60 rounded-2xl'>
                            <h3 className='text-2xl font-bold '>
                                Education
                            </h3>
                            <div className='flex flex-col gap-4'>

                                <h4 className='text-xl font-semibold'>
                                    BSCS in Computer Science
                                </h4>
                                <p className='flex flex-col gap-2 text-gray-400'>
                                    <span>UCP (University of Central Punjab, Gujranwala)</span>
                                    <span>2024 - Present</span>
                                </p>
                            </div>
                        </div>
                        <div className='EXP px-4 py-5.5 flex flex-col justify-start gap-5 items-star border  h-full w-full   min-h-60 rounded-2xl'>
                            <h3 className='text-2xl font-bold '>
                                Experience
                            </h3>
                            <div className='flex flex-col gap-4'>

                                <h4 className='text-xl font-semibold'>
                                    Penetration Tester
                                </h4>
                                <p className='flex flex-col gap-2 text-gray-400'>
                                    <span>HackerOne</span>
                                    <span>2021 - 2023</span>
                                </p>
                            </div>
                        </div>
                        <div className='EXP px-4 py-5.5 flex flex-col justify-start gap-5 items-star border  h-full w-full  min-h-60 rounded-2xl'>
                            <h3 className='text-2xl font-bold '>
                                Experience
                            </h3>
                            <div className='flex flex-col gap-4'>

                                <h4 className='text-xl font-semibold'>
                                    Web Developer 
                                </h4>
                                <p className='flex flex-col gap-2 text-gray-400'>
                                    <span>FreeLance </span>
                                    <span>Since Nov 2024 - Present</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='md:w-[25%] sm:w-[60%] w-[100%] mx-auto  flex flex-col gap-4 p-4'>
                    <div className="dp">
                        <img className='w-full rounded-full ' src="/assets/pic.jpg" alt="" />
                    </div>
                    <div className='name&profession'>
                        <h2 className='font-bold text-2xl'>
                            Ahmed Raza
                        </h2>
                        <span className='text-gray-300'>Computer Science Student</span>
                    </div>
                    <div className='text-xs'>
                        <span className='px-2 rounded-full border py-0.5 bg-gray-900 border-gray-500'>React</span>
                        <span className='px-2 rounded-full border py-0.5 bg-gray-900 border-gray-500'>Node</span>
                        <span className='px-2 rounded-full border py-0.5 bg-gray-900 border-gray-500'>MongoDb</span>
                        <span className='px-2 rounded-full border py-0.5  bg-gray-900 border-gray-500'>Full Stack</span>
                    </div>
                    <button className='flex gap-2 text-black bg-blue-500 px-4 py-3 items-center rounded-xl'>
                        <FiDownload />
                        <span>

                            Download Resume
                        </span>
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default About
