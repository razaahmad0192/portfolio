import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);


    return (
        <section id='projects' className='md:container md:mx-auto py-10 px-4  flex flex-col gap-10'>
            <div className='heading-about'>
                <h2 className='font-extrabold md:text-5xl text-3xl'>
                    Projects
                </h2>
                <div className='border-2 md:w-18 w-12 border-blue-500'></div>
            </div>
            <div className="sub-section flex flex-col gap-5 ">
                <p>
                    Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.
                </p>
                <div className='wrapping-projects   border-white  xl:px-25 flex flex-col gap-5'>


                    <div className='project-cards grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
                        <ProjectCard
                            thumbnail='/assets/fitlinks.webp'
                            name='FitLinks — Fast URL Shortener'
                            disc='FitLinks is a clean and fast URL shortener that allows users to create short, custom links easily. It features a simple and responsive dashboard for managing URLs and supports custom aliases. Built for reliability, speed, and simplicity.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/link-shortener'
                            isLive={true}
                            liveLink='https://fitlinks-url.vercel.app/'
                            tech1='Next.js'
                            tech2='Tailwind'
                            tech3='MongoDb'
                            tech4='Framer-Motion'
                        />
                        <ProjectCard
                            thumbnail='/assets/school.webp'
                            name='Modern Educational Institute Website'
                            disc='A responsive school website built for "Sial English Public School" using React and Tailwind. It feature sections for programs, admissions, Islamic education, contact form and an Integrated Google Map for location.'
                            // isGithub={false}
                            // githubLink='https://github.com/razaahmad0192/Spotify-Clone'
                            isLive={true}
                            liveLink='https://sialschool.vercel.app/'
                            tech1='React'
                            tech2='Tailwind'
                        />
                         <ProjectCard
                            thumbnail='/assets/locksafe.webp'
                            name='LockSafe - Digital Password Manager'
                            disc='A fullstack password manager called Locksafe built with React and Express. It offers signup login system, secure password storage with encryption, autofill support, data backup, and activity tracking.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/password-manager'
                            // isLive={true}
                            // liveLink='https://sialschool.vercel.app/'
                            tech3='React.js'
                            tech2='Express'
                            tech1='MongoDB'
                            tech4='Node.js'
                        />
                        
                       
                        

                    </div>
                    {/* Hidden Cards */}
                    <div className={`${showAll ? 'grid' : 'hidden'}  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5`}>
                        <ProjectCard
                            thumbnail='/assets/todo.webp'
                            name='iTask - ToDo List Manager'
                            disc='A simple and responsive task manager built with React and TailwindCSS. Users can add, edit, delete, and mark tasks as complete, with data saved in local storage for persistence. Tasks of user will remain saved in Browser.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/todoList'
                            isLive={true}
                            liveLink='https://itask-todo-list.netlify.app/'
                            tech1='React'
                            tech2='Tailwind-CSS'
                            tech3='Framer-Motion'

                        />
                        <ProjectCard
                            thumbnail='/assets/spotify.webp'
                            name='Spotify - Media Player'
                            disc='A dynamic music player that reads songs directly from a local directory and plays them with full controls. Built with JavaScript, it mimics Spotify’s interface with playlist handling, progress tracking, and responsive design.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/Spotify-Clone'

                            tech1='Html'
                            tech2='CSS'
                            tech3='Vanilla JavaScript'
                        />
                         <ProjectCard
                            thumbnail='/assets/netflix.webp'
                            name='Netflix - Landing Page '
                            disc='A responsive front-end clone of Netflix’s homepage built with HTML, CSS, and Vanilla JavaScript. Features smooth animations, interactive UI elements, and a modern layout inspired by the original design.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/Netflix-Clonee'
                            isLive={true}
                            liveLink='https://netflis-landing-page.netlify.app/'
                            tech1='Html'
                            tech2='CSS'
                            tech3='Vanilla JavaScript'
                        />
                        <ProjectCard
                            thumbnail='/assets/x.webp'
                            name='X - Tweet Page'
                            disc='A modern Twitter-style interface built with Tailwind CSS. Features a clean, responsive design that replicates the tweet posting layout, showcasing UI precision and styling skills using utility-first CSS.'
                            isGithub={true}
                            githubLink='https://github.com/razaahmad0192/X-Clone-Twitter'
                            isLive={true}
                            liveLink='https://clone-twitter-x.netlify.app/'
                            tech1='Html'
                            tech2='CSS'
                            tech3='Tailwind-CSS'
                        />
                    </div>
                </div>
                {/* Button */}
                <div className='flex justify-center mt-6'>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
                    >
                        {showAll ? (<div className='flex items-center gap-2'>Show Less <MdExpandLess /></div>) : (<div className='flex items-center gap-2'>Show More <MdExpandMore /></div>)}
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Projects
