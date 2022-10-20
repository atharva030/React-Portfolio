import { useState,React } from "react";
import { BsTwitter, BsEnvelopeFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi";
import { IoClose} from "react-icons/io5";
import atharva  from '../Images/atharva.jpeg'
import sidecss from "../Styles/Sidebar.css";
const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <header className={isMobile?"mobile":"header"} >
        {/* <button><GiHamburgerMenu size={30}/></button> */}
        <div className="user">
          <img src={atharva} alt="profile photo" />
          <h3 className="name">Atharva Jagdale</h3>
          <p className="post">MERN Stack Developer</p>
        </div>

        <nav className="navbar">
          <ul onClick={()=>setIsMobile(false)}>
            <li>
              <a href="#home" >
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#education">
                Education
              </a>
            </li>
            <li>
              <a href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <a className="hover-fx" href="https://twitter.com/AtharvaJagdale5" target="_blank">
            <BsTwitter size={30} />
          </a>
          <a
            className="hover-fx"
            href="https://www.linkedin.com/in/atharva-jagdale-b20694221" target="_blank"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a className="hover-fx" href="https://github.com/atharva030" target="_blank">
            <FaGithub size={30} />
          </a>
          <a className=" hover-fx" href="mailto:atharvajagdale28@gmail.com" target="_blank">
            <BsEnvelopeFill size={30} />
          </a>
        </div>
      </header>
      <div id="burger" className="fa fa-bars"></div>
    <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
      {!isMobile? <GiHamburgerMenu size={20}/>:<IoClose size={22}/>}
    </button>
    </>
  );
};

export default Sidebar;
