import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Bhagyashri Chavan </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            <br />
            I am currently a grad student <span className="purple">@Northeastern University,</span> pursuing Masters in Information Systems,
            set to graduate in <span className="purple"> December, 2024.</span>
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking Indian Cusines
            </li>
            <li className="about-activity">
              <ImPointRight /> Shopping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that craete a social impact!"{" "}
          </p>
          <footer className="blockquote-footer">Bhagyashri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
