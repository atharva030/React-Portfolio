import React from "react";
import "../Styles/About.css";
import { FaDownload} from "react-icons/fa";
import { AiFillEye} from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="com-container" id="about">
        <h1 className="heading">
          <span>About</span> Me
          <hr />
        </h1>
        <div className="info">
          <h3 className="title-style">
            <span> Name : </span> Atharva Suhas Jagdale
          </h3>
          <h3 className="title-style">
            <span> Age : </span> 20
          </h3>
          <h3 className="title-style">
            <span> Qualification : </span> Pursuing 3rd Year B.Tech (EXTC)
            (2020-24)
          </h3>
          <h3 className="title-style">
            <span> Technologies : </span> HTML, CSS, MongoDB, Express.js,
            React.js, Node.js. Angular.js
          </h3>
          <h3 className="title-style">
            <span> Internships/Experience : </span>
            
            <p id="p1"> 1. Auton Systems Pvt. Ltd. </p>
          <p id="p2"> Technology Stack: Angular.js, Springboot</p>
          <p id="p2">Post: Working as a web developer and developing the frontend and backend of the company</p>

            <p id="p1">2. Stockmato: </p>
          <p id="p2"> Technology Stack: React.js, Node.js, Express.js</p>
          <p id="p2">Post: Working as a Full stack developer and developing the frontend and backend of the company</p>
          </h3>
          <h3 className="title-style">
            <span> Post : </span> MERN Stack Developer
          </h3>
          <h3 className="title-style">
            <span> Language : </span> English, Marathi, Hindi
          </h3>
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1JIwrpgVb32F59f7SBeDFdmLqddVJKBZS/view?usp=sharing"
          >
            <button className="all-btn">
              View Resume
              <span>
                <i className="icon"><AiFillEye size={20}/></i>
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
