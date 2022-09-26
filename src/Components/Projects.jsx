import React from 'react'
import "../Styles/Projects.css"
import TODO from '../Images/TODO.png'
import pentext from '../Images/PenText.png'
import flipkart from '../Images/flipkart.jpg'
import Edulogy from '../Images/Edulogy.png'
import sih from '../Images/sih.jpg'
import isp from '../Images/isp.png'
 const Projects = () => {
    
  return (
    
    <section className="projects" id="projects">

    <h1 className="heading"> My <span>Projects</span> </h1>

    <div className="box-container">

        {/* <!-- Image Size= height:168px width:300px --> */}

        <div className="box box-projects">
           <a href="https://todobyatharva.netlify.app/"> 
           <img src={TODO} alt="Web Projects"/>
            <span style={{color: "white"}}>TODO List using React</span></a>
        </div>

        <div className="box">
           <a href="https://pentextbyatharva.netlify.app/"> 
           <img src={pentext} alt="Front end Developer"/>
            <span style={{color: "white"}}>PenText Web App</span></a>
        </div>

        <div className="box">
            <a href="https://unstop.com/certificate-preview/287d9db1-cded-4dbe-a65e-dbfb73fd6a7d">
                <img src={flipkart} alt="Flipkart Grid 3.0"/>
            <span style={{color: "white"}}>Flipkart Grid 3.0</span></a>
        </div>

        <div className="box">
           <a href="https://edulogybyatharva.netlify.app/">
             <img src={Edulogy} alt="project"/>
            <span style={{color: "white"}}>EduLogy Web App</span></a>
        </div>

        <div className="box">
        <a href="https://drive.google.com/file/d/1N8kh4WRiXy3mhXfzMRvnoxMdd8TfScts/view?usp=sharing">
        
            <img src={sih} alt="Web"/>
            <span style={{color: "white"}}>Smart India Hackathon</span></a>
        </div>

        <div className="box">
        <a href="https://drive.google.com/file/d/16HfIqiQJ_T9rSOPbQVMoOFrA9fQWyS3d/view?usp=sharing">
            <img src={isp} alt="Web design"/>
            <span style={{color: "white"}}>Internshala Student Partner</span></a>
        </div>

    </div>

</section>
  )
}

export default Projects