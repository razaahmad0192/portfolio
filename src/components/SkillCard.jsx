import React from 'react'
import { FaTerminal } from "react-icons/fa6";
import MotionCard from './MotionCard';

function SkillCard({
  heading = "",
  icon = "",
  tech1 = "",
  tech2 = "",
  tech3 = "",
  tech4 = "",
  tech5 = "",
  tech6 = "",
  tech7 = ""
}) {
  return (
    <>
    <MotionCard>
    <div className='border rounded-2xl p-5 flex flex-col gap-8 w-full min-h-50'>
      <h2 className='flex items-center gap-3 font-semibold text-xl'>
        <span className='text-blue-500'>
          {icon}
        </span>
        <span>{heading}
        </span></h2>
      <div className='flex gap-2 flex-wrap '>
       {tech1 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech1}</span>}
       {tech2 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech2}</span>}
       {tech3 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech3}</span>}
       {tech4 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech4}</span>}
       {tech5 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech5}</span>}
       {tech6 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech6}</span>}
       {tech7 && <span className='px-2 py-1  border rounded-full border-gray-600'>{tech7}</span>}
      

      </div>
    </div>
   </MotionCard>
    </>

  )
}

export default SkillCard
