import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import {
  Linkedin,
  GitHub,
  Twitter,
  Instagram,
  Youtube,
  Mail,
} from "react-feather";
const Contact = () => {
  const [firstn, setFirstn] = useState("");
  const [lastn, setLastn] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstn: firstn,
      lastn: lastn,
      email: email,
      message: message,
    };
    axios
      .post("/api/forma", data)
      .then((res) => {
        setSent(true);
        resetForm();
      })
      .catch(() => {
        console.log("Message Not Sent");
        setSent(false);
      });
  };
  const resetForm = () => {
    setFirstn("");
    setLastn("");
    setEmail("");
    setMessage("");
    const timeoutObj = setTimeout(() => {
      setSent(false);
    }, 5000);
  };
  return (
    <div className="wrap">
      <div className="contactheading">CONTACT</div>
      <div class="formcontainer">
        <form onSubmit={formSubmit}>
          <div className="cover">
            <input
              type="text"
              id="fname"
              className="formip"
              name="firstname"
              placeholder="First Name"
              value={firstn}
              required={true}
              onChange={(e) => {
                setFirstn(e.target.value);
              }}
            />
          </div>
          <div className="cover">
            <input
              className="formip"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              value={lastn}
              required={true}
              onChange={(e) => {
                setLastn(e.target.value);
              }}
            />
          </div>
          <div className="cover">
            <input
              className="formip"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="cover">
            <textarea
              className="formip"
              style={{ minHeight: "10vw" }}
              id="subject"
              name="subject"
              placeholder="Message"
              value={message}
              required={true}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <input className="sendbtn" type="submit" value="Send" />
          <div className={sent ? "messageappear" : "messagedisappear"}>
            I will get back to you soon.
          </div>
        </form>
      </div>
      <div className="icons">
        <div className="contactdetails">
          <div className="address">
            <div style={{ marginLeft: "0" }}>3/58, Sector-H, Jankipuram,</div>
            <div style={{ marginLeft: "-3.5vw" }}>Kursi Road, Lucknow,</div>
            <div style={{ marginLeft: "-4vw" }}>Uttar Pradesh, India.</div>
            <div style={{ marginLeft: "-10vw" }}>(226021).</div>
          </div>
          <p className="numbermail">
            <div style={{ padding: "0.5vw" }}>
              Contact Number: +91-9026177567
            </div>
            <div style={{ padding: "0.5vw", marginLeft: "3vw" }}>
              Email ID: karuneshtripathi13@gmail.com
            </div>
            <div style={{ padding: "0.5vw", marginLeft: "1vw" }}>
              WhatApp Number: +91-8853810971
            </div>
          </p>
        </div>
        <div className="upp">
          <a href="#Home">
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              className="downarrow"
              style={{ color: "white" }}
            />
          </a>
        </div>
      </div>
      <div className="socialmedia">
        <div className="followme">Follow me on</div>
        <Linkedin
          className="linkedin"
          size="5vw"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/karunesh-tripathi-128b431b9/",
              "_blank"
            );
          }}
        />
        <GitHub
          size="5vw"
          className="github"
          onClick={() => {
            window.open("https://github.com/karuneshtripathi13", "_blank");
          }}
        />
        <Twitter
          size="5vw"
          className="twitter"
          onClick={() => {
            window.open("https://twitter.com/Karunes60783674", "_blank");
          }}
        />
        <Instagram
          size="5vw"
          className="insta"
          onClick={() => {
            window.open(
              "https://www.instagram.com/karuneshtripathi__/",
              "_blank"
            );
          }}
        />
        <Youtube
          size="5vw"
          className="youtube"
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCip-SKvL1CkSAR9_FpC4rqw",
              "_blank"
            );
          }}
        />
        <Mail
          size="5vw"
          className="gmail"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/karunesh-tripathi-128b431b9/detail/contact-info/",
              "_blank"
            );
          }}
        />
        <div className="copyrights">
          All Rights Reserved Copyright&copy;2021 KT
        </div>
      </div>
    </div>
  );
};

export default Contact;
