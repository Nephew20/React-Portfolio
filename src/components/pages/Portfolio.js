import React from "react";
import '../../styles/portfolio.css';
import SideHustle from '../../images/Side Hustle.JPG'
import TravelDashboard from '../../images/Traveler Dashboard.JPG'
import NoteTaker from '../../images/NoteTaker.jpg'
import BookSearch from '../../images/Book-Search Engine.JPG'
import Ecommerce from '../../images/Ecommerce Back-End Video.webm'
import ReadmeGen from '../../images/README Generator Video.webm'


function Portfolio() {

  const portfolioItems = [
    {
      title: "Side Hustle",
      description: "Craiglist type website where users can post and accept side jobs.",
      technologies: "Node, Express, MySQL, Sequelize, Session, Bcrypt",
      imageSrc: SideHustle,
      deployLink: "https://side-hustle.herokuapp.com/",
      repoLink: "https://github.com/dimartoro/side-hustle",
    },
    {
      title: "Travel Dashboard",
      description: "Travel site that provides users with weather data and ratings for cities.",
      technologies: "HTML, CSS, API's, jQuery",
      imageSrc: TravelDashboard,
      deployLink: "https://kritishrestha.github.io/Traveler-Dashboard",
      repoLink: "https://github.com/KritiShrestha/Traveler-Dashboard",
    },
    {
      title: "Note Taker",
      description: "Allows users to write and store notes.",
      technologies: "Express.js, HTML, CSS",
      imageSrc: NoteTaker,
      deployLink: "https://mighty-temple-98807.herokuapp.com",
      repoLink: "https://github.com/Nephew20/Note-Taker",
    },
    {
      title: "Book-search Engine",
      description: "A search engine that allows users to make an account to research and save books they like.",
      technologies: "Apollo, React, MongoDB, NoSQL",
      imageSrc: BookSearch,
      deployLink: "https://ancient-hollows-66845-363bbc322d4b.herokuapp.com/",
      repoLink: "https://github.com/Nephew20/Book-Search-Engine",
    },

  ];



  return (
    <div className="image-section">
      <h2>Portfolio</h2>
      <h4>Some of the Projects I've had the pleasure of working on!!</h4>

      <div className="cards">
        {portfolioItems.map((item, index) => (

          <div className="card-item" key={index}>

            <div className="card-image">
              <a href={item.deployLink} >
                <img src={item.imageSrc} alt={item.title} />
              </a>

              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Technologies Used:</strong> {item.technologies}</p>
              </div>
            </div>

            <div className="card-links">
              <strong>Repo: </strong>
              <a href={item.repoLink} >
                Click Here
              </a>
            </div>

          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
     

      <div className="video-section">
        <div className="vid-card">

          <video width="450" autoPlay controls>
            <source src={Ecommerce} type="video/webm" />
          </video>
          <h3>E-Commerce Back End</h3>
          <ul>
            <li> Developed the server responses for an Ecommerce website. </li>
            <li> <strong>Technologies Used: </strong> Sequilize, Express.js, .env </li>
            <li className="repo"> <strong>Repo:</strong> <a href="https://github.com/Nephew20/Can-I-Doge-It">Click Here</a> </li>
          </ul>
        </div>


        <div className="vid-card">

          <video width="450" autoPlay controls>
            <source src={ReadmeGen} type="video/webm" />
          </video>
          <h3>README Generator</h3>

          <ul>
            <li>  Developed the server responses for an Ecommerce website. </li>
            <li> <strong>Technologies Used: </strong> Sequilize, Express.js, .env </li>
            <li className="repo"> <strong>Repo:</strong> <a href="https://github.com/Nephew20/Can-I-Doge-It">Click Here</a> </li>
          </ul>
        </div>
      </div>

      <br/>
      <br/>
      
    </div>
  );
}

export default Portfolio;