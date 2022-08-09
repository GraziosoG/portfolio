import React from "react";
import './styles/Projects.css';
import wordAssemblyPNG from './assets/word-assembly.PNG'
import metroFarePNG from './assets/metro-fare.PNG'
import iotAndroidPNG from './assets/iot-android.PNG'

const Articles = React.forwardRef((props, ref) => {
    return (
        <div className="projects" ref={ref}>
            <h2 className="projectsTitle">Projects</h2>

            <div className="projectItem">
                <img className="imgLeft" src={wordAssemblyPNG} width="440" height="264" alt="game mochila home page"></img>
                <div className="projectDescRight">
                    <h3 className="projectSubtitle">Game Mochila </h3>
                    <a className="projectView" href="https://graziosog.github.io/game-mochila/" target="_blank" rel="noopener noreferrer">Try Now</a>
                    <a className="projectRepo" href="https://github.com/GraziosoG/game-mochila" target="_blank" rel="noopener noreferrer">Repo</a>
                    <div className="projectExp">
                        <p>A collection of two games where I led the entire development cycle from ideation, development, 
                        to production, using Git, PR reviews, and Heroku CI/CD. </p>
                        <p><b>Word Assembly</b> is a game where the app generates categories and letters, and players have to make words for each letter and category. </p>
                        <p><b>LocateMe</b> is where users guess and denote on the map where they think a random point on streetview is, 
                        and the closest person wins. </p>
                    </div>
                    <span className="projectTools">React, CSS, NodeJS, Heroku CI/CD, and MapBox APIs</span>
                </div>             
            </div>     
            
            <div className="projectItem">
                <img className="imgRight" src={metroFarePNG} width="440" height="264" alt="taipei metro fare page"></img>
                <div className="projectDescLeft">
                    <h3 className="projectSubtitle">Taipei Metro Fare </h3>
                    <a className="projectView" href="https://graziosog.github.io/taipei-metro-fare/mrt.html" target="_blank" rel="noopener noreferrer">Try Now</a>
                    <a className="projectRepo" href="https://github.com/GraziosoG/taipei-metro-fare" target="_blank" rel="noopener noreferrer">Repo</a>
                    <div className="projectExp">
                        <p>Using the API that I created to retrieve ticket prices, this app evaluates if the 
                        monthly metro ticket is an economical option for you based on your monthly metro usage input.</p> 
                        <p>This app supports three different kinds of fare prices just like the official website.</p>
                    </div>
                    <span className="projectTools">Python, Flask, HTML, CSS, JavaScript, Rest APIs</span>
                </div>               
            </div> 

            <div className="projectItem">
                <img className="imgLeft" src={iotAndroidPNG} width="440" height="264" alt="IoT Android project"></img>
                <div className="projectDescRight">
                    <h3 className="projectSubtitle">Healthy Steps IoT </h3>
                    <a className="projectView" href="https://www.youtube.com/watch?v=h8WYUr-mE54" target="_blank" rel="noopener noreferrer">View Now</a>
                    <a className="projectRepo" href="https://github.com/GraziosoG/emerg-tech-f21" target="_blank" rel="noopener noreferrer">Repo</a>
                    <div className="projectExp">
                        <p>I developed a Kotlin Android app to show whether daily step goals are achieved based on input from Micro Bit step counter and weather API.</p>
                        <p>I utilized MQTT protocol to facilitate communication between Micro Bit step counter, Raspberry Pi server, and Android client through publishing 
                        and subscribing to topics. </p>
                    </div>
                    <span className="projectTools">Kotlin, Python, and OpenWeather API</span>
                </div>             
            </div>
                     
        </div>
    )
})

export default Articles;