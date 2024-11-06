import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my image.jpeg"; // Update this path as needed
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm VISHNUSANKAR, a passionate fresher eager to start my career as a Data Scientist and Data Analyst. My journey in the tech world has been marked by continuous learning and a deep enthusiasm for data-driven decision-making.
              <br />
              <br />
              I am proficient in programming languages like 
              <i>
                <b className="purple"> Python and SQL. </b>
              </i>
              <br />
              <br />
              My primary areas of interest include 
              <i>
                <b className="purple">
                  data analysis, machine learning, and building impactful data-driven applications.
                </b>
              </i>
              <br />
              <br />
              I am also deeply invested in exploring the potential of 
              <i>
                <b className="purple">
                  {" "}Artificial Intelligence and its applications in various industries.
                </b>
              </i>
              <br />
              <br />
              I thrive on leveraging modern data technologies and frameworks to extract insights from complex datasets and contribute to innovative solutions.
            </p>
          </Col>
          <Col md={4} style={{ margin: "0px" }} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ 
                  height: "auto",  // Adjust height
                  width: "100%",   // Set width to 100% to fill the column
                  maxHeight: "400px", // Limit the max height to prevent overflow
                  borderRadius: "10px" // Optional: Add rounded corners
                }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vishnusankar2203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishnusankar2203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz_vizhnu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
