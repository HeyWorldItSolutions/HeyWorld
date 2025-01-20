import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
      <h2 className="popular-courses-title">
        Services <span className="courses-title-text">We Offer</span>
      </h2>
      <div className="services-wrapper">
        <div className="services-card">
          <img
            src="./industry-ready.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">
            ⁠Industry-Ready Software Training
          </p>
          <p className="services-card-desc">
            Prepare to excel in the competitive IT landscape with our
            Industry-Ready Software Training, designed specifically for recent
            graduates and professionals looking to transition into the tech
            industry. Our unique approach combines cutting-edge course content
            with practical insights into what employers expect, ensuring you’re
            not just skilled but truly job-ready.
          </p>
        </div>
        <div className="services-card" id="bg-orange">
          <img
            src="./software-training.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">Software Training</p>
          <p className="services-card-desc">
            Unlock your potential with our comprehensive software training
            programs designed to meet the ever-evolving demands of the IT
            industry. Whether you're a beginner looking to kickstart your career
            or an experienced professional aiming to upskill, we offer
            expert-led training in some of the world’s most sought-after IT
            domains
          </p>
        </div>

        <div className="services-card">
          <img
            src="./realtime-projects.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">
            Real-Time Projects and Freelancing Services
          </p>
          <p className="services-card-desc">
            Turn your ideas into reality with our Real-Time Project Solutions.
            Whether you're an engineering student looking for the perfect
            final-year project or a business seeking freelance IT expertise, we
            offer end-to-end project support to meet your unique needs.
          </p>
        </div>
        <div className="services-card" id="bg-orange">
          <img
            src="./internship.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">
            Internship Services: Gain Real-World Experience
          </p>
          <p className="services-card-desc">
            Kickstart your career with our Internship Programs, designed to
            provide graduates and aspiring professionals with hands-on
            experience in the software industry. As part of our comprehensive
            training services, these internships bridge the gap between learning
            and working, empowering you with practical exposure to real-world
            projects and professional environments.
          </p>
        </div>
        <div className="services-card">
          <img
            src="./certification.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">
            Certification for Course Completion
          </p>
          <p className="services-card-desc">
            Celebrate your achievement with our Course Completion Certificates,
            awarded to individuals who successfully complete their training at
            our institute. These certifications are more than just a
            document—they are a testament to your hard work, skills, and
            commitment to advancing your career in the IT industry.
          </p>
        </div>
        <div className="services-card" id="bg-orange">
          <img
            src="./placement.png"
            alt="Software Training"
            className="services-card-img"
          />
          <p className="services-card-title">
            Placement Assistance: Your Gateway to IT Careers
          </p>
          <p className="services-card-desc">
            At our institute, your success is our priority. Along with top-notch
            training, we offer comprehensive Placement Assistance to help you
            land your dream job. With our strong network of industry
            partnerships and in-house freelancing opportunities, we ensure
            you’re well-prepared and well-connected to excel in your career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
