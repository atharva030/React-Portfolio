import React from "react";
import "../Styles/Home.css";
import { FaUserTie } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <section className="home" id="home">
      <h3>HELLO !</h3>
      <h1>
        I'M <span>Atharva Suhas Jagdale</span>
      </h1>
      <p>
        I'm currently pursuing Electronics and Telecommunication Engineering at
        Shri Guru Gobind Singhji Institute of Engineering and Technolgy, Nanded.
      </p>
      <a href="#about">
        <button className="all-btn">
        About Me <span><i className="icon"><FaUserTie /></i> </span> 
        </button>
      </a>
    </section>
  );
};

export default Home;
