import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #222222;
  width: 100%;
  padding: 0 10px;
  // padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
      img {
        height: 140px;
      }
    }
  }
  .menuToggleBtn {
    display: none;
    color: #cccccc;
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 55px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }

    .nav_logo {
      .nav-logo-link {
        img {
          height: 120px;
        }
      }
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0 20px;
    &:hover {
      cursor: pointer;
      color: #f98149;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: #cccccc;
    display: block;
    font-weight: 600;
  }
  .active-link {
    color: #f98149;
    text-decoration: none;
    display: block;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;

    .nav-menu-list {
      margin: 10px 0;
    }
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const location = useLocation();

  const isActiveHome = () => location.pathname === "/" && !location.hash;
  const isActiveTestimonials = () => location.hash === "#testimonials";
  const isActiveServices = () => location.hash === "#services";

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            <img src="./logo.png" alt="Ezy Skills Logo" />
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <NavLink
              to="/"
              className={isActiveHome() ? "active-link" : "nav-menu-list"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-menu-list"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#services"
              className={isActiveServices() ? "active-link" : "nav-menu-list"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#testimonials"
              className={
                isActiveTestimonials() ? "active-link" : "nav-menu-list"
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-menu-list"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-menu-list"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-menu-list"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;
