import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/experiences/")
      .then((res) => {
        // Handle both single object and array from backend
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setExperiences(data);
      })
      .catch((err) => console.error("Error fetching experiences:", err));
  }, []);

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="experience-bx wow zoomIn">
              <h2>Experience</h2>
              <p>My professional journey in software development</p>
              <div className="experience-timeline">
                {experiences.length > 0 ? (
                  experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <div className="experience-content">
                        <div className="experience-header">
                          <h3>{exp.title}</h3>
                          <div className="experience-meta">
                            <span className="company">{exp.company}</span>
                            <span className="period">{exp.period_display}</span>
                          </div>
                        </div>
                        <p className="experience-description">
                          {exp.description}
                        </p>
                        <div className="experience-technologies">
                          {exp.skills_list.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading experiences...</p>
                )}
              </div>
              <div className="experience-cta">
                <button
                  onClick={() => {
            
                    const link = document.createElement("a");
                    link.href = "http://127.0.0.1:8000/api/resume/";
                    link.setAttribute("download", "Asim's_Resume.pdf"); 
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="btn btn-primary"
                >
                  Download CV{" "}
                  <Download size={20} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={headerImg} alt="Background" />
    </section>
  );
};
