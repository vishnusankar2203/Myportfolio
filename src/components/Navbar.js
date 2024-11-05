import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { GrCertificate } from "react-icons/gr";
import { CgGitFork } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const certi = {
    marginBottom: "2px",
    background: "white",
    fontSize: "1.1em",
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? "sticky" : ""}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex brand-title">
          <h1 className="img-fluid logo" alt="brand">
            My Portfolio
          </h1>
        </Navbar.Brand>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-items" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument className="nav-icon" /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/certificates" onClick={() => updateExpanded(false)}>
                <GrCertificate style={certi} className="nav-icon" /> Certificates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/vishnusankar2203/Myportfolio.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork className="nav-icon" /> <AiFillStar className="nav-icon" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
