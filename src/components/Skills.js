import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

   const carouselSettings = {
     responsive: responsive,
     infinite: true,
     autoPlay: true,
     autoPlaySpeed: 2000,
     pauseOnHover: true,
     showDots: false,
     removeArrowOnDeviceType: ["tablet", "mobile"],
     keyBoardControl: true,
     customTransition: "transform 0.5s ease-in-out",
     transitionDuration: 500,
     shouldResetAutoplay: false,
     rewind: false,
     additionalTransfrom: 0,
     arrows: true,
     renderButtonGroupOutside: false,
     renderDotsOutside: false,
     centerMode: false,
     containerClass: "carousel-container",
     itemClass: "carousel-item-padding-40-px",
     swipeable: true,
     draggable: true,
     partialVisible: false,
     focusOnSelect: false,
   };

  
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy
              </p>
              <Carousel
                  {...carouselSettings}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
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
