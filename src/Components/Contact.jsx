import React from "react";
import "../Styles/Contact.css";
import { IoMdSend} from "react-icons/io";
import { BsEnvelopeFill,BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Contact = () => {
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
                <i><BsEnvelopeFill/></i> atharvajagdale28@gmail.com
              </h3>
              <h3>
                <i><BsFillTelephoneFill/></i> +91-8291798609
              </h3>
              <h3>
                <i><ImLocation/></i> Dhule
                (MS), India - 424004.
              </h3>
            </div>
          </div>

          <form>
            <input type="text" placeholder="name" className="box" required />
            <input type="email" placeholder="email" className="box" required />
            <input type="text" placeholder="project" className="box" required />
            <textarea
              id=""
              cols="30"
              rows="10"
              className="box message"
              placeholder="message"
            />
            <button type="submit" className="send">
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
