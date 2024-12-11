import React, { useState } from 'react'
import './Portfolio.css'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Form from '../components/Form'






const Portfolio = () => {

  return (
    <div className='portfolio'>
        <h1>YOU CAN SEE MY PROJECTS BELLOW</h1>
        <Tech/>
        <Projects/>

    </div>
  )
}

export default Portfolio
