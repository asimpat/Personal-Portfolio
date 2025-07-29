import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers and improved application performance by 40%.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description:
        "Built responsive websites and web applications for clients. Collaborated with designers and backend developers to deliver high-quality products.",
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Git"],
    },
    {
      title: "Junior Developer",
      company: "Startup XYZ",
      period: "2020 - 2021",
      description:
        "Assisted in developing features for a SaaS platform. Learned modern development practices and worked with agile methodologies.",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "JavaScript",
        "Bootstrap",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="experience-bx wow zoomIn">
              <h2>Experience</h2>
              <p>My professional journey in software development</p>
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-content">
                      <div className="experience-header">
                        <h3>{exp.title}</h3>
                        <div className="experience-meta">
                          <span className="company">{exp.company}</span>
                          <span className="period">{exp.period}</span>
                        </div>
                      </div>
                      <p className="experience-description">
                        {exp.description}
                      </p>
                      <div className="experience-technologies">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="experience-cta">
                <button onClick={() => console.log("Download CV")}>
                  Download CV <ArrowRightCircle size={25} />
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
