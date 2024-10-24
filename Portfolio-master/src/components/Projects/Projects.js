import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hexaware from "../../Assets/Projects/Hexaware.jpg";
import NSEIT from "../../Assets/Projects/NSEIT.jpg";
import MC  from "../../Assets/Projects/Mastercontrol.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          From 2019 - 2024.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NSEIT}
              isBlog={false}
              title="NSEIT.Ltd"
              Duration= "2019-2021"
              description="Streamlined data processing processes,improving real-time data flow in critical financial systems.Developed responsive front-end applications, which enhanced system responsiveness, reduced processing times, and improved the overall user experience for high-demand financial platforms."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hexaware}
              isBlog={false}
              title="Hexaware Technologies"
              Duration= "2021-2022"
              description="Architected and developed scalable microservices, optimizing the application’s performance with caching, which reduced load times and enhanced system scalability, directly contributing to improved service availability for global clients."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MC}
              isBlog={false}
              title="MasterControl"
              Duration= "2024"
              description="Designed and implemented cutting-edge full-stack solutions for life sciences applications.Integrated AWS services to enhance scalability and system performance, and improved data storage capabilities. Automated deployments, ensuring seamless operations and real-time monitoring."
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
