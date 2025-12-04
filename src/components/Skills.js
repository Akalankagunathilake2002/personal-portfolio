import React from "react";                    // ✅ add this
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
} from "react-icons/si";                      // ❌ removed SiVisualstudiocode & SiJava

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 6 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 4 },
  };

  const iconStyle = {
    fontSize: "60px",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const sectionStyle = {
    padding: "60px 0",
    background: "#ffffff",
    color: "#111",
    textAlign: "center",
  };

  const rowWrapperStyle = {
    maxWidth: "100%",
    overflow: "hidden",
  };

  const row1 = [
    <SiGit />,
    <SiHtml5 />,
    <SiGithub />,
    <SiExpress />,
    <SiNodedotjs />,
    <SiMongodb />,
    <SiReact />,
    <SiJavascript />,
    <SiTailwindcss />,
    <SiTypescript />,
  ];

  const row2 = [
    <SiReact />,
    <SiNodedotjs />,
    <SiMongodb />,
    <SiJavascript />,
    <SiTailwindcss />,
    <SiGit />,
    <SiHtml5 />,
    <SiGithub />,
  ];

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: 10 }}>
        Tech Stack
      </h2>
      <p style={{ fontSize: "14px", marginBottom: 40 }}>
        Tools and technologies I use.
      </p>

      {/* Row 1 */}
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
          {row1.map((Icon, idx) => (
            <div key={idx} style={itemStyle}>
              {React.cloneElement(Icon, { style: iconStyle })}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Row 2 */}
      <div style={{ ...rowWrapperStyle, marginTop: 25 }}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1400}
          arrows={false}
          draggable
          customTransition="transform 900ms linear"
          transitionDuration={900}
        >
          {row2.map((Icon, idx) => (
            <div key={idx} style={itemStyle}>
              {React.cloneElement(Icon, { style: iconStyle })}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
