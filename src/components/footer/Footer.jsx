import React from "react";
import { FaLinkedin, FaFacebookMessenger, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/joshua-louise-honrado-218247231/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/Joshie.Wander/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FaFacebookMessenger />
          </a>

          <a
            href="https://github.com/jlouise25"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <FaGithub />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>JOLO. </span>All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed By <span>Joshua Louise Honrado</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;