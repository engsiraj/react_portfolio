import React from 'react'
import { FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const Project = (props) => {
   
  return (
      <Fade>
      <>
        <div className="project-main">
          <img className="project-image" src ={props.imgscr} alt={props.name}/>
          <div className="project-bg">
              <div className="project-content">
                <p className="text-bold">{props.tag}</p>
                <h2 className="heading">{props.name}</h2>
                <p className="text">{props.text}</p>
                <a href= {props.link1} target="_blank" ><FaCodeBranch size={15} style={{ margin: '10px 20px 20px 0px ', fill: 'black' }} /></a>
                 <a href= {props.link2} target="_blank"><FaExternalLinkAlt size={15} style={{ margin: '10px 20px 20px 0px ', fill: 'black' }} /></a>
              </div>
          </div>
        </div>
      </>
      </Fade>   
    )
}

export default Project
