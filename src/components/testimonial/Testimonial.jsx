import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Quote from "../../assets/svg/blockquote.svg";
import "./Testimonial.css";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lasya",
      text: "The training is exceptional and more than enough for anyone with the right motivation to become a software engineer. It's that good!",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rahul",
      text: "The depth and quality of your training equip anyone with the drive to easily pursue a career as a software engineer.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Munidher",
      text: "Your training is exceptional, providing all the essential skills and knowledge needed for a Chartered Accountant to smoothly transition into a successful software engineer.",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sandhya",
      text: "Anyone with the right motivation can turn their dreams of becoming a software engineer into reality with the solid foundation your training provides.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lakshmi",
      text: "Your program equips individuals with the practical skills and knowledge required to excel in software engineering, making it the perfect opportunity for anyone looking to make the leap.",
    },
  ];
  return (
    <section className="testimonial-container">
      {/* <div className="title">
        <h2>Testimonial</h2>
        <p>What members are saying.</p>
      </div> */}
      <h2 className="popular-courses-title">
        What <span className="courses-title-text">Members Say</span>
      </h2>
      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              {/* <img className="review-img" src={review.image} alt="" /> */}
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
