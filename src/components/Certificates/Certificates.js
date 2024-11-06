import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";

// Import the certificate images
import internshipCertificate from "../../Assets/Certificates/Internship Certificate-VISHNUSANKAR.png"; 
import pythonFlaskCertificate from "../../Assets/Certificates/Python flask.png"; // Import the Python Flask certificate
import skillbuildCertificate from "../../Assets/Certificates/skillbuild certificate.jpg"; // Import the Skillbuild certificate

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={internshipCertificate} // Use the imported image
              isBlog={false}
              title="AI-Driven Digital Marketing Internship Certificate"
              description="Successfully completed 1 Month AI-Driven Digital Marketing Internship in the Ezofis way to digital transformation."
              link={internshipCertificate} // Use the image for download
              downloadText="Download Certificate" // Optional: Text for the download button
            />
          </Col>

          
          <Col md={4} className="project-card">
            <Certicards
              imgPath={pythonFlaskCertificate} // Use the imported image
              isBlog={false}
              title="Python Flask Certification"
              description="Successfully completed a course in Python Flask."
              link={pythonFlaskCertificate} // Use the image for download
              downloadText="Download Certificate" // Optional: Text for the download button
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={skillbuildCertificate} // Use the imported image
              isBlog={false}
              title="Skillbuild Certificate"
              description="Successfully completed a Skillbuild certification course."
              link={skillbuildCertificate} // Use the image for download
              downloadText="Download Certificate" // Optional: Text for the download button
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
