import React, { useState } from 'react';

import MyLogo from './Images/mylogo.png';

const NavBar = () => {

    const [ open, setOpen ] = useState(false);

    const toggleHamburger = () => {
        setOpen(!open);
        document.body.classList.toggle('nav-open');
    }
    
    const handleLink = () => {
        if (open) {
            document.body.classList.remove('nav-open');
        }
        setOpen(!open);
    }

    return (
        <header>
            <div className="logo">
                <a href="/"><img src={MyLogo} alt=""/></a>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleHamburger}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="/#about" onClick={handleLink}>About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#services" onClick={handleLink}>Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#projects" onClick={handleLink}>Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#certificates" onClick={handleLink}>Certificates</a></li>
                    {/* <li className="nav-item"><a className="nav-link" href="/contact" onClick={handleLink}>Contact</a></li> */}
                    <li className="nav-item"><a className="nav-link" href="https://github.com/AngelLopez8" onClick={handleLink}>Github</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/angel-lopez-a93a43156/" onClick={handleLink}>LinkedIn</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;