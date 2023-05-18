import React from "react";
import "../Styles/Projects.css";
import TODO from "../Images/TODO.png";
import auton from "../assets/auton.png";
import flipkart from "../Images/flipkart.jpg";
import Edulogy from "../Images/Edulogy.png";
import rnxg from "../assets/rnxg.png";
import rmageddon from "../assets/rmageddon.png";
import taskstack from "../assets/taskStack.png"
import vastav from "../assets/vastav.png"
import myration from "../assets/myration.png"
import sih from "../Images/sih.jpg";
import isp from "../Images/isp.png";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading">
       <span>Projects</span>{" "}
      </h1>

      <div className="box-container">
        {/* <!-- Image Size= height:168px width:300px --> */}

        {/* <div className="box box-projects">
          
            <img src={rnxg} alt="Web Projects" />
            <span style={{ color: "white" }}>RNXG Web Portal</span>
          </a>
        </div> */}

        <div className="box">
        <a href="https://github.com/atharva030/TIAA-Frontend.git" target="_blank">
        <img src={myration} alt="Web Projects" />
            <span style={{ color: "white" }}>myRation App</span>
          </a>
        </div>
        <div className="box">
        <a href="https://drive.google.com/drive/folders/1SvcvNnt4-20tbSjUYb8kCQfPC6r4JV4j" target="_blank">
        <img src={taskstack} alt="Web Projects" />
            <span style={{ color: "white" }}>TaskStack Application</span>
          </a>
        </div>
        <div className="box">
        <a href="https://vastav.vercel.app/" target="_blank">
        <img src={vastav} alt="Web Projects" />
            <span style={{ color: "white" }}>Vastav Web App</span>
          </a>
        </div>
        <div className="box">
        <a href="https://www.rnxg.co.in/" target="_blank">
        <img src={rnxg} alt="Web Projects" />
            <span style={{ color: "white" }}>RNXG Web Portal</span>
          </a>
        </div>

      

     

      
       
      </div>
    </section>
  );
};

export default Projects;
