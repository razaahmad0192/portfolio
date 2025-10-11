import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import MotionButton from "./MotionButton";
import HeroWrapper from "./HeroWrapper";
import Writer from "./Writer";
const Banner = () => {
  return (
    <>


      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="home" className="md:container md:mx-auto  flex flex-col items-center justify-around md:flex-row md:items-center md:justify-center py-10 px-4 md:gap-0 gap-5 md:h-[calc(100vh-80px)] 
    min-h-[calc(100vh-64px)]   ">
        <div className="flex flex-wrap w-full">
          <div className="w-full  flex flex-col items-center md:items-start  justify-center ">
            <span className="text-blue-500  tracking-wide font-semibold block mb-2 md:text-2xl text-lg text-center md:text-start">
              Hello I'm
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center md:text-start ">
              Ahmed{" "}<span className='text-blue-500'>Raza</span>
            </h1>
            <h2 className='text-xl md:text-4xl font-bold mb-4 text-indigo-500 text-center md:text-start'>
              <Writer
                words={[
                  "Full Stack Developer...",
                  "Frontend Engineer...",
                  "Ethical Hacker..."
                ]}

              />
            </h2>
            {/* <h2 className='text-xl md:text-3xl font-bold mb-4 text-indigo-500 text-center md:text-start'>
              Full Stack Developer & CyberSecurity Researcher
            </h2> */}
            <p className="dark:text-gray-300 text-gray-500 md:text-lg text-sm text-center md:text-start">
              Building elegant solutions to complex problems with modern technologies.
            </p>
            <div className='btnss mt-3 flex items-center justify-center flex-wrap md:gap-7 gap-2.5'>
              <MotionButton>
                <button className='px-3 py-2.5 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600 font-semibold'>
                  <Link
                    to="contact"          // same as id in your section
                    smooth={true}      // enables smooth scrolling
                    duration={700}     // scroll speed in ms
                    spy={true}         // highlights link when section in view (optional)
                    offset={-70}>
                    Contact Me</Link>
                </button>
              </MotionButton>
              <MotionButton>

                <button className='px-3 py-2 bg-black rounded-lg border-gray-100 border  text-white hover:bg-blue-600 font-semibol '>
                  <Link
                    to="projects"          // same as id in your section
                    smooth={true}      // enables smooth scrolling
                    duration={700}     // scroll speed in ms
                    spy={true}         // highlights link when section in view (optional)
                    offset={-70}>
                    View Projects
                  </Link>
                </button>
              </MotionButton>

              <div className='flex items-center gap-2'>
                <a target="_blank" href="https://github.com/razaahmad0192">
                  <MotionButton>

                    <FaGithub className="text-blue-500 w-9 h-9 cursor-pointer hover:text-blue-600 " />
                  </MotionButton>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ahmed-raza-239b21237/">
                  <MotionButton>

                    <FaLinkedin className="text-blue-500 w-9 h-9 cursor-pointer hover:text-blue-600 " />
                  </MotionButton>
                </a>

              </div>
            </div>
          </div>
        </div>
        {/* <div className="pic rounded-full ">
          <img className='rounded-full md:w-sm w-xs ' src="https://media.licdn.com/dms/image/v2/D4D03AQF1pI9qsvdTdg/profile-displayphoto-scale_200_200/B4DZlonx_pGQAY-/0/1758396885254?e=1762992000&v=beta&t=c17ZA1vEvHjdN9Z8NR0G0uAU0gVY_0QxmxzYR6ZUf9U" alt="" />
        </div> */}
        <HeroWrapper>

          <motion.div className="console border md:w-[70%]  md:p-9 p-4  flex flex-col gap-3 rounded-2xl">
            <div className="flex justify-between min-h-5 ">

              <div className="flex gap-1.5 ">
                <div className="rounded-full bg-red-500 w-3 h-3"></div>
                <div className="rounded-full bg-yellow-400 w-3 h-3"></div>
                <div className="rounded-full bg-green-400 w-3 h-3"></div>
              </div>
              <span className="text-gray-500 text-sm" >developer.js</span>
            </div>
            <h4 className="text-gray-500">//Software Engineer</h4>
            <p>
              <span className="text-pink-600">const </span><span className="text-blue-600">developer </span><span className="text-gray-500"> = </span> <span className="text-orange-500">{"{"}</span>
            </p>
            <div className="pl-6 ">

              <p>
                <span className="text-purple-600">name</span><span className="text-gray-500"> : </span><span className="text-green-600">'Ahmed Raza' </span><span className="text-gray-500">,</span>
              </p>
              <p>
                <span className="text-purple-600">skills </span><span className="text-gray-500"> : </span><span className="text-orange-500">[</span><span className="text-green-600"> 'React'</span><span className="text-gray-500">, </span><span className="text-green-600"> 'Node.js'</span><span className="text-gray-500">, </span><span className="text-green-600"> 'Express.js'</span><span className="text-gray-500">, </span><span className="text-green-600"> ' MongoDb ' </span><span className="text-orange-500"> ] </span><span className="text-gray-500"> , </span>
              </p>
              <p>
                <span className="text-purple-600">focuses </span><span className="text-gray-500"> : </span><span className="text-orange-500">[</span><span className="text-green-600"> 'Full-Stack'</span><span className="text-gray-500">, </span><span className="text-green-600"> 'UI/UX'</span><span className="text-gray-500">, </span><span className="text-green-600"> 'CyberSecurity'</span><span className="text-gray-500">, </span><span className="text-orange-500"> ] </span><span className="text-gray-500"> , </span>
              </p>
              <p>
                <span className="text-purple-600">learningAlways</span><span className="text-gray-500"> : </span><span className="text-green-600">true</span>
              </p>
            </div>
            <p>
              <span className="text-orange-500">{"}"}</span><span className="text-gray-500">;</span>
            </p>
          </motion.div>
        </HeroWrapper>
      </motion.section>

    </>
  )
}

export default Banner
