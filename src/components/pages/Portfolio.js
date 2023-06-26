import React from "react";
import SideHustle from '../../images/Side Hustle.JPG'
import TravelDashboard from '../../images/Traveler Dashboard.JPG'
import StudyGuide from '../../images/first-application.JPG'
import Scheduler from '../../images/Work Scheduler Screenshot.JPG'
import NoteTaker from '../../images/NoteTaker.jpg'
import WeatherDashboard from '../../images/Weather Dashboard.jpg'

function Portfolio() {
    return (
        <div>
            <h3> Side Hustle </h3>
            <a href="https://side-hustle.herokuapp.com/">
                <img src={SideHustle} alt="Side Hustle Project" />
            </a>

            <h3> Travel Dashboard </h3>
            <a href="https://kritishrestha.github.io/Traveler-Dashboard/" >
                <img src={TravelDashboard} alt="Dashboard" />
            </a>
            
            <h3> Study Guide </h3>
            <a href="https://nephew20.github.io/prework-study-guide/" >
                <img src={StudyGuide} alt="Study Guide" />
            </a>
            
            <h3> Scheduler </h3>
            <a href="https://nephew20.github.io/Scheduler/" >
                <img src={Scheduler} alt="Scheduler" />
            </a>

            <h3> Note Taker </h3>
            <a href="https://mighty-temple-98807.herokuapp.com/" >
                <img src={NoteTaker} alt="Note Taker" />
            </a>

            <h3> Weather Dashboard </h3>
            <a href=" https://nephew20.github.io/Weather-Dashboard/" >
                <img src={WeatherDashboard} alt="Weather Dashboard" />
            </a>

           
        </div>
    )
}

export default Portfolio