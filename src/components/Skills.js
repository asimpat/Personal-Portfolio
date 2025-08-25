import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/skills/")
      .then((res) => {
        setSkills(res.data);
        console.log(skills);
        
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
      });
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const carouselSettings = {
    responsive,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    pauseOnHover: true,
    showDots: false,
    removeArrowOnDeviceType: ["tablet", "mobile"],
    keyBoardControl: true,
    customTransition: "transform 0.5s ease-in-out",
    transitionDuration: 500,
    arrows: true,
    swipeable: true,
    draggable: true,
  };

  // Function to choose an icon based on percentage
  const getMeterImage = (percentage) => {
    if (percentage >= 80) return meter1;
    if (percentage >= 50) return meter2;
    return meter3;
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are my professional skills and their proficiency levels.
              </p>
              <Carousel 
                {...carouselSettings}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.length > 0 ? ( 
                  skills.map((skill, index) => (
                    <div   
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }} 
                    >
                      <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbar
                          value={skill.percentage}
                          text={`${skill.percentage}%`}
                          styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#a020f0",
                            trailColor: "#333",
                          })} 
                        />
                      </div>
                      <h5 style={{ marginTop: "10px", color: "#fff" }}>
                        {skill.name} 
                      </h5>
                    </div>
                  ))
                ) : (
                  <p>Loading skills...</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background decoration"
      />
    </section>
  );
};