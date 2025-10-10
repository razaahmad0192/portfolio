import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
const App = () => {
  return (
    <section className='text-white'>
     
      <Navbar/>
     

      <Banner/>
      <div className='border-1 h-1 border-gray-700 shadow '></div>
      <About/>
      <div className='border-1 h-1 border-gray-700 shadow '></div>
      <Projects/>
       <div className='border-1 h-1 border-gray-700 shadow '></div>
      <Skills/>
    </section>
  )
}

export default App 
