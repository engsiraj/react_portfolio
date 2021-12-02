import React from 'react'

const Join = (props) => {
    return (
        <section className="join">
            <span className="heading">{props.jointxt}</span>
            <a href={props.mailto} className="btn-primary p3">{props.joinbtntxt}</a>      
        </section>
    )
}

export default Join
