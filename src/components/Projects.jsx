import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);


    return (
        <section className='md:container md:mx-auto py-10 px-4  flex flex-col gap-10'>
            <div className='heading-about'>
                <h2 className='font-extrabold md:text-5xl text-3xl'>
                    Projects
                </h2>
                <div className='border-2 w-18 border-blue-500'></div>
            </div>
            <div className="sub-section flex flex-col gap-5 ">
                <p>
                    Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.
                </p>
                <div className='project-cards grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
                    <ProjectCard
                        thumbnail='/assets/spotify.png'
                        name='Spotify - Media Player'
                        disc='A dynamic music player that reads songs directly from a local directory and plays them with full controls. Built with JavaScript, it mimics Spotify’s interface with playlist handling, progress tracking, and responsive design.'
                        isGithub={true}
                        githubLink='https://github.com/razaahmad0192/Spotify-Clone'

                        tech1='Html'
                        tech2='CSS'
                        tech3='Vanilla JavaScript'
                    />
                    <ProjectCard
                        thumbnail='/assets/netflix.PNG'
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
                        thumbnail='/assets/todo.PNG'
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
                </div>
                {/* Hidden Cards */}
                <div className={`${showAll ? 'grid' : 'hidden'}  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5`}> 
                    <ProjectCard
                        thumbnail='/assets/x.PNG'
                        name='X - Tweet Page'
                        disc='A modern Twitter-style interface built with Tailwind CSS. Features a clean, responsive design that replicates the tweet posting layout, showcasing UI precision and styling skills using utility-first CSS.'
                        isGithub={true}
                        githubLink='https://github.com/razaahmad0192/X-Clone-Twitter'
                        isLive = {true}
                        liveLink='https://clone-twitter-x.netlify.app/'
                        tech1='Html'
                        tech2='CSS'
                        tech3='Tailwind-CSS'
                    />
                </div>
                {/* Button */}
                <div className='flex justify-center mt-6'>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
                    >
                        {showAll ? (<div className='flex items-center gap-2'>Show Less <MdExpandLess/></div>) :  (<div className='flex items-center gap-2'>Show More <MdExpandMore/></div>)}
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Projects
