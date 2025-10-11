import React from 'react'
import { FaGithub } from "react-icons/fa";
import MotionCard from './MotionCard';
function ProjectCard({
    thumbnail = "",
    name = "",
    disc = "",
    tech1 = "",
    tech2 = "",
    tech3 = "",
    tech4 = "",
    isGithub = false,
    githubLink = "",
    isLive = false,
    liveLink = "",


}) {
    return (
        <>
      <MotionCard>
      
        <div className='border md:min-h-110 min-h-115 flex flex-col gap-5 p-3 bg-gray-900 rounded-xl  '>
            <div className="thumbNail w-full h-80   ">
                <img className='object-cover w-full h-full rounded-t-2xl' loading='lazy' src={`${thumbnail}`} alt="thumbnail" />
            </div>
            <div className='flex flex-col gap-3 '>
                <h2 className='font-medium text-xl text-white  '>{`${name}`}</h2>
                <p className='font-normal text-xs md:text-sm text-gray-300 '>
                    {`${disc}`}
                </p>
                <div className='text-xs flex gap-1.5 text-white'>
                    {tech1 && <span className='border px-2 py-1 rounded-full'>{`${tech1}`}</span>}
                    {tech2 && <span className='border px-2 py-1 rounded-full'>{`${tech2}`}</span>}
                    {tech3 && <span className='border px-2 py-1 rounded-full'>{`${tech3}`}</span>}
                    {tech4 && <span className='border px-2 py-1 rounded-full'>{`${tech4}`}</span>}
                </div>
                <div className='flex gap-2 justify-between '>

                    {
                        isGithub && <a
                            href={`${githubLink}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className='px-3 py-2 bg-black rounded-lg border-gray-100 border flex items-center gap-1  text-white hover:bg-blue-800 font-semibol '>

                                <span><FaGithub /></span> <span>GitHub</span>

                            </button>
                        </a>
                    }
                    {
                        isLive && <a
                            href={`${liveLink}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className='px-3 py-2 bg-black rounded-lg border-gray-100 border flex items-center gap-1  text-white hover:bg-blue-800 font-semibol '>

                                <span>Live Preview</span>
                            </button>
                        </a>
                    }
                </div>
            </div>

        </div>
          </MotionCard>
          </>
    )
}

export default ProjectCard
