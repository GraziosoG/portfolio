import React from "react";
import './styles/Skills.css';

const Skills = React.forwardRef((props, ref) => {
    return (
        <div className="skills" ref={ref}>
            <h2 className="skillsTitle">Skills</h2>
    
            <div className="skillsItem">
                <h2 className="skillsSubtitle">Languages</h2>
                <p className="skillsList">Python, React, JavaScript, SQL, NoSQL, Kotlin, Java, NodeJS, R, HTML, CSS, PHP</p>
            </div>
    
            <div className="skillsItem">
                <h2 className="skillsSubtitle">Technical Skills</h2>
                <p className="skillsList">CI/CD, Azure, Agile Development, Git, Rest APIs, Pandas, NumPy, Scikit-learn, Excel</p>
            </div>
            
        </div>
    )
})

export default Skills;