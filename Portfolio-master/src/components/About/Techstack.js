import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiAws,
  DiMysql,
  DiDocker,
  DiDotnet,
  DiJenkins,
  DiSpark,
  DiGoogleCloudPlatform,
  DiDigitalOcean,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-name">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-name">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <div className="tech-name">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
        <div className="tech-name">.Net</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="tech-name">C & C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-name">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <div className="tech-name">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-name">Node.JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-name">React JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="tech-name">MY SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <div className="tech-name">Angular JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-name">MongoDb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-name">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <div className="tech-name">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-name">PostgreSql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
        <div className="tech-name">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
        <div className="tech-name">Spark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-name">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <div className="tech-name">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDigitalOcean />
        <div className="tech-name">DigitalOcean</div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
