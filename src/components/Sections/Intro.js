import React from 'react';

import Me from '../Images/me.JPEG';

const Intro = () => {
    return (
        <section className="intro">
            <h1 className="section-title section-title-intro">
                Hi, I am <strong>Angel Lopez</strong>
            </h1>
            <p className="section-subtitle section-subtitle-intro">Software Engineer</p>
            <img className="intro-img" src={Me} alt="me" />
        </section>
    );
}

export default Intro;