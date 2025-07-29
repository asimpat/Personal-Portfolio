import { Col } from "react-bootstrap";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  websiteUrl,
  githubUrl,
}) => {
  const handleWebsiteClick = () => {
    if (websiteUrl) {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className={`proj-imgbx ${websiteUrl ? "clickable" : ""}`}
        onClick={websiteUrl ? handleWebsiteClick : undefined}
        style={{ cursor: websiteUrl ? "pointer" : "default" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {websiteUrl && (
            <div className="project-links">
              <button
                className="project-link-btn live-btn"
                onClick={handleWebsiteClick}
                title="View Live Site"
              >
                <BoxArrowUpRight size={16} />
                <span>Live Site</span>
              </button>
              {githubUrl && (
                <button
                  className="project-link-btn github-btn"
                  onClick={handleGithubClick}
                  title="View Source Code"
                >
                  <Github size={16} />
                  <span>Code</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
