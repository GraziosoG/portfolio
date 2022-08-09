import './App.css';
import React, { useRef } from 'react'
import Greetings from "./Greetings"
import Skills from "./Skills"
import Projects from "./Projects"
import Images from "./Images"
import Articles from "./Articles"
import Footer from "./Footer"

function App() {

  const greetingsRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const articlesRef = useRef()

  function handleGreetingsClick() {
    greetingsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSkillsClick() {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectsClick() {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleArticlesClick() {
    articlesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
    <div className="navbar">
        <div className="links">
          <button onClick={handleGreetingsClick} className="navButtons">Hello</button>
          <button onClick={handleSkillsClick} className="navButtons">Skills</button>
          <button onClick={handleProjectsClick} className="navButtons">Projects</button>
          <button onClick={handleArticlesClick} className="navButtons">Articles</button>
        </div>
    </div>

    <div className="main">
      <Greetings ref = {greetingsRef}/>
      <Skills ref = {skillsRef}/>
      <Projects ref={projectsRef}/> 
      <Articles ref = {articlesRef}/>
    </div>

    <Footer/>
      
    </div>
  );
}

export default App;
