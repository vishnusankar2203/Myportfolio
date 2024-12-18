import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";

// Import certificate images
import internshipCertificate from "../../Assets/Certificates/Internship Certificate-VISHNUSANKAR.png";
import pythonFlaskCertificate from "../../Assets/Certificates/Python flask.png";
import skillbuildCertificate from "../../Assets/Certificates/skillbuild certificate.jpg";
import playstore from "../../Assets/Certificates/Play store-1.png"; 

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Internship Certificate */}
          <Col md={4} className="project-card">
            <Certicards
              imgPath={internshipCertificate}
              isBlog={false}
              title="AI-Driven Digital Marketing Internship Certificate"
              description="Successfully completed a 1-month AI-Driven Digital Marketing Internship with Ezofis, focusing on digital transformation."
              link={internshipCertificate}
              downloadText="Download Certificate"
            />
          </Col>

          {/* Python Flask Certificate */}
          <Col md={4} className="project-card">
            <Certicards
              imgPath={pythonFlaskCertificate}
              isBlog={false}
              title="Python Flask Certification"
              description="Successfully completed a course in Python Flask, learning backend web development and API creation."
              link={pythonFlaskCertificate}
              downloadText="Download Certificate"
            />
          </Col>

          {/* Skillbuild Certificate */}
          <Col md={4} className="project-card">
            <Certicards
              imgPath={skillbuildCertificate}
              isBlog={false}
              title="Skillbuild Certificate"
              description="Completed the Skillbuild certification course, enhancing my technical and professional skills."
              link={skillbuildCertificate}
              downloadText="Download Certificate"
            />
          </Col>

          {/* Play Store Certificate */}
          <Col md={4} className="project-card">
            <Certicards
              imgPath={playstore}
              isBlog={false}
              title="Google Play Store Certification"
              description="Published my first Android app on the Google Play Store, showcasing skills in mobile app development."
              link={playstore}
              downloadText="Download Certificate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
