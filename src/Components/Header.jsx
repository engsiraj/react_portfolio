import React from 'react'
import Fade from 'react-reveal/Fade'
const Header = (props) => {
    return (
        <Fade>
        <>
        <header class="ms">
            <img src={props.imgsrc} alt={props.title} className="tag-img"/>
            <div className="tagline">
                <h1 className="tag-heading">{props.title}</h1>
                <p className="text">{props.content}</p>
            </div>  
        </header>     
        </>
        </Fade>
    )
}

export default Header
