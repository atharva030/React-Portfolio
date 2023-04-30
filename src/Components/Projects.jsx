import React from "react";
import "../Styles/Projects.css";
import TODO from "../Images/TODO.png";
import auton from "../assets/auton.png";
import flipkart from "../Images/flipkart.jpg";
import Edulogy from "../Images/Edulogy.png";
import rnxg from "../assets/rnxg.png";
import rmageddon from "../assets/rmageddon.png";
import sih from "../Images/sih.jpg";
import isp from "../Images/isp.png";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading">
        {" "}
        My <span>Projects</span>{" "}
      </h1>

      <div className="box-container">
        {/* <!-- Image Size= height:168px width:300px --> */}

        <div className="box box-projects">
          <a href="https://www.rnxg.co.in/" target="_blank">
            <img src={rnxg} alt="Web Projects" />
            <span style={{ color: "white" }}>RNXG Web Portal</span>
          </a>
        </div>

        <div className="box">
          <a
            href="https://drive.google.com/file/d/12qusfDAsSsOtvUV4AQ7YQW7msk0BdnSb/view?usp=share_link"
            target="_blank"
          >
            <img src={auton} alt="Front end Developer" />
            <span style={{ color: "white" }}>Web Developer @auton</span>
          </a>
        </div>

        <div className="box">
          <a
            href="https://unstop.com/certificate-preview/287d9db1-cded-4dbe-a65e-dbfb73fd6a7d"
            target="_blank"
          >
            <img src={flipkart} alt="Flipkart Grid 3.0" />
            <span style={{ color: "white" }}>Flipkart Grid 3.0</span>
          </a>
        </div>

        <div className="box">
          <a href="https://www.rmageddon23.tech/" target="_blank">
            <img src={rmageddon} alt="project" />
            <span style={{ color: "white" }}>Rmageddon 2023</span>
          </a>
        </div>

        <div className="box">
          <a
            href="https://drive.google.com/file/d/1N8kh4WRiXy3mhXfzMRvnoxMdd8TfScts/view?usp=sharing"
            target="_blank"
          >
            <img src={sih} alt="Web" />
            <span style={{ color: "white" }}>Smart India Hackathon</span>
          </a>
        </div>

        <div className="box">
          <a
            href="https://drive.google.com/file/d/16HfIqiQJ_T9rSOPbQVMoOFrA9fQWyS3d/view?usp=sharing"
            target="_blank"
          >
            <img src={isp} alt="Web design" />
            <span style={{ color: "white" }}>Internshala Student Partner</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
