import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Newlogo.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIconGithub from "../assets/img/github2.png"; // GitHub icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/akalanka-gunathilake-6ba64b23a" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Akalankagunathilake2002" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIconGithub} alt="GitHub" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
