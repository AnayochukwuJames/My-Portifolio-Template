import React from "react";
import "./Footer.css";
import images from "../../assets/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="nav_logo">
            <img src={images.ibrahimOpeniyiIcon} alt="" className="logo" />
          </div>
          <div
            className="follow-handle"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
          >
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-medium"></i>
              </a>
            </span>
          </div>
        </div>
        {/* <div className="subscribe">
          <label htmlFor="search">Stay up to date</label>
          <div className="input-with-icon">
            <input type="text" placeholder="Email address" />
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div> */}
        <ul className="nav-list">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            facere. Sed obcaecati dolorem nemo perspiciatis deserunt,
          </p>
          <ul className="menu_list-items">
            <li>
              <i class="fa-solid fa-circle-info"></i>
              <a href="#about">About</a>
            </li>
            <li>
              <i className="fa-solid fa-user-shield"></i>
              <a href="#services">Services</a>
            </li>
            <li>
              <i className="fa-solid fa-suitcase"></i>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <i class="fa-solid fa-address-book"></i>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </ul>
        <div className="form-wrap">
          <p>Let's make beautiful products!</p>
          <a href="#contact">
            <button className="my-button">
              Let's Work
              <i class="fa-solid fa-handshake"></i>
            </button>
          </a>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Ibrahim Openiyi. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
