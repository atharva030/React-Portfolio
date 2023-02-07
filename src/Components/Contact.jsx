import React from "react";
import "../Styles/Contact.css";
import { IoMdSend } from "react-icons/io";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { useState } from "react";
const host="https://serveratharva.vercel.app"
const Contact = () => {
  const [credentials, setCredentials] = useState({
    name:"",
    email:"",
    project:"",
    message:""
  });
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); //this is mainly use to reflect the change in words on frontend
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      project,
      message
    } = credentials;
    const response = await fetch(`${host}/adduser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.z
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name,
        email,
        project,
        message
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if(!alert('Thank you for your response')){window.location.reload();}
    console.log(json);
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> Me
        </h1>

        <div className="row">
          <div className="content">
            <h3 className="title">Contact Information</h3>

            <div className="info">
              <h3>
                <i>
                  <BsEnvelopeFill />
                </i>{" "}
                atharvajagdale28@gmail.com
              </h3>
              <h3>
                <i>
                  <BsFillTelephoneFill />
                </i>{" "}
                +91-8291798609
              </h3>
              <h3>
                <i>
                  <ImLocation />
                </i>{" "}
                Dhule (MS), India - 424004.
              </h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="name" className="box" value={credentials.name} onChange={onchange} name="name" required />
            <input type="email" placeholder="email" className="box" value={credentials.email} onChange={onchange} name="email" required />
            <input type="text" placeholder="project" className="box" value={credentials.project} onChange={onchange} name="project" required />
            <textarea
              cols="30"
              rows="10"
              value={credentials.message} 
              onChange={onchange}
              name="message"
              className="box message"
              placeholder="message"
            />
            <button className="send" type="submit">
              Send
              <i>
                <IoMdSend />
              </i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
