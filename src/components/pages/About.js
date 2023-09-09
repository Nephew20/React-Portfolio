import React from "react";
import headshot from '../../images/headshot.JPG'

function About() {
    return (
        <div>
            <h2> About Page </h2>
            <p> Hello! My name is Kevin Cofield and I am a Biomedical Engineer turned Software Developer. I Currently live in Atlanta, GA and my skills are primarily in backend development. </p>
            <img src={headshot} alt="pic-of-me" />
        </div>
    )
}

export default About