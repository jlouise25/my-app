import React from "react";
import profileImg from "../../assets/profile-img1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaLinkedin, FaFacebookMessenger, FaGithub } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
import CV from '../../assets/JoshuaLouiseHonrado_CV.pdf'
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>JOLO</span> HONRADO
          </h1>

          <p className="home__job">
            <span className="text-cs">Aspiring </span>
            <b> Web Developer | Cloud Engineer
              {/* <Typewriter
                words={[
                  "Web Developer",
                  "DevOps Engineer",
                  "Cloud Engineer",
                  "Technical Support",
                  "FullStack Developer",
                ]}
                loop={false}
                cursor cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /> */}
            </b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            {/* <p className="home__data home__data-one">
              <span className="text-lg">
                1 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p> */}

            <p className="home__data home__data-two">
              <span className="text-lg">BS</span>

              <span className="text-sm text-cs">
                Computer <span>Science</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Quezon City, Philippines. A hardworking, flexible, and
            committed person who seeks challenging opportunities to demonstrate
            exemplary work performance and ethics that would contribute to the
            company's needs and goals.
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/joshua-louise-honrado-218247231/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/Joshie.Wander/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <FaFacebookMessenger />
            </a>

            <a
              href="https://github.com/jlouise25"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a download='' href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#home" className="hero__link text-cs">
              Click this!
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Web | Cloud</span>
      </div>
    </section>
  );
};

export default Home;
