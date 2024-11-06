import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiAnaconda,
	SiJupyter,
	SiVisualstudiocode,
	SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<div style={{ color: "#4B8BBE" }}><SiAnaconda /></div> {/* Anaconda */}
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div style={{ color: "#F37626" }}><SiJupyter /></div> {/* Jupyter Notebook */}
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div style={{ color: "#007ACC" }}><SiVisualstudiocode /></div> {/* VS Code */}
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div style={{ color: "#A30D2E" }}><SiMicrosoftoffice /></div> {/* Microsoft Office */}
			</Col>
		</Row>
	);
}

export default Toolstack;
