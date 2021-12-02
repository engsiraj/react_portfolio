import React from 'react'
import data from './Projectdata'
import Project from './Project'

const Projects = (props) => {
    return (
      <>
      <section className="projects ms">
          <h1 className="main-heading">{props.sname}</h1>
        <Project
          imgscr={data[0].imgscr}
          name ={data[0].name}
          text={data[0].text}
          link1={data[0].link1}
          link2={data[0].link2}
          tag ={data[0].tag}
        />

         <Project
          imgscr={data[1].imgscr}
          name ={data[1].name}
          text={data[1].text}
          link1={data[1].link1}
          link2={data[1].link2}
          tag ={data[1].tag}
          />
       </section>
    </>
    )
}

export default Projects
