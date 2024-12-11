import React from 'react'
import '../components/Footer.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>FOLLOW ME</h4>
      <div className="social-icons">
        <span>
        <a href="https://www.instagram.com/dryelison/profilecard/?igsh=aHE2M2IyZ25uMHhu"
        target='_blank' rel='noopener noreferrer'>
          <FaInstagram size={24}/>
        </a>
        </span>
        <a href="https://www.linkedin.com/in/dryelison-felipe-500092247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="direitos">
      <p>© 2024 Dryelison Souza. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
