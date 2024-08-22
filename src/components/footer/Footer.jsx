import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Praba$hwara</h1>
            <p class="footer__text">&copy; Copyright 2024. All right reserved</p>
            <div className="footer__social">
                <a href="https://twitter.com/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a>
                <a href="https://www.github.com/prbshx74" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;