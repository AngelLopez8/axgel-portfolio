import React from 'react';

import Me from '../Images/me.JPEG';

const About = () => {
    return (
        <section className="about-me" id="about">
            <h2 className="section-title section-title-about">Who I am</h2>
            <p className="section-subtitle section-subtitle-about">Software Developer currently looking to develop professional experience as a Junior Developer</p>

            <div className="about-me-body">
                <p> I am a Wichita State University Alumni, I graduated with a Bachelors in Computer Science and a Minor in Mathematics.
                </p>
                <p>I aspire to work in the tech industry as a Software Engineer due to my curiosity about how technology works in the background
                    and the growing capabilities of Machine Learning. In the future I hope to have earned a Masters in the field of Computer Science 
                    and be employed in a company that is using Machine Learning and Artificial Intelligence to improve the lives of many.
                </p>
            </div>

            <img src={Me} alt="me" className="about-me-img" />
        </section>
    );
}

export default About;