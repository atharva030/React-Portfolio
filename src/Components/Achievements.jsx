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
import { AiFillEye } from "react-icons/ai";
const Achievement = () => {
  return (
    <div className="achievement" id="achieve">
      <h1 className="heading">
        <span>Achievements</span>
      </h1>
        <ul className="info">
          <h3 className="title-style">
            <li className="list-style">Leader of winning team of Intercollege Hackthon at TIAA, Pune ( MAY-23 ) | <a href="https://github.com/atharva030/TIAA-Frontend" style={{textDecoration:"underline",color:"blue"}} target="_blank"> GitHub</a></li> 
            <li className="list-style">Leader of winning team of Intercollege Smart India Hackathon ( 2022 ) | <a href="https://drive.google.com/file/d/1N8kh4WRiXy3mhXfzMRvnoxMdd8TfScts/view" target="_blank" style={{textDecoration:"underline",color:"blue"}}> Link</a></li> 
            <li className="list-style">Appreciated for Internshala Student Partner-22 | <a href="https://drive.google.com/file/d/16HfIqiQJ_T9rSOPbQVMoOFrA9fQWyS3d/view" style={{textDecoration:"underline",color:"blue"}} target="_blank"> Certificate</a></li> 
          </h3>
        </ul>
    </div>
  );
};

export default Achievement;
