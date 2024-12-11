import React from 'react'
import '../Routes/Home.css'
import laptop from '../assets/image/laptop.jpg'
import perfil from '../assets/image/perfil.png'
import Tech from '../components/Tech'

import GlobalTech from '../assets/image/global-tech.png';
import DigitalHealth from '../assets/image/digital-health.png';
import AI from '../assets/image/ai-tech.png';
import AiCity from '../assets/image/ai-city.png'
import Clock from '../components/Clock'




const Home = () => {
  return (
    <div className='home'>
      <hr />

      <div className="logos">
      <div className="logo-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
          />
          <p>React</p>
        </div>
        <div className="logo-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript Logo"
          />
          <p>JavaScript</p>
        </div>
        <div className="logo-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS Logo"
          />
          <p>CSS</p>
        </div>
        <div className="logo-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            alt="TypeScript Logo"
          />
          <p>TypeScript</p>
          </div>
          </div>
      <h2 className="my-name">Nice to meet you, <br />I'm Dryelison</h2>
        <p className="description">“Welcome to my website! I’m a web developer passionate about continuous learning and growth. Through this platform, you’ll have the opportunity to explore some of my work, see the projects I’ve created, and get to know a bit more about me and my journey. Feel free to explore, and thank you for visiting!”</p>
      <div className="image">
        <img src={laptop} alt="" />
        <div className="circle-image">
        <img src={perfil} alt="" />
        </div>
      </div>
      <div className="cv">
        <a href="/download/cv-d-souza.pdf" download="cv-d-souza.pdf" className='download-button'>Download my CV</a>
      </div>
      <Tech/>
           {/* Nova seção de tópicos tecnológicos */}
           <div className="topics">
        <h3>Technology Insights</h3>
        <div className="topics-grid">
          <div className="topic-item">
            <img src={GlobalTech} alt="Global Technology" />
            <h4>Global Connectivity</h4>
            <p>
              Technology connects the world, breaking barriers and enabling seamless communication across borders.
            </p>
          </div>
          <div className="topic-item">
            <img src={DigitalHealth} alt="Digital Health" />
            <h4>Digital Health</h4>
            <p>
              Advancements in digital health are revolutionizing patient care with real-time monitoring and personalized medicine.
            </p>
          </div>
          <div className="topic-item">
            <img src={AI} alt="Artificial Intelligence" />
            <h4>Artificial Intelligence</h4>
            <p>
              AI is driving innovation, from automating tasks to powering breakthroughs in machine learning and neural networks.
            </p>
          </div>
          <div className="topic-item">
            <img src={AiCity} alt="Artificial City" />
            <h4>Artificial Intelligence and Machine Learning</h4>
            <p>
            AI will continue to evolve, From autonomous vehicles to precise medical diagnostics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
