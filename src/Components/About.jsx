import React from "react";
import "../Styles/About.css";
import { FaDownload} from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="com-container" id="about">
        <h1 className="heading">
          <span>About</span> Me
        </h1>
        <div className="info">
          <h3>
            <span> Name : </span> Atharva Jagdale
          </h3>
          <h3>
            <span> Age : </span> 20
          </h3>
          <h3>
            <span> Qualification : </span> Pursuing 3rd Year B.Tech (EXTC)
            (2020-24)
          </h3>
          <h3>
            <span> Technologies : </span> HTML, CSS, MongoDB, Express.js,
            React.js, Node.js
          </h3>
          <h3>
            <span> Post : </span> MERN Stack Developer
          </h3>
          <h3>
            <span> Language : </span> English, Marathi, Hindi
          </h3>
          <a
            href="Atharva Jagdale Resume.pdf"
            download="Atharva Jagdale Resume"
          >
            <button className="all-btn">
              Download Resume
              <span>
                <i className="fa fa-download"><FaDownload/></i>
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
