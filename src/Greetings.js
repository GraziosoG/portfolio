import React from "react";
import './styles/Greetings.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Greetings = React.forwardRef((props, ref) => {
    return (
        <div className="greetings" ref={ref}>
            <h2 className="greetingsTitle"><span>Hi, I'm Grace.</span> <span>How's your day?</span></h2>
            <p className="greetingsIntro">Never Ending Curiousity and Learning, <br></br>Problem Solving, and Creation</p>
            <span className="greetingsLink"><a href="https://www.linkedin.com/in/gracechiu-ut/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a><a href="mailto:grace.chiu25@utexas.edu"><FiMail /></a><a href="https://github.com/GraziosoG?tab=repositories" target="_blank" rel="noopener noreferrer"><BsGithub /></a></span>
        </div>
    )
})

export default Greetings;