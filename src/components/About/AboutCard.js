import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishnusankar</span> from{" "}
            <span className="purple">Rajapalyam, India.</span>
            <br />I am a Data Scientist , Data Analyst and Web developer with a passion for creating
            innovative and scalable applications.
            <br />I have completed my Bachelor's degree in Artificial Intelligence and Data Science
            Engineering from Ramco Institute of Technology college.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Data Analysis Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Machine Learning Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Insights
            </li>
            
          </ul>

          <p className="purple">"Live the life you love!" </p>
          <footer className="blockquote-footer">Vishnusankar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
