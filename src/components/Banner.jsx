import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Banner = () => {
  return (

    <section id="home" className="md:container md:mx-auto  flex flex-col items-center justify-around md:flex-row md:items-center md:justify-center py-10 px-4 md:gap-0 gap-5 md:h-[calc(100vh-80px)] 
    min-h-[calc(100vh-64px)]   ">
      <div className="flex flex-wrap w-full">
        <div className="w-full  flex flex-col items-center md:items-start  justify-center ">
          <span className="text-blue-500 uppercase tracking-wide font-semibold block mb-2 md:text-2xl text-lg text-center md:text-start">
            Welcome to my Portfolio
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center md:text-start text-white">
            I'm <span className='text-blue-500'>Ahmed</span> Raza{" "}
          </h1>
          <h2 className='text-xl md:text-3xl font-bold mb-4 text-indigo-500 text-center md:text-start'>
            Full Stack Developer & CyberSecurity Researcher
          </h2>
          <p className="text-gray-300 text-md text-center md:text-start">
            Building elegant solutions to complex problems with modern technologies.
          </p>
          <div className='btnss mt-3 flex items-center justify-center flex-wrap md:gap-7 gap-2.5'>

            <button className='px-3 py-2.5 bg-blue-500 rounded-lg border-0 text-black hover:bg-blue-600 font-semibold'>Contact Me</button>
            <button className='px-3 py-2 bg-black rounded-lg border-gray-100 border  text-white hover:bg-blue-600 font-semibol '>View Projects</button>

            <div className='flex items-center gap-2'>

              <FaGithub className="text-blue-500 w-9 h-9" />
              <FaLinkedin className="text-blue-500 w-9 h-9" />
              <CgMail className="text-blue-500 w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pic rounded-full ">
          <img className='rounded-full md:w-sm w-xs ' src="https://media.licdn.com/dms/image/v2/D4D03AQF1pI9qsvdTdg/profile-displayphoto-scale_200_200/B4DZlonx_pGQAY-/0/1758396885254?e=1762992000&v=beta&t=c17ZA1vEvHjdN9Z8NR0G0uAU0gVY_0QxmxzYR6ZUf9U" alt="" />
        </div> */}
      <div className="console border md:w-[60%]  p-9 flex flex-col gap-3 rounded-2xl">
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
        <div className="pl-6">

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
      </div>
    </section>


  )
}

export default Banner
