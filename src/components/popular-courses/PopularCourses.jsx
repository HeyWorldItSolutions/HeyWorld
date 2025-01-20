import React from "react";
import "./PopularCourses.css";
import enrollIcon from "../../assets/svg/enrollicon.svg";

const popularCourses = [
  {
    id: 1,
    imgSrc: "./HTMLCSS.png",
    title: "HTML and CSS",
    description:
      "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS",
  },
  {
    id: 2,
    imgSrc: "./javascript.png",
    title: "JavaScript",
    description:
      "Learn JavaScript with examples and tutorials to build dynamic and interactive web applications.",
  },
  {
    id: 3,
    imgSrc: "./reactjs.png",
    title: "React JS",
    description:
      "Master React JS and build modern web applications with reusable components and state management.",
  },
  {
    id: 4,
    imgSrc: "./java.png",
    title: "Java",
    description:
      "Learn Java programming with examples and tutorials to build powerful and scalable applications.",
  },
  {
    id: 5,
    imgSrc: "./python.png",
    title: "Python",
    description:
      "Learn Python programming with examples and tutorials to build web apps, data analysis tools.",
  },
  {
    id: 6,
    imgSrc: "./c-sharp.png",
    title: "C#",
    description:
      "Master C# programming and build powerful desktop and web applications with object-oriented principles.",
  },
  {
    id: 7,
    imgSrc: "./angularjs.png",
    title: "Angular JS",
    description:
      "Learn Angular and build modern, dynamic, single-page applications using components and directives.",
  },
  {
    id: 8,
    imgSrc: "https://cutecdn.codingdojo.com/svg_images/curriculum/new_icon.svg",
    title: ".NET Core",
    description:
      "Master .NET Core framework to build cross-platform, high-performance web applications with C# and ASP.NET.",
  },
];

function PopularCourses() {
  return (
    <div className="popular-courses-container">
      <h2 className="popular-courses-title">
        Popular <span className="courses-title-text">Courses</span>
      </h2>
      <div className="popular-courses-wrapper">
        {popularCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.imgSrc} alt={course.title} className="card-img" />
            <div className="course-card-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <button className="enroll-btn">
                <img src={enrollIcon} alt="enroll" className="card-icon" />{" "}
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Courses</button>
    </div>
  );
}

export default PopularCourses;
