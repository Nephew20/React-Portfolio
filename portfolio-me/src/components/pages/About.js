import React from "react";
import headshot from '../../images/headshot.JPG'

function About() {
    return (
    <div>
        <h1> About Page </h1>
        <p> About me info </p>
        <img src={headshot} alt="pic-of-me" />
    </div>
    )
}

export default About