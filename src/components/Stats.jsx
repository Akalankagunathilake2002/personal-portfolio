import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

/* ✅ custom hook (allowed) */
function useCountUp(target, startWhenVisible) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhenVisible) return;

    let rafId = null;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [target, startWhenVisible]);

  return value;
}

/* ✅ child component: hook used correctly (top-level inside component) */
const StatCard = ({ label, value, suffix, isVisible }) => {
  const number = useCountUp(value, isVisible);

  return (
    <div className={isVisible ? "stat-card animate__animated animate__fadeInUp" : "stat-card"}>
      <div className="stat-number">
        {number}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export const Stats = () => {
  // ✅ edit these numbers to yours
  const stats = useMemo(
    () => [
      { label: "Projects Completed", value: 8, suffix: "+" },
      { label: "Technologies Used", value: 12, suffix: "+" },
      { label: "GitHub Repositories", value: 12, suffix: "+" },
      { label: "Months of Building", value: 24, suffix: "+" },
    ],
    []
  );

  return (
    <section className="stats" id="stats">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className="section-title">Quick Stats</h2>
              <p className="section-subtitle">A small snapshot of my work.</p>

              <Row className="g-3">
                {stats.map((s, idx) => (
                  <Col key={idx} xs={12} sm={6} md={3}>
                    <StatCard {...s} isVisible={isVisible} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
