import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="main_card">
      <img src='./src/assets/BiggerLinkedInPic.jpg'></img>
      <main>
        <h1>Jeremy Taraba</h1>
        <h3>Software Developer</h3>
        <p>jeremytaraba.github.io</p>
        <button className="email_button"><MdEmail /> Email</button>
        <button className="linkedin_button"><FaLinkedin /> LinkedIn</button>
        <h2>About</h2>
        <p>I am a software developer who recently moved to New York City. I love working on innovative and challenging projects.</p>
        <h2>Interests</h2>
        <p>
          Coding. Technology. Web Dev.
        </p>
      </main>
      
      

      </div>
      <footer>
        <button><FaTwitter /></button>
        <button><FaFacebook /></button>
        <button><FaInstagram /></button>
        <button><FaGithub /></button>
      </footer>
    </div>
  )
}

export default App
