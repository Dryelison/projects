import React, { useState } from 'react'
import '../Routes/About.css'
import Tech from '../components/Tech'
import perfil from '../assets/image/perfil.png'


const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  }

  const fullText = ['From an early age, I have always been passionate about technology and computers. When I finished high school, my father, with great effort, made one of my first dreams come true: he bought me a cybercafé in 2008. At that time, many people still didn’t have computers at home, and being able to provide that service was incredible.',
    'My cybercafé had around 15 computers, where people came to browse the internet or play online games. It was a period of great learning. During this time, I took a course in computer assembly and maintenance, and I quickly learned how to fix, replace parts, install software, configure networks, and perform all kinds of technical tasks. I felt completely at home in the world of computers.',
    'However, as with all technology, times changed. Owning a computer at home started to become a reality for many people. After a little over a year with the cybercafé, I realized it was time to take a new path.',
    'I decided to pursue a Law degree and graduated in 2015. I worked as a lawyer for 8 years, a period full of challenges and learning. However, I felt that something was missing. I wasn’t fully satisfied with my career.',
    'In 2022, I decided to take a bold step: my wife and I embarked on an exchange program in Ireland. It was here that I reconnected with technology and realized how much I missed working with what I have always loved. I decided to change my career and dove headfirst into the world of programming.',
    'Since then, I have been studying programming full-time, dedicating myself to learning and building new skills. I have completed several courses in development and am currently pursuing a postgraduate degree in Software Engineering. I am passionate about front-end development and am eagerly seeking an opportunity to apply my knowledge and grow professionally in this field.'];

  const truncatedText = fullText[0].slice(0, 400) + '...';


  return (
    <div className='about'>
      <div className="about-me">
        <hr />
      </div>
      <h4>ABOUT ME</h4>
      {isExpanded
        ? fullText.map((text, index) => <p key={index}>{text}</p>) // Exibe texto completo
        : <p>{truncatedText}</p>}
      <button onClick={toggleText}>{!isExpanded ? "More" : "Less"}</button>
    <Tech/>
      <div className="logo">
        <img src={perfil} alt="coging" />
      </div>
      <div className="steve">
        <p>“Innovation is the ability to see change as an opportunity, not a threat.”</p>
        <p>– Steve Jobs.</p>
      </div>
    </div>

  )
}

export default About
