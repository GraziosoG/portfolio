import React from "react";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import './styles/Articles.css';
import showcase from './assets/showcase.jpg'

const Articles = React.forwardRef((props, ref) => {
    return (
        <div className="articles" ref={ref}>
            <h2 className="articleTitle">Articles</h2>

            <div className="articleItem">
                <a className="articleLink" href="https://rgkcenter.org/news/mapping-campus-mental-health-resources-texas">
                <h3 className="articleSubtitle">Mapping Campus Mental Health Resources in Texas <BsBoxArrowUpRight/></h3></a>
                <span className="articleDate">May 27, 2022</span>
                <p className="articleExp">
                    I was interviewed and displayed on the UT Austin RGK Center News page for my <b>CONNECT project 
                    on a data collection and summarization effort</b> for Young Invincibles to investigate 
                    the mental health landscape in higher education institutions in Texas. 
                </p>
            </div>     
            
            <div className="articleItem">
                <a className="articleLink" href="https://lbj.utexas.edu/connect-community-showcase-celebrates-program-impact-community">
                <h3 className="articleSubtitle">CONNECT Community Showcase celebrates program impact in the community <BsBoxArrowUpRight/></h3></a>
                <span className="articleDate">May 3, 2022</span>
                <p className="articleExp">
                    The news article highlights the first-ever CONNECT project showcase held on April 21, 2022 and 
                    the recognition of me winning the Community Choice Award.
                </p>
            </div>

            <div className="articleImages">
                <img className="articleImg" src={showcase} width="440" height="264" alt="showcase"></img>
            </div>
            
                     
        </div>
    )
})

export default Articles;