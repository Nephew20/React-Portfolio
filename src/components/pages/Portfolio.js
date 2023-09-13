import React from "react";
import SideHustle from '../../images/Side Hustle.JPG'
import TravelDashboard from '../../images/Traveler Dashboard.JPG'
import StudyGuide from '../../images/first-application.JPG'
import Scheduler from '../../images/Work Scheduler Screenshot.JPG'
import NoteTaker from '../../images/NoteTaker.jpg'
import WeatherDashboard from '../../images/Weather Dashboard.jpg'
import '../../styles/portfolio.css'

function Portfolio() {
    return (
        <div className="port-section">
            <h2>Portfolio</h2>

            <div className="port-images">

                <div className="port-item">
                    <h3> Side Hustle </h3>
                    <a href="https://side-hustle.herokuapp.com/">
                        <img src={SideHustle} alt="Side Hustle Project" />
                    </a>
                    <p>some text</p>
                </div>

                <div className="port-item">
                    <h3> Travel Dashboard </h3>
                    <a href="https://kritishrestha.github.io/Traveler-Dashboard/" >
                        <img src={TravelDashboard} alt="Dashboard" />
                    </a>
                    <p>some text</p>
                </div>

                <div className="port-item">
                    <h3> Study Guide </h3>
                    <a href="https://nephew20.github.io/prework-study-guide/" >
                        <img src={StudyGuide} alt="Study Guide" />
                    </a>
                    <p>some text</p>
                </div>

                <div className="port-item">
                    <h3> Scheduler </h3>
                    <a href="https://nephew20.github.io/Scheduler/" >
                        <img src={Scheduler} alt="Scheduler" />
                    </a>
                    <p>some text</p>
                </div>

                <div className="port-item">
                    <h3> Note Taker </h3>
                    <a href="https://mighty-temple-98807.herokuapp.com/" >
                        <img src={NoteTaker} alt="Note Taker" />
                    </a>
                    <p>some text</p>
                </div>

                <div className="port-item">
                    <h3> Weather Dashboard </h3>
                    <a href=" https://nephew20.github.io/Weather-Dashboard/" >
                        <img src={WeatherDashboard} alt="Weather Dashboard" />
                    </a>
                    <p>some text</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio