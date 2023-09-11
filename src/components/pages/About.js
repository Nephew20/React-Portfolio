import React from "react";
import headshot from '../../images/headshot.JPG'
import '../../styles/about.css'

function About() {

    // const styles = {
    //   marginStyle: {
    //     margin-right: '20px'
    //   }
    // }
    return (
        <div className="about-section">
            <h2> About Page </h2>

            <div className="content-container">
                <div className="headshot">
                    <img src={headshot} alt="pic-of-me" />
                </div>
                
                <div className="about-info">
                    <p> Hello! My name is Kevin Cofield and I am a Biomedical Engineer turned Software Developer. I Currently live in Atlanta, GA and my skills are primarily in backend development. </p>
                </div>
            </div>
        </div>
    )
}

export default About