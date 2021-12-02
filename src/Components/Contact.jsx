import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const Contact = (props) => {
    return (
        <Fade>
        <>
        <div class="contactme ms">
          
                <h1 class="main-heading">{props.main}</h1>
                <div class="contact">
                 <div class="mail">
                        <h1 class="heading">{props.chead}</h1>
                        <p style={{marginBottom: "25px"}} class="text">{props.ctxt}</p>
                        <a href={props.mailto} class="btn-primary p20">{props.btxt}</a>
                 </div>
                <div class="social">
                    <h1 class="heading">{props.social}</h1>
                        <div class="social-grid">
                            <a href="https://www.linkedin.com/in/sirajofcl/" target='_blank'> <FaLinkedinIn size={30} style={{ margin: '10px 20px 20px 10px ', fill: 'black' }} /></a>
                            <a href="https://www.github.com/sirajofcl/" target='_blank'> 
                            <FaGithub size={30} style={{ margin: '10px 20px 20px 10px ', fill: 'black' }} />
                            </a>
                            <a href="https://www.twitter.com/sirajofcl/" target='_blank'> 
                            <FaTwitter size={30} style={{ margin: '10px 20px 20px 10px ', fill: 'black' }} />
                             </a>
                            <a href="https://www.instagram.com/sirajofcl/" target='_blank'> 
                            <FaInstagram size={30} style={{ margin: '10px 20px 20px 10px ', fill: 'black' }} />
                             </a>
                        </div>
                  </div>
               </div>
        </div>
      </>
     </Fade>
    )
}

export default Contact
