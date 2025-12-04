import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const groupProjects = [
    {
      title: "CityBus – Bus Scheduling System",
      description:
        "Group project – City bus scheduling, passenger management, reviews and bus management features.",
      imgUrl: projImg1,
      url: "https://github.com/Dilmith-Ranasinghe518/CityBus.git",
    },
    {
      title: "TravelAura – Travel & Explore Platform",
      description:
        "Group project – MERN-based travel management system with destinations, accommodations, blogs and events.",
      imgUrl: projImg2,
      url: "https://github.com/Dilmith-Ranasinghe518/TravelAura.git",
    },
    {
      title: "LocalLoop – SDG 08 Community Marketplace",
      description:
        "Group project – Mobile app focused on SDG 08 to support local businesses, events and hyperlocal marketplace.",
      imgUrl: projImg3,
      url: "https://github.com/Dilmith-Ranasinghe518/LocalLoop.git",
    },
    {
      title: "VideoHub – Java-based Video Platform",
      description:
        "Group project – Java-based video streaming/management system with playlists and user features.",
      imgUrl: projImg1,
      url: "https://github.com/Kamindumenula/VideoHub-JavaProject.git",
    },
    {
      title: "SmartAgriConnect – Smart Agriculture System",
      description:
        "Group project – MERN stack app for agri inventory, bidding, farmer product listings and management.",
      imgUrl: projImg2,
      url: "https://github.com/Kamindumenula/Smart-AgriConnect.git",
    },
  ];

  const individualProjects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio – Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Finance Tracker App",
      description: "Individual project – Web app for budgeting",
      imgUrl: projImg2,
    },
    {
      title: "UI Component Library",
      description: "Individual project – Reusable React components",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you can find a selection of my work, including{" "}
                    <b>group projects</b> done with teammates and{" "}
                    <b>individual projects</b> I’ve built on my own.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="group">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="group">Group Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="individual">
                          Individual Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="group">
                        <Row>
                          {groupProjects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="individual">
                        <Row>
                          {individualProjects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
