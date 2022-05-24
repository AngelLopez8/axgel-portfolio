import React from 'react';

import Github from './Images/github.png';
import LinkedIn from './Images/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:angelomarlopez10@gmail.com" className="footer-link"><i className="far fa-envelope"></i> angelomarlopez10@gmail.com</a>
            <ul className="social-list">
                <li className="social-list-item">
                    <a className="social-list-link" href="https://github.com/AngelLopez8" target="_blank" rel="noreferrer"><img src={Github} alt="github" /></a>
                </li>
                <li className="social-list-item">
                    <a className="social-list-link" href="https://www.linkedin.com/in/angel-lopez-a93a43156/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="Linkedin" /></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;