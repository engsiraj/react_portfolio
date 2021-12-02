import React from 'react'
import { FaBootstrap} from 'react-icons/fa';
import { DiHtml5,DiCss3Full } from "react-icons/di";
import { GrReactjs,GrFirefox } from "react-icons/gr";
import { SiJavascript, SiMaterialui, SiTailwindcss, SiVisualstudiocode, SiAtom, SiGooglechrome, SiGithub, SiPython, SiTrello, SiCoffeescript } from "react-icons/si";
import Fade from 'react-reveal/Fade';
const About = (props) => {
    return (
        <Fade>
        <>
         <div className="about">
            <div className="about-content">
                <h1 className="heading">{props.heada}</h1>
                <p className="text">{props.txta}</p>
                <h1 className="heading">{props.headb}</h1>
                <p className="text">{props.txtb}</p>
            </div>
            <div className="tech-stack">
                <h1 className="heading">{props.toolshead}</h1>
                <div className="social-grid">
                    <GrReactjs size={30} style={{ margin: '10px 20px 20px 10px ', fill: 'black' }} />
                    <SiJavascript size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <DiHtml5 size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <DiCss3Full size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiPython size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <FaBootstrap size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiMaterialui size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiTailwindcss size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiVisualstudiocode size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiAtom size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <GrFirefox size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiGooglechrome size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiGithub size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiTrello size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                    <SiCoffeescript size={30} style={{ margin:'10px 20px 20px 10px ', fill: 'black' }} />
                </div>
            </div>
            </div>
          </>
        </Fade>
    )
}

export default About