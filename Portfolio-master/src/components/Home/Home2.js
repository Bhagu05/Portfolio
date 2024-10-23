import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
            My passion for programming has led me to develop a wide range of skills, 
            creating impactful software solutions across various domains
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Java, Python, C++, JavaScript </b>
              </i> giving me a strong foundation for both backend and frontend development.
              <br />
              <br />
              I am particularly interested in building innovative web technologies and products. 
              My expertise spans frontend technologies like 
              <i>
                <b className="purple">React.js, Angular, Node.js, and Next.js</b> alongside backend frameworks such as 
                <b className="purple"> Java Spring Boot </b>
              </i>
              <br />
              <br />
              With extensive experience in deploying scalable applications using  
              <b className="purple"> AWS</b> and 
              <i>
              <br />I also work with both 
                <b className="purple">
                  {" "}
                  SQL and NoSQL databases 
                </b>
              </i>
              &nbsp; to ensure efficient data management and seamless system integration.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/Bhagu05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhagyashrichavan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
