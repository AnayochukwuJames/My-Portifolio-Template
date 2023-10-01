import React from "react";
// import CountUp from "react-countup/build/CountUp";
import "./Hero.css";
import data from "../../assets/images";
import CountUp from "react-countup";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import images from "../../assets/images";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "A Java Software Engineer",
      "Data Scietist",
      "Fullstack Java Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section id="about">
      <div className="container">
        <div className="sub-container">
          {/* { == hero left content === } */}
          <div
            className="animated-text"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h5>Hello Welcome</h5>
            <h1 className="name" data-aos="fade-up" data-aos-duration="1000">
              I'm Anayochukwu James <br />a {typeEffect}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="first-col-button"
            >
              <a href="#contact">
                <button className="my-button">
                  Let's Work
                  <i class="fa-solid fa-handshake"></i>
                </button>
              </a>
              <a href={images.resume} className="postfolio-btn">
                Resume <i class="fa-solid fa-file"></i>
              </a>
            </div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="hero-subtitle"
          >
            <span className="quote">
              <i class="fa-solid fa-quote-left"></i>
            </span>
            This is an experienced full-stack Java developer with background in
            HTML/CSS, Spring, SpringBoot, JavaScript, Boostrap, and
            Solidity. I have honed my skills during his time at{" "}
            <span>
              <a className="anchor" href="https://decagon.institute/">
                Decagon
              </a>
            </span>
            , where I specialized in Java backend development and actively
            contributed to various full-stack projects.
          </p>
          <div
            className="follow-handle"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
          >
            <span>Follow Me:</span>
            <span >
              <a href="https://github.com/AnayochukwuJames" className="social-icon">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="https://www.linkedin.com/in/anayochukwu-james-0653b3245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt1jpXCBWS%2BWvQkyLb%2B7L9g%3D%3D" className="social-icon">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#" className="social-icon">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="https://www.facebook.com/james.anayochukwu.1" className="social-icon">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </span>
          </div>
        </div>
        {/* { === hero left end === } */}
        <div className="hero-left">
          <figure className="figure-image">
            <img src={images.astro} alt="" className="hero-image" />
          </figure>
        </div>
        {/* { === Hero Center Left ===} */}
        <div className="right-content">
          <div className="content-right">
            <h2>
              <CountUp start={0} end={1} duration={2} suffix="+" />
            </h2>
            <h4>years of experience</h4>
          </div>
          <div className="content-right">
            <h2>
              <CountUp start={0} end={97} duration={2} suffix="%" />
            </h2>
            <h4>Success Rate</h4>
          </div>
          <div className="content-right">
            <h2>
              <CountUp start={0} end={30} duration={2} suffix="+" />
            </h2>
            <h4>happy clients</h4>
          </div>
          <div className="content-right">
            <h2>
              <CountUp start={0} end={120} duration={2} suffix="+" />
            </h2>
            <h4>Completed projects</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
