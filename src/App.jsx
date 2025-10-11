import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LazyComponent from './components/LazyComponent'
import ScrollComponent from './components/ScrollComponent'
const App = () => {
  return (
    <div className='text-white '>
      <ScrollComponent/>

      <Navbar />
      <Banner />


      <div className='border-1 h-1 border-gray-700 shadow '></div>{/** Separator */}
      
      <div className='min-h-screen flex items-center justify-center'>
        <About />
      </div>

      <div className='border-1 h-1 border-gray-700 shadow '></div> {/** Separator */}

      <div className='min-h-screen flex items-center justify-center '>

        <Projects />
      </div>
      <div className='border-1 h-1 border-gray-700 shadow '></div>{/** Separator */}


      <div className='min-h-screen flex items-center justify-center'>

        <Skills />
      </div>



      <div className='border-1 h-1 border-gray-700 shadow '></div>




      <div className='min-h-screen flex items-center justify-center'>
        <Contact />
      </div>
    </div>
  )
}

export default App 
