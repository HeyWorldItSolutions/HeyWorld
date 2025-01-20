import React from "react";
import { Modal } from "react-responsive-modal";
import "./CoursesListPage.css";
import "react-responsive-modal/styles.css";
import enrollIcon from "../../assets/svg/enrollicon.svg";

const courses = [
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
  {
    id: 9,
    imgSrc: "./java-stack.png",
    title: "Java Full Stack",
    description:
      "Become a full-stack developer by mastering Java for both frontend and backend development, utilizing Spring Boot, HTML, CSS, and JavaScript.",
  },
  {
    id: 10,
    imgSrc: "./full-stack-web.png",
    title: ".NET Full Stack",
    description:
      "Learn full-stack development with .NET, C#, and modern web technologies like Angular or React, building end-to-end applications.",
  },
  {
    id: 11,
    imgSrc: "./springbooticon.png",
    title: "Spring Boot",
    description:
      "Master Spring Boot and build Java-based backend applications with the Spring framework, including REST APIs and microservices.",
  },
  {
    id: 12,
    imgSrc: "./sqlicon.png",
    title: "SQL",
    description:
      "Learn SQL to manage and query relational databases, mastering data manipulation, queries, joins, and database optimization techniques.",
  },
];

function CoursesListPage() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course); // Set the selected course
    setOpenFirst(true); // Open the first modal
  };

  return (
    <div className="courses-container">
      <h2 className="courses-title">
        Courses <span className="courses-title-text">List</span>
      </h2>
      <div className="popular-courses-wrapper">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.imgSrc} alt={course.title} className="card-img" />
            <div className="course-card-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <button
                className="enroll-btn"
                onClick={() => handleOpenModal(course)}
              >
                <img src={enrollIcon} alt="enroll" className="card-icon" />{" "}
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
        {selectedCourse && (
          <div className="modal-header">
            <img
              src={selectedCourse.imgSrc}
              alt={selectedCourse.title}
              className="modal-img"
            />
            <h3 className="modal-title">{selectedCourse.title}</h3>
          </div>
        )}
        <p>First modal</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, et.
        Eligendi, esse numquam, magni facere quos quisquam voluptatem explicabo
        libero laudantium saepe quam iste maxime accusamus corporis
        reprehenderit repudiandae voluptates?
        <button className="button" onClick={() => setOpenSecond(true)}>
          Open second modal
        </button>
      </Modal>
      <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
        <p>Second modal</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        maiores atque blanditiis possimus accusantium obcaecati amet sit totam
        quis aspernatur excepturi, deleniti rem. Inventore, exercitationem totam
        suscipit corporis odit dicta?
      </Modal>
    </div>
  );
}

export default CoursesListPage;
