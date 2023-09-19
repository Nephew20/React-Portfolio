import React from "react";
import SideHustle from '../../images/Side Hustle.JPG'
import TravelDashboard from '../../images/Traveler Dashboard.JPG'
import Ecommerce from '../../images/Ecommerce Back-End Video.webm'
import ReadmeGen from '../../images/README Generator Video.webm'
import NoteTaker from '../../images/NoteTaker.jpg'
import BookSearchEngine from '../../images/Book-Search Engine.JPG'
import '../../styles/portfolio.css'

function Portfolio() {
    return (
        <div className="port-section">
            <h2>Portfolio</h2>

            <h4> Click images to be taken to the deployed site</h4>
            <div className="port-images">

                <div className="port-item">
                    <h3> Side Hustle </h3>
                    <a href="https://side-hustle.herokuapp.com/">
                        <img src={SideHustle} alt="Side-Hustle" />
                    </a>
                    <ul>
                        <li> <strong>Description:</strong> Craiglist type website where users can post and accept side jobs. </li>
                        <li> <strong>Technologies Used:</strong> Node, Express, MySQL, Sequelize, Session, Bcrypt </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/dimartoro/side-hustle">Click Here</a> </li>
                    </ul>
                </div>

                <div className="port-item">
                    <h3> Travel Dashboard </h3>
                    <a href="https://kritishrestha.github.io/Traveler-Dashboard/" >
                        <img src={TravelDashboard} alt="Dashboard" />
                    </a>
                    <ul>
                        <li> <strong>Description:</strong> Travel site that provides users with weather data and ratings for cities. </li>
                        <li> <strong>Technologies Used:</strong> HTML, CSS, API's, jQuery </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/KritiShrestha/Traveler-Dashboard">Click Here</a> </li>
                    </ul>
                </div>

                <div className="port-item">
                    <h3>E-Commerce Back End</h3>
                    <video width="450" autoPlay controls>
                        <source src={Ecommerce} type="video/webm" />
                    </video>
                    <ul>
                        <li> <strong>Description:</strong> Developed the server responses for an Ecommerce website. </li>
                        <li> <strong>Technologies Used: </strong> Sequilize, Express.js, .env </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/Nephew20/Can-I-Doge-It">Click Here</a> </li>
                    </ul>
                </div>

                <div className="port-item">
                    <h3> README Generator </h3>
                    <video width="350" autoPlay controls>
                        <source src={ReadmeGen} type="video/webm" />
                    </video>
                    <ul>
                        <li> <strong>Description:</strong> Application that takes user input to generate a README file </li>
                        <li> <strong>Technologies Used: </strong> Node.js, NPM Packages, Inquirer </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/Nephew20/README-Generator">Click Here</a> </li>
                    </ul>
                </div>

                <div className="port-item">
                    <h3> Note Taker </h3>
                    <a href="https://mighty-temple-98807.herokuapp.com/" >
                        <img src={NoteTaker} alt="Note Taker" />
                    </a>
                    <ul>
                        <li> <strong>Description:</strong> Allows users to write and store notes </li>
                        <li> <strong>Technologies Used: </strong> Express.js, HTML, CSS </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/Nephew20/Note-Taker">Click Here</a> </li>
                    </ul>
                </div>

                <div className="port-item">
                    <h3> Book-search Engine</h3>
                    <a href="https://ancient-hollows-66845-363bbc322d4b.herokuapp.com/" >
                        <img src={BookSearchEngine} alt="Weather Dashboard" />
                    </a>
                    <ul>
                        <li> <strong>Description:</strong> A search engine that allows users to make an account to research and save books they like. </li>
                        <li> <strong>Technologies Used: </strong> Apollo, React, MongoDB, NoSQL </li>
                        <li> <strong>Repo:</strong> <a href="https://github.com/Nephew20/Book-Search-Engine">Click Here</a> </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Portfolio