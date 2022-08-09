import React from "react";
import './styles/Images.css';
import grad from './assets/grad.JPG'
import bbq from './assets/bbq.JPG'

const Images = React.forwardRef((props, ref) => {
    return (
        <div className="images" ref={ref}>
            <img className="img" src={bbq} height="264" alt="eating BBQ"></img>
            <img className="img" src={grad} width="264" alt="graduation"></img>
        </div>
    )
})

export default Images;