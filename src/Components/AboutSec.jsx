import React from 'react'
import About from './About'
import Fade from 'react-reveal/Fade';

const AboutSec = (props) => {
    return (
        <Fade Bottom>
        <>
         <section className="ms">
                <h1 className="main-heading">{props.sname}</h1>
                <About heada="I have experience developing and designing software for the web, from simple
                       landing pages to progressive web applications."
                       txta="I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me."
                       headb='When i am not infront of computer screen.'
                    txtb="I'm probably reading book, traveling, hiking, making art, or riding bike."
                    toolshead='The stack i use mostly'
                />
            </section>
         </>
    </Fade>
    )
};

export default AboutSec
