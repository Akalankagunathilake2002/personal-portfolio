import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/cityBus.png";
import projImg2 from "../assets/img/travelAura.jpeg";
import projImg3 from "../assets/img/BUY , SELL , CONNECT , IMPACT (5).png";
import projImg4 from "../assets/img/videoHub.jpeg";
import projImg5 from "../assets/img/SmartAgri.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CityBus – Bus Scheduling System",
      description:
        "City bus scheduling, passenger management, reviews and bus management features.",
      imgUrl: projImg1,
      url: "https://github.com/Dilmith-Ranasinghe518/CityBus.git",
    },
    {
      title: "TravelAura – Travel & Explore Platform",
      description:
        "MERN-based travel management system with destinations, accommodations, blogs and events.",
      imgUrl: projImg2,
      url: "https://github.com/Dilmith-Ranasinghe518/TravelAura.git",
    },
    {
      title: "LocalLoop – SDG 08 Community Marketplace",
      description:
        "Mobile app focused on SDG 08 to support local businesses, events and hyperlocal marketplace.",
      imgUrl: projImg3,
      url: "https://github.com/Dilmith-Ranasinghe518/LocalLoop.git",
    },
    {
      title: "VideoHub – Java-based Video Platform",
      description:
        "Java-based video streaming/management system with playlists and user features.",
      imgUrl: projImg4,
      url: "https://github.com/Kamindumenula/VideoHub-JavaProject.git",
    },
    {
      title: "SmartAgriConnect – Smart Agriculture System",
      description:
        "MERN stack app for agri inventory, bidding, farmer product listings and management.",
      imgUrl: projImg5,
      url: "https://github.com/Kamindumenula/Smart-AgriConnect.git",
    },

   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here you can find a selection of my work and the projects I’m currently building.
                  </p>

                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Row className="project-grid">
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </div>
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
