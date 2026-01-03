import React, { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import {
  SiGit,
  SiHtml5,
  SiGithub,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiBootstrap,
  SiVercel,
} from "react-icons/si";

export const Skills = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 6 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 4 },
  };

  const iconStyle = { fontSize: "60px" };
  const itemStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
  const rowWrapperStyle = { maxWidth: "100%", overflow: "hidden" };

  // ✅ One source of truth (icons + category + tooltip)
  const items = useMemo(
    () => [
      { name: "React", category: "Frontend", Icon: SiReact, note: "Component-based UI library." },
      { name: "JavaScript", category: "Frontend", Icon: SiJavascript, note: "Core language for web apps." },
      { name: "TypeScript", category: "Frontend", Icon: SiTypescript, note: "Safer JS with types." },
      { name: "HTML5", category: "Frontend", Icon: SiHtml5, note: "Structure of web pages." },
      { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, note: "Utility-first styling." },
      { name: "Bootstrap", category: "Frontend", Icon: SiBootstrap, note: "UI components & grid system." },

      { name: "Node.js", category: "Backend", Icon: SiNodedotjs, note: "JS runtime for servers." },
      { name: "Express", category: "Backend", Icon: SiExpress, note: "Fast Node framework." },
      { name: "MongoDB", category: "Backend", Icon: SiMongodb, note: "NoSQL database." },

      { name: "Git", category: "Tools", Icon: SiGit, note: "Version control." },
      { name: "GitHub", category: "Tools", Icon: SiGithub, note: "Repositories & collaboration." },
      { name: "Figma", category: "Tools", Icon: SiFigma, note: "UI/UX design tool." },
      { name: "Vercel", category: "Tools", Icon: SiVercel, note: "Hosting & deployment." },
    ],
    []
  );

  const categories = ["All", "Frontend", "Backend", "Tools"];

  // ✅ Filtered list for grid
  const filtered = items.filter((x) => {
    const matchCat = active === "All" ? true : x.category === active;
    const matchQuery = (x.name + " " + x.category).toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  // ✅ Carousel rows (keep your existing feel)
  const row1 = items.slice(0, 10);
  const row2 = items.slice(3, 11);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="section-title">Tech Stack</h2>
                  <p className="section-subtitle">Tools and technologies I use.</p>

                  {/* ✅ YOUR ORIGINAL IDEA: 2 marquee rows */}
                  <div style={rowWrapperStyle}>
                    <Carousel
                      responsive={responsive}
                      infinite
                      autoPlay
                      autoPlaySpeed={1000}
                      arrows={false}
                      draggable
                      customTransition="transform 800ms linear"
                      transitionDuration={800}
                    >
                      {row1.map((item, idx) => {
                        const IconComp = item.Icon;
                        return (
                          <div key={idx} style={itemStyle}>
                            <IconComp style={iconStyle} />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>

                  <div style={{ ...rowWrapperStyle, marginTop: 20 }}>
                    <Carousel
                      responsive={responsive}
                      infinite
                      autoPlay
                      autoPlaySpeed={1400}
                      arrows={false}
                      draggable
                      customTransition="transform 900ms linear"
                      transitionDuration={900}
                      rtl
                    >
                      {row2.map((item, idx) => {
                        const IconComp = item.Icon;
                        return (
                          <div key={idx} style={itemStyle}>
                            <IconComp style={iconStyle} />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>

                  {/* ✅ NEW: Filters + Search */}
                  <div className="tech-controls" style={{ marginTop: 30 }}>
                    <div className="tech-filters">
                      {categories.map((c) => (
                        <Button
                          key={c}
                          className={`tech-filter-btn ${active === c ? "active" : ""}`}
                          onClick={() => setActive(c)}
                        >
                          {c}
                        </Button>
                      ))}
                    </div>

                    <Form className="tech-search">
                      <Form.Control
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search (React, Backend, Tools...)"
                      />
                    </Form>
                  </div>

                  {/* ✅ NEW: Filtered Grid */}
                  <Row className="g-3" style={{ marginTop: 5 }}>
                    {filtered.map((item, idx) => {
                      const IconComp = item.Icon;

                      return (
                        <Col key={idx} xs={6} sm={4} md={3}>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id={`tech-tip-${idx}`}>{item.note}</Tooltip>}
                          >
                            <div
                              className={
                                isVisible
                                  ? "tech-card animate__animated animate__fadeInUp"
                                  : "tech-card"
                              }
                            >
                              <div className="tech-icon-wrap">
                                <IconComp className="tech-icon-react" />
                              </div>
                              <div className="tech-name">{item.name}</div>
                              <div className="tech-cat">{item.category}</div>
                            </div>
                          </OverlayTrigger>
                        </Col>
                      );
                    })}
                  </Row>

                  {/* Empty state */}
                  {filtered.length === 0 && (
                    <div style={{ textAlign: "center", marginTop: 18, color: "#B8B8B8" }}>
                      No results found.
                    </div>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
