import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./MainContent.css";
import WhoCanJoinSection from "../who-can-join-section/WhoCanJoinSection";
import HowItWorks from "../how-it-works/HowItWorks";
import PopularCourses from "../popular-courses/PopularCourses";
import Testimonial from "../testimonial/Testimonial";
import Services from "../services/Services";

function MainContent() {
  const location = useLocation();
  const testimonialsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#testimonials") {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#services") {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const testimonials = [
    {
      text: "The foundational features of Sketch have been indispensable.",
      name: "Jasper Hauser",
      title: "Darkroom",
    },
    {
      text: "Another great testimonial.",
      name: "John Doe",
      title: "Company XYZ",
    },
    // Add more testimonials here
  ];

  return (
    <>
      <div className="container">
        <div className="first-main-content">
          <h2 className="main-title">Skill your way up to success with us</h2>
          <p className="main-desc">
            Get the skills you need for the future of work.
          </p>
        </div>
        <div>
          <img
            src="./home-image3.png"
            alt="Skill up"
            // width={500}
            // height={380}
            className="home-first-img"
          />
        </div>
      </div>
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <WhoCanJoinSection />
      <HowItWorks />
      <PopularCourses />
      <div ref={testimonialsRef} id="testimonials">
        <Testimonial testimonials={testimonials} />
      </div>
    </>
  );
}

export default MainContent;
