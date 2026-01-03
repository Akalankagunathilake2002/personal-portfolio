import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const content = (
    <div className="proj-imgbx">
      {/* If imgUrl is empty, show a placeholder block */}
      {imgUrl ? (
        <img src={imgUrl} alt={title} className="proj-img" />
      ) : (
        <div className="proj-img placeholder-img" aria-label="Project placeholder" />
      )}

      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Col>
  );
};
