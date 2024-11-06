import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiPython,
	DiGit,
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiReact,
	DiNodejs,
} from "react-icons/di";  // Removed DiDatabase from here
import { SiTableau, SiMicrosoftsqlserver, SiPowerbi, SiJupyter, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

function Techstack() {
	const techStack = [
		{ icon: <DiHtml5 />, color: "#E34F26", name: "HTML" },
		{ icon: <DiCss3 />, color: "#1572B6", name: "CSS" },
		{ icon: <DiJavascript1 />, color: "#F7DF1E", name: "JavaScript" },
		{ icon: <DiReact />, color: "#61DAFB", name: "React.js" },
		{ icon: <DiNodejs />, color: "#339933", name: "Node.js" },
		{ icon: <DiPython />, color: "#3776AB", name: "Python" },
		{ icon: <SiMicrosoftsqlserver />, color: "#CC2927", name: "SQL" },
		{ icon: <SiJupyter />, color: "#F37626", name: "Jupyter Notebook" },
		{ icon: <SiTableau />, color: "#E97627", name: "Tableau" },
		{ icon: <SiPowerbi />, color: "#F2C811", name: "Power BI" },
		{ icon: <DiGit />, color: "#F1502F", name: "Git" },
		{ icon: <SiPandas />, color: "#150458", name: "Pandas" },
		{ icon: <SiNumpy />, color: "#013243", name: "NumPy" },
		{ icon: <SiScikitlearn />, color: "#F7931E", name: "Scikit-Learn" },
	];

	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{techStack.map((tech, index) => (
				<Col xs={4} md={2} className="tech-icons" key={index}>
					<div style={{ color: tech.color }}>{tech.icon}</div>
				</Col>
			))}
		</Row>
	);
}

export default Techstack;
