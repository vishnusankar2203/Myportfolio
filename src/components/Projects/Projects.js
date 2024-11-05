import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images
import studentFormImage from "../../Assets/Projects/Student form.png";
import cnnMnistImage from "../../Assets/Projects/CNN-Mnist-Digit-Classifier.png";
import amazonPrimeImage from "../../Assets/Projects/Amazon Prime Movies and TV Shows.png";
import netflixImage from "../../Assets/Projects/Netflix.png"; 
import portfolioImage from "../../Assets/Projects/portfolio.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentFormImage} // Use imported image
              isBlog={false}
              title="Student Form"
              description="Transform your learning experience with our sleek Student Form: Capture essential details effortlessly and stay on top of your educational journey. 🌟📚"
              link="http://127.0.0.1:5500/student%20form.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnnMnistImage} // Use imported image
              isBlog={false}
              title="CNN-MNIST-Digit-Classifier"
              description="DigitVision 🚀 is a deep learning project that classifies handwritten digits ✍️ using a CNN, achieving high accuracy with the MNIST dataset 📊 of 60,000 training and 10,000 testing images (0-9)."
              link="https://colab.research.google.com/github/vishnusankar2203/To-Do-list/blob/main/MNIST_Handwritten_Digit_Classifier_with_CNN.ipynb"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonPrimeImage} // Use imported image
              isBlog={false}
              title="Amazon Prime Movies and TV shows - Dashboard"
              description="Dashboard Highlights: 📊 Total Titles: 9,655 🎬 | Ratings: 25 levels 🌟 | Genres: 519 🎭 | Directors: 5,771 🎥 | Date Range: 1920-2021 📅."
              link="https://github.com/vishnusankar2203/Amazon-Prime-Movies-and-TV-Shows---PowerBi/blob/main/Amazon%20Prime%20Movies%20and%20TV%20Shows.pbit"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixImage} // Use imported image
              isBlog={false}
              title="Netflix Dataset"
              description="📊 Comprehensive data cleaning and 📈 visualization of Netflix content to uncover trends, 🌍 popular genres, and 📅 content distribution across countries and time. 🍿📺"
              link="https://github.com/vishnusankar2203/Netfix-dataset/blob/main/Netflix.ipynb"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImage} // Use imported image
              isBlog={false}
              title="Portfolio"
              description="📊 Hello! I’m a Data Analyst and Data Scientist dedicated to transforming data into actionable insights. Explore my portfolio to see projects, certifications, and the impact of data-driven solutions! 🚀✨"
              link="http://localhost:3000/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
