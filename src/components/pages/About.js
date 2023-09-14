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
                    <p>
                        Hello! My name is Kevin Cofield and I am a Biomedical Engineer turned Full Stack Developer. Due to my foundation in biomedical engineering, I bring a creative and unique perspective to the software development field.
                        I am detail-oriented, a problem solver, analytical, communicative, a team player, and a fast learner. I have a passion for learning and I believe that these qualities embody that of a developer.  

                        
                        {/* I have knowledge and skills in creating user friendly UI/UX applications and I have experience with working on multicultural and multidisciplinary teams.
                        I am creative, detail orientented, a team player and a fast learner. I believe that through my engineering background, I bring */}
                    </p>

                </div>

            </div>
            <br />

        </div>


    )
}

export default About