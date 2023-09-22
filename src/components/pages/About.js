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
            <h2> About Me </h2>

            <div className="info-container">
                <div className="headshot">
                    <img src={headshot} alt="pic-of-me" />
                </div>

                <div className="about-info">
                    <p>
                        Hello! My name is Kevin Cofield and I am a Biomedical Engineer turned Full Stack Developer. Due to my foundation in biomedical engineering, I bring a creative and unique perspective to the software development field.
                        I am a detail-oriented, analytical, and communicative problem solver. I have a passion for learning and I believe that these qualities embody those of a developer. 
                        I have experience working on multicultural and multidisciplinary teams that have designed and presented products to potential customers.  
                        Whether it is working on medical devices or software applications, I am dedicated to enhancing a team's capabilities by staying committed to excellence. 
                        Overall, I thrive on the challenges that software development brings and I am excited to use the practices I have cultivated as a biomedical engineer to drive creations and deliver solutions that will make an impact on consumers' lives.     
                        <hr></hr>
                        
                        <strong>Technological Skills:</strong> HTML5, CSS, Express, NoSQL, MongoDB, React, Apollo Server, GraphQL, Node, Git, MERN
                    </p>
                    
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>

        
    )
}

export default About