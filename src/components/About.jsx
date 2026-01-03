import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  const highlights = [
    "Full-Stack Web Development",
    "UI/UX & Clean Interfaces",
    "Project-Focused Thinking",
    "MERN + Deployment (Vercel)",
  ];

  const timeline = [
    {
      year: "2023 - Present",
      title: "Software Engineering Undergraduate",
      desc: "Building strong fundamentals + real projects with modern web stacks.",
    },
    {
      year: "Projects",
      title: "Group & Individual Builds",
      desc: "MERN apps, dashboards, and mobile-first experiences with GitHub workflows.",
    },
    {
      year: "Now",
      title: "Open to Opportunities",
      desc: "Internships, freelance, and collaboration for real-world products.",
    },
  ];

  return (
    <section className="about" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="section-title">About Me</h2>
                  <p className="section-subtitle">
                    I enjoy building clean, modern web experiences — combining development with a
                    business & project management perspective.
                  </p>

                  <div className="about-bx">
                    <Row className="g-4 align-items-stretch">
                      {/* Left - short story */}
                      <Col xs={12} md={6}>
                        <div
                          className={
                            isVisible
                              ? "about-card animate__animated animate__fadeInUp"
                              : "about-card"
                          }
                        >
                          <h4>Quick Intro</h4>
                          <p>
                            I focus on building reliable web apps with clear UI and strong structure.
                            I like working with modern tools, writing clean code, and creating smooth
                            user experiences.
                          </p>

                          <div className="about-tags">
                            {highlights.map((h, idx) => (
                              <span key={idx} className="about-tag">
                                {h}
                              </span>
                            ))}
                          </div>

                          {/* Optional: Put your CV in public folder as /cv.pdf */}
                          <div className="about-actions">
                            <a className="about-btn" href="/cv.pdf" target="_blank" rel="noreferrer">
                              Download CV
                            </a>
                            <a className="about-btn outline" href="#contact">
                              Contact Me
                            </a>
                          </div>
                        </div>
                      </Col>

                      {/* Right - timeline */}
                      <Col xs={12} md={6}>
                        <div
                          className={
                            isVisible
                              ? "about-card animate__animated animate__fadeInUp animate__delay-1s"
                              : "about-card"
                          }
                        >
                          <h4>Journey</h4>

                          <div className="timeline">
                            {timeline.map((item, idx) => (
                              <div key={idx} className="timeline-item">
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                  <span className="timeline-year">{item.year}</span>
                                  <h5>{item.title}</h5>
                                  <p>{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
