import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "React & Node.js Full-Stack",
      imgUrl: projImg1,
      websiteUrl: "https://my-ecommerce-app.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-app",
    },
    {
      title: "Task Management App",
      description: "React & Firebase",
      imgUrl: projImg2,
      websiteUrl: "https://task-manager-app.netlify.app",
      githubUrl: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather Dashboard",
      description: "JavaScript & APIs",
      imgUrl: projImg3,
      websiteUrl: "https://weather-dashboard.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Portfolio Website",
      description: "React & Bootstrap",
      imgUrl: projImg1,
      websiteUrl: "https://your-portfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Blog Platform",
      description: "Next.js & MongoDB",
      imgUrl: projImg2,
      websiteUrl: "https://my-blog-platform.vercel.app",
      githubUrl: "https://github.com/yourusername/blog-platform",
    },
    {
      title: "Social Media Clone",
      description: "React & Express",
      imgUrl: projImg3,
      websiteUrl: "https://social-app-clone.herokuapp.com",
      githubUrl: "https://github.com/yourusername/social-app",
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background decoration"
      ></img>
    </section>
  );
};
