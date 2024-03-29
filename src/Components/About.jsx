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
            <span> Technologies : </span>React.js, React Native, MongoDB, Express.js,
             Node.js, Angular.js,  HTML, CSS, Git/Github, Gitlab
          </h3>
          <h3 className="title-style">
            <span> Internships/Experience : </span>
            
            <p id="p1"> 1. Auton Systems Pvt. Ltd. | <a href="https://drive.google.com/file/d/12qusfDAsSsOtvUV4AQ7YQW7msk0BdnSb/view" style={{color:"blue",textDecoration:"underline"}}>Certificate</a></p>
          <p id="p2"> Technology Stack: AngularJS, ReactJS, CoreUI</p>
          <p id="p2">Post: Worked as a web developer to develope the website frontend of the company</p>

            <p id="p1">2. Stockmato | <a href="https://www.stockmato.com/" style={{color:"blue",textDecoration:"underline"}}>Certificate</a> </p>
          <p id="p2"> Technology Stack: React.js, Node.js, Express.js</p>
          <p id="p2">Post: Worked as a Full stack developer to create the frontend and backend of the company</p>
          </h3>
          <h3 className="title-style">
            <span> Language : </span> English, Marathi, Hindi
          </h3>
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1R9egPGOJRxrkPbIIhe5MzuWHOXC45ZmG/view?usp=share_link"
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
